import { IMarket } from '@/requests/markets/interfaces'
export interface IMarketHashTable {
  [baseId: string]: IMarket
}
