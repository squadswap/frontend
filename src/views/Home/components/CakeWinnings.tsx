import React from 'react'
// import { useTotalClaim } from 'hooks/useTickets'
import { getBalanceNumber } from 'utils/formatBalance'

import { Text } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import { BigNumber } from 'bignumber.js'
import styled from 'styled-components'

import CardValue from './CardValue'
import CardBusdValue from './CardBusdValue'
import { useTranslation } from 'contexts/Localization'
import { usePriceCakeBusd } from 'state/farms/hooks'

const Block = styled.div`
  margin-bottom: 24px;
`

const CakeWinnings = () => {
  return <></>
}

export default CakeWinnings
