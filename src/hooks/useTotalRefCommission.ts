import { useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { getMasterchefContract } from 'utils/contractHelpers'
import useRefresh from './useRefresh'

const useTotalRefCommission = () => {
    const [commission, setCommission] = useState()
    const { account } = useWeb3React()
    const { slowRefresh } = useRefresh()

    useEffect(() => {
        async function fetchTotalRef() {
            const refContract = getMasterchefContract()
            const totalCommissions = await refContract.methods.referrers(account).call()
            setCommission(totalCommissions)
        }
        fetchTotalRef()
    }, [account, slowRefresh])

    return commission
}

export default useTotalRefCommission