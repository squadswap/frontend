import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { getBalanceNumber, formatLocalisedCompactNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import { usePriceCakeBusd } from 'state/farms/hooks'
import { getCakeAddress } from 'utils/addressHelpers'
import { useTranslation } from 'contexts/Localization'
import CardValue from './CardValue'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const CakeStats = () => {
  const { t } = useTranslation()
  const totalSupply = useTotalSupply()
  const burnedBalance = getBalanceNumber(useBurnedBalance(getCakeAddress()))
  const cakeSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0
  const chyPriceBusd = usePriceCakeBusd()
  console.log("price", chyPriceBusd.toNumber());
  const mcap = chyPriceBusd.times(cakeSupply)
  return (
    <StyledCakeStats>
      <CardBody>
        <Heading size="xl" mb="24px" >
          {t('SQAD Stats')}
        </Heading>
        <Row>
          <Text fontSize="14px">{t('Total Token Supply')}</Text>
          {cakeSupply && <CardValue color="#e23816 "  fontSize="14px" value={cakeSupply} />}
        </Row>
        <Row>
          <Text fontSize="14px">{t('Total Squad Yield Burned')}</Text>
          {burnedBalance && <CardValue color="#e23816 "  fontSize="14px" decimals={0} value={burnedBalance} />}
        </Row>
        <Row>
          <Text fontSize="14px">{t('Squad Price')}</Text>
          {chyPriceBusd && <CardValue color="#e23816 "  fontSize="14px" decimals={6} value={chyPriceBusd.toNumber()} />}
        </Row>
        <Row>
          <Text fontSize="14px">{t('Market Cap')}</Text>
          {mcap && <CardValue color="#e23816 "  fontSize="14px" decimals={6} value={mcap.toNumber()} />}
        </Row>
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
