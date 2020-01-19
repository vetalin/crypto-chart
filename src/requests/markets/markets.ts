import { fetchDecorator } from '../fetchDecorator'
import { IMarketsResponse } from './interfaces'

export const getMarkets = (limit: number = 15): Promise<IMarketsResponse> =>
  fetchDecorator(`https://api.coincap.io/v2/assets?limit=${limit}`)
