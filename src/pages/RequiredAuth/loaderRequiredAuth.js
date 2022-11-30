import auth from '../../services/auth.service'
import users from '../../services/users.service'

const loaderRequireAuth = async () => {
  const authorized = await auth.refreshDiscordToken()
  const discordAvatar = await users.getDiscordAvatar()

  return {
    authorized,
    discordAvatar
  }
}

export default loaderRequireAuth
