import Me from './Me'
import useMe from './useMe'

export default () => {
  const { discordAvatar } = useMe()

  return <Me avatar={discordAvatar} />
}
