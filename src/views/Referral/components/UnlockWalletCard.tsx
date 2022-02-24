import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Text, useWalletModal, Button } from '@pancakeswap/uikit'
import useAuth from 'hooks/useAuth'
import { useTranslation } from 'contexts/Localization'

const StyledCardBody = styled(CardBody)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const StyledText = styled(Text)`
  margin: 16px 0;
`

const UnlockWalletCard = () => {

  const { t } = useTranslation()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout, t)

  return (
    <Card>
      <StyledCardBody>
        <Button onClick={onPresentConnectModal} >
          {t('Unlock Wallet')}
        </Button>
        <StyledText color="primary">Unlock wallet to get your unique referral link</StyledText>
      </StyledCardBody>
    </Card>
  )
}

export default UnlockWalletCard
