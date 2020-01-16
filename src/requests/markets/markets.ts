import { fetchDecorator } from '../fetchDecorator'
import { IMarketsResponse } from './interfaces'

export const getMarkets = (): Promise<IMarketsResponse> =>
  fetchDecorator('https://api.coincap.io/v2/markets?limit=15')
