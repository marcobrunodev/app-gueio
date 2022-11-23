import { Web3Modal } from '@web3modal/react'
import { object } from 'prop-types'
import { Outlet } from 'react-router-dom'
import { WagmiConfig } from 'wagmi'

const { VITE_PROJECT_ID } = import.meta.env

const WrapperWeb3 = ({ wagmiClient, ethereumClient }) => (
  <>
    <WagmiConfig client={wagmiClient}>
      <Outlet />
    </WagmiConfig>

    <Web3Modal
        projectId={VITE_PROJECT_ID}
        theme="dark"
        accentColor="blackWhite"
        ethereumClient={ethereumClient}
      />
  </>
)

WrapperWeb3.propTypes = {
  ethereumClient: object.isRequired,
  wagmiClient: object.isRequired
}

export default WrapperWeb3
