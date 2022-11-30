const { request } = require('undici')

const {
  DISCORD_CLIENT_ID,
  DISCORD_SECRETY_ID,
  DISCORD_API_URL
} = process.env

module.exports = async (context, req) => {
  try {
    const user = context.bindings.inputUsers[0]

    if (!user) throw new Error('Not found user')

    const config = {
      method: 'POST',
      body: new URLSearchParams({
        client_id: DISCORD_CLIENT_ID,
        client_secret: DISCORD_SECRETY_ID,
        grant_type: 'refresh_token',
        refresh_token: user.discord.refreshToken
      }).toString(),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }

    const reponseRefreshToken = await request(`${DISCORD_API_URL}/oauth2/token`, config)
    const token = await reponseRefreshToken.body.json()

    const responseDiscordMe = await request(`${DISCORD_API_URL}/users/@me`, {
      headers: {
        Authorization: `${token.token_type} ${token.access_token}`
      }
    })
    const discordUser = await responseDiscordMe.body.json()

    if (discordUser.code === 0) throw new Error('Token invalid')

    context.bindings.outputUsers = {
      id: user.id,
      discord: {
        id: discordUser.id,
        username: discordUser.username,
        discriminator: discordUser.discriminator,
        avatar: discordUser.avatar,
        banner: discordUser.banner,
        bannerColor: discordUser.banner_color,
        accentColor: discordUser.accent_color,
        token: token.access_token,
        refreshToken: token.refresh_token,
        scope: token.scope
      }
    }

    return {
      status: 200,
      body: {
        token
      }
    }
  } catch (error) {
    return {
      status: 500
    }
  }
}
