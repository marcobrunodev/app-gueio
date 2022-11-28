import Button from '../../components/Button'
import LogoutButton from '../../components/LogoutButton'
import auth from '../../services/auth.service'

const { VITE_DISCORD_OAUTH2_URL } = import.meta.env

const Dashboard = () => (
  <>
    <LogoutButton />
    <Button as="a" href={VITE_DISCORD_OAUTH2_URL}>Discord</Button>
    <Button onClick={() => {
      auth.refreshDiscordToken()
    }}>Refresh token</Button>
  </>
)

export default Dashboard
