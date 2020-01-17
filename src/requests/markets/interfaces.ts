export interface IMarket {
  exchangeId: string
  rank: string
  baseSymbol: string
  baseId: string
  quoteSymbol: string
  quoteId: string
  priceQuote: string
  priceUsd: string
  volumeUsd24Hr: string
  percentExchangeVolume: string
  tradesCount24Hr: string
  updated: string
}

export interface IMarketsResponse {
  data: IMarket[]
  timestamp: number
}
