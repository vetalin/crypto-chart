import { IMarket } from '@/requests/markets/interfaces'
import { IMarketAdaptForView } from './model/adapter'
export interface IMarketHashTable {
  [baseId: string]: IMarketAdaptForView
}
