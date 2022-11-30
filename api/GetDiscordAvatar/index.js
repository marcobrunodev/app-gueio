const { request } = require('undici')
const getCookie = require('../utils/getCookie')

const { API_URL } = process.env

module.exports = async (context, req) => {
  try {
    const cookies = req.headers?.cookie
    if (!cookies) throw new Error('Cookie without')

    const token = getCookie(cookies, 'discordToken')
    if (!token) throw new Error('Invalid token')

    const responseRefreshToken = await request(`${API_URL}/users/discord/avatar/${token}`)
    const { discordAvatar } = await responseRefreshToken.body.json()

    return {
      status: 200,
      body: {
        status: 200,
        discordAvatar
      }
    }
  } catch ({ message }) {
    return {
      status: 500,
      body: {
        status: 500,
        message
      }
    }
  }
}
