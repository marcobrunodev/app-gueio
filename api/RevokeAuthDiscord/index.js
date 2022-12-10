const { request } = require('undici')
const getCookie = require('../utils/getCookie')

const {
  DISCORD_API_URL,
  DISCORD_CLIENT_ID,
  DISCORD_SECRETY_ID,
  API_URL
} = process.env

module.exports = async (context, req) => {
  try {
    const cookies = req.headers.cookie
    const token = getCookie(cookies, 'discordToken')

    const config = {
      method: 'POST',
      body: new URLSearchParams({
        client_id: DISCORD_CLIENT_ID,
        client_secret: DISCORD_SECRETY_ID,
        token
      }).toString(),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }

    await request(`${DISCORD_API_URL}/oauth2/token/revoke`, config)
    await request(`${API_URL}/users/discord/token/${token}`, { method: 'PUT' })

    return {
      status: 200
    }
  } catch (error) {
    return {
      status: 500,
      body: {
        error
      }
    }
  }
}
