import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'SQADSwap',
  description:
    'The most popular AMM on BSC by user count! Earn CHY through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens on a platform you can trust.',
  image: 'https://greenhouseswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('SQADSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('SQADSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('SQADSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('SQADSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('SQADSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('SQADSwap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('SQADSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('SQADSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('SQADSwap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('SQADSwap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('SQADSwap')}`,
      }
    default:
      return null
  }
}
