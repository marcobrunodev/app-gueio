const { request } = require('undici')

const {
  DISCORD_CLIENT_ID,
  DISCORD_SECRETY_ID,
  DISCORD_REDIRECT_URI,
  DISCORD_SCOPE
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

    console.log('reidrect_uri', DISCORD_REDIRECT_URI)

    try {
      const tokenResponseData = await request('https://discord.com/api/oauth2/token', config)
      const authData = await tokenResponseData.body.json()

      if (authData.error) throw authData

      return {
        status: 302,
        headers: {
          location: '/dashboard'
        }
      }
    } catch (error) {
      console.log(error)

      return {
        status: 400,
        body: {
          status: 400,
          message: error
        }
      }
    }
  }

  return {
    status: 400,
    body: {
      status: 400,
      message: 'No code'
    }
  }
}
