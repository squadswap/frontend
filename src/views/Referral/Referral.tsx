import React from 'react'
import { useWeb3React } from '@web3-react/core'
import styled from 'styled-components'
import { BaseLayout, Button } from '@pancakeswap/uikit'

import Page from 'components/Layout/Page'
import ConnectWalletButton from 'components/ConnectWalletButton' 
import Hero from './components/Hero'
import TotalReferral from './components/TotalReferral'
import ReferralCommission from './components/ReferralCommission'
import ReferralLink from './components/ReferralLink'
import UnlockWalletCard from './components/UnlockWalletCard'

const Cards = styled(BaseLayout)`
  align-items: start;
  margin-bottom: 32px;
  text-align: center;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 4;
    }
  }

  ${({ theme }) => theme.mediaQueries.md} {
    & > div {
      grid-column: span 6;
    }
  }
`

const Referral: React.FC = () => {
  const { account } = useWeb3React()
  

  return (
    <>
      <Hero />
      <Page>
        {!account ? (
          <UnlockWalletCard />
        ) : (
          <>
           
            <TotalReferral />
            <ReferralLink />
          </>
        )}
      </Page>
    </>
  )
}

export default Referral
