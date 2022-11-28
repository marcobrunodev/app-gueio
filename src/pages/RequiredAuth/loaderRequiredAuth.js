import auth from '../../services/auth.service'

const loaderRequireAuth = async () => {
  const authorized = await auth.refreshDiscordToken()

  return {
    authorized
  }
}

export default loaderRequireAuth
