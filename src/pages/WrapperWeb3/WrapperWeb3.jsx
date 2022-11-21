import { Outlet } from 'react-router-dom'
import { WagmiConfig } from 'wagmi'

const WrapperWeb3 = (props) => (
  <WagmiConfig {...props}>
    <Outlet />
  </WagmiConfig>
)

export default WrapperWeb3
