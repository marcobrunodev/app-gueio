const users = {
  getDiscordAvatar: async () => {
    try {
      const url = '/api/users/discord/avatar'

      const response = await fetch(url)
      const { discordAvatar } = await response.json()

      return discordAvatar
    } catch (error) {
      console.log('error', error)
      return error
    }
  }
}

export default users
