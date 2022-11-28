const auth = {
  authEth: async (address) => {
    const url = `/api/auth/eth/${address}`

    try {
      await fetch(url, { method: 'POST' })
    } catch (error) {
      return false
    }
  },
  revokeDiscorToken: async () => {
    const url = '/api/auth/discord/revoke'

    try {
      await fetch(url)

      return true
    } catch (error) {
      return false
    }
  },
  refreshDiscordToken: async () => {
    const url = '/api/auth/discord/refresh/'
    try {
      const response = await fetch(url)
      const data = await response.json()

      if (data.status !== 200) throw new Error('Invalid token')

      return true
    } catch (error) {
      return false
    }
  }
}

export default auth
