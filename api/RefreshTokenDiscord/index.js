const { request } = require('undici')
const getCookie = require('../utils/getCookie')

const { API_URL } = process.env

module.exports = async (context, req) => {
  try {
    const cookies = req.headers.cookie
    const token = getCookie(cookies, 'discordToken')

    const responseRefreshToken = await request(`${API_URL}/auth/discord/refresh/${token}`)
    const newToken = await responseRefreshToken.body.json()

    return {
      status: 200,
      body: {
        status: 200,
        discordToken: newToken.token.access_token
      },
      cookies: [{
        name: 'discordTokenType',
        value: `${newToken.token.token_type}`,
        path: '/',
        sameSite: 'Strict',
        secure: true,
        httpOnly: true
      },
      {
        name: 'discordToken',
        value: `${newToken.token.access_token}`,
        path: '/',
        sameSite: 'Strict',
        secure: true,
        httpOnly: true
      }]
    }
  } catch (error) {
    return {
      status: 500,
      body: {
        status: 500,
        error: 'Token invalid'
      }
    }
  }
}
