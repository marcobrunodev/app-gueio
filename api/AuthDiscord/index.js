const { request } = require('undici')

const {
  DISCORD_API_URL,
  DISCORD_CLIENT_ID,
  DISCORD_SECRETY_ID,
  DISCORD_REDIRECT_URI,
  DISCORD_SCOPE,
  API_URL
} = process.env

module.exports = async (context, req) => {
  const { code } = req.query

  if (code) {
    const config = {
      method: 'POST',
      body: new URLSearchParams({
        client_id: DISCORD_CLIENT_ID,
        client_secret: DISCORD_SECRETY_ID,
        code,
        grant_type: 'authorization_code',
        redirect_uri: DISCORD_REDIRECT_URI,
        scope: DISCORD_SCOPE
      }).toString(),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }

    try {
      const tokenResponseData = await request(`${DISCORD_API_URL}/oauth2/token`, config)
      const authData = await tokenResponseData.body.json()

      if (authData.error) throw authData

      const userResponse = await request(`${DISCORD_API_URL}/users/@me`, {
        headers: {
          Authorization: `${authData.token_type} ${authData.access_token}`
        }
      })
      const user = await userResponse.body.json()
      context.log('user', user)
      context.log('API_URL', API_URL)
      const userDBResponse = await request(`${API_URL}/users/discord/${user.id}`)
      const userDB = await userDBResponse.body.json()
      context.log('userDB', userDB.user)

      context.bindings.outputUsers = {
        id: userDB.user?.id,
        discord: {
          id: user.id,
          username: user.username,
          avatar: user.avatar,
          banner: user.banner,
          bannerColor: user.banner_color,
          accentColor: user.accent_color
        }
      }

      context.log('SUCCESS - AuthDiscord', user)
      return {
        status: 302,
        headers: {
          location: '/dashboard'
        }
      }
    } catch (error) {
      context.log(`ERROR - AuthDiscord - ${error}`)

      return {
        status: 302,
        headers: {
          location: '/login'
        }
      }
    }
  }

  context.log('ERROR - AuthDiscord - No code')
  return {
    status: 302,
    headers: {
      location: '/login'
    }
  }
}
