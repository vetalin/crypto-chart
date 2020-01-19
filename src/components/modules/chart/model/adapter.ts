import { IMarket } from '@/requests/markets/interfaces'
import { IMarketHashTable } from '../interfaces'

export interface IMarketAdaptForView {
  name: string
  priceUsd: string
  marketCap: string
  volume: string
  supply: string
  vwap: string
}

export const marketsHashTableAdapter = (
  markets: IMarket[]
): IMarketHashTable => {
  return markets.reduce((acc: IMarketHashTable, market: IMarket) => {
    return {
      ...acc,
      [market.id]: marketAdapter(market)
    }
  }, {})
}

const marketAdapter = (market: IMarket): IMarketAdaptForView => {
  return {
    name: market.name,
    priceUsd: market.priceUsd,
    marketCap: market.marketCapUsd,
    volume: market.volumeUsd24Hr,
    supply: market.supply,
    vwap: market.vwap24Hr
  }
}
