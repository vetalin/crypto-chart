import { IMarket } from '@/requests/markets/interfaces'
import { IMarketHashTable } from '../interfaces'

export const marketsHashTableAdapter = (
  markets: IMarket[]
): IMarketHashTable => {
  return markets.reduce((acc: IMarketHashTable, market: IMarket) => {
    return {
      ...acc,
      [market.baseId]: market
    }
  }, {})
}
