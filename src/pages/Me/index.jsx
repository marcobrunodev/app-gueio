import Me from './Me'
import useMe from './useMe'

export default () => {
  const { discordAvatar, nfts } = useMe()

  return <Me avatar={discordAvatar} nfts={nfts} />
}
