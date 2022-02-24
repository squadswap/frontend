import React from 'react'
import { Card, CardBody, CardFooter, Text, Heading } from '@pancakeswap/uikit'
import useTotalReferralCount from 'hooks/useTotalReferralCount'

const TotalReferral = () => {
    const referralCount = useTotalReferralCount()
    return (
        <Card mb='16px'>
            <CardBody>
                <Heading size='sm' style={{textAlign: 'center'}}>Total Referrals</Heading>
            </CardBody>
            <CardFooter>
                <Heading size="lg" style={{textAlign: 'center'}}>{referralCount}</Heading>
            </CardFooter>
        </Card>
    )
}

export default TotalReferral
