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
    priceUsd: priceAdapter(market.priceUsd, 3),
    marketCap: priceAdapter(market.marketCapUsd),
    volume: priceAdapter(market.volumeUsd24Hr),
    supply: priceAdapter(market.supply),
    vwap: priceAdapter(market.vwap24Hr)
  }
}

export const priceAdapter = (price: string, fixedPoint: number = 2) => {
  return String(Number(price).toFixed(fixedPoint))
}
