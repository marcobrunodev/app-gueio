import Card from './Card'
import useCard from './useCard'

export default () => {
  const { nft, description, setDiscordAvatar } = useCard()

  return <Card nft={nft} description={description} onClick={setDiscordAvatar} />
}
