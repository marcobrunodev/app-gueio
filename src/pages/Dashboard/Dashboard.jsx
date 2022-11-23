import Button from '../../components/Button'
import LogoutButton from '../../components/LogoutButton'

const { VITE_DISCORD_OAUTH2_URL } = import.meta.env

const Dashboard = () => (
  <>
    <LogoutButton />
    <Button as="a" href={VITE_DISCORD_OAUTH2_URL}>Dashboard</Button>
  </>
)

export default Dashboard
