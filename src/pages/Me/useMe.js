import { useLoaderData } from 'react-router-dom'

const useMe = () => {
  const { discordAvatar } = useLoaderData()

  console.log('discordAvatar useMe', discordAvatar)

  return {
    discordAvatar
  }
}

export default useMe
