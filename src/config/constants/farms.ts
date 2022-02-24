import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'SQAD-BNB',
    lpAddresses: {
      97: '',
      56: '0x5A36d201f6fb2c577ABaC89C4fDd883f14EaaEec',
    },
    token: tokens.sqad,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'SQAD-USDT',
    lpAddresses: {
      97: '',
      56: '0x9C4b090A24f5E5679CD15b8715795A0E1B9C2CDb',
    },
    token: tokens.sqad,
    quoteToken: tokens.usdt,
  },
  {
    pid: 2,
    lpSymbol: 'SQAD-BTCB',
    lpAddresses: {
      97: '',
      56: '0x244156cb5623f07751730260B2C03254F7db3AF7',
    },
    token: tokens.sqad,
    quoteToken: tokens.btcb,
  },
  {
    pid: 4,
    lpSymbol: 'BUSD-BNB',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
 
  {
    pid: 3,
    lpSymbol: 'SQAD',
    lpAddresses: {
      97: '',
      56: '0x9C4b090A24f5E5679CD15b8715795A0E1B9C2CDb',
    },
    isTokenOnly: true,
    token: tokens.sqad,
    quoteToken: tokens.usdt,
  },
  {
    pid: 5,
    lpSymbol: 'USDT',
    lpAddresses: {
      97: '',
      56: '0x9C4b090A24f5E5679CD15b8715795A0E1B9C2CDb', /* 0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47 */
    },
    isTokenOnly: true,
    token: tokens.usdt,
    quoteToken: tokens.usdt,
  },
  {
    pid: 6,
    lpSymbol: 'wBNB',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    isTokenOnly: true,
    token: tokens.wbnb,
    quoteToken: tokens.busd,
  },
]

export default farms
