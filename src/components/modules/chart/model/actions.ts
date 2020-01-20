import { ActionTree } from 'vuex'
import { IMarketsResponse } from '@/requests/markets/interfaces'
import { getMarkets } from '@/requests/markets/markets'
import { marketsHashTableAdapter, priceAdapter } from './adapter'
import { IPriceSocket } from '@/requests/prices/interfaces'

export const chartActions: ActionTree<any, any> = {
  async getMarkets({ commit }) {
    const initialMarkets: IMarketsResponse = await getMarkets()
    const marketHash = marketsHashTableAdapter(initialMarkets.data)
    commit('marketsHashTable', marketHash)
  },
  async pricesChanged({ commit, getters }, changedPrices: IPriceSocket) {
    const { marketsHashTable } = getters
    const changedMarkets = Object.entries(changedPrices).reduce(
      (acc, [changedKey, changedValue]) => {
        return {
          ...acc,
          [changedKey]: {
            ...marketsHashTable[changedKey],
            priceUsd: priceAdapter(changedValue)
          }
        }
      },
      marketsHashTable
    )
    commit('marketsHashTable', changedMarkets)
  }
}
