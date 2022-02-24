import { useWeb3React } from '@web3-react/core'
import { useEffect, useState } from 'react'
import { getMasterchefContract } from 'utils/contractHelpers'
import useRefresh from './useRefresh'

const useTotalReferralCount = () => {
    const [count, setCount] = useState(0)
    const { account } = useWeb3React()
    const { slowRefresh } = useRefresh()

    useEffect(() => {
        async function fetchTotalRef() {
            const refContract = getMasterchefContract()
            const total = await refContract.referredCount(account)
            setCount(total.toNumber())
        }
        fetchTotalRef()
    }, [account, slowRefresh])

    return count
}

export default useTotalReferralCount