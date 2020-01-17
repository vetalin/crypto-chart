import { ActionTree } from 'vuex'
import { IMarketsResponse } from '@/requests/markets/interfaces'
import { getMarkets } from '@/requests/markets/markets'
import { marketsHashTableAdapter } from './adapter'
import { IPriceSocket } from '@/requests/prices/interfaces'

export const chartActions: ActionTree<any, any> = {
  async getMarkets({ commit }) {
    const initialMarkets: IMarketsResponse = await getMarkets()
    const marketHash = marketsHashTableAdapter(initialMarkets.data)
    commit('initialMarkets', initialMarkets.data)
    commit('marketsHashTable', marketHash)
  },
  async pricesChanged({ commit }, changedPrices: IPriceSocket) {
    commit('changedPrices', changedPrices)
  },
  changeMarkets({ commit, getters }, { changedKey, changedPrice }) {
    const { marketsHashTable } = getters
    commit('marketsHashTable', {
      ...marketsHashTable,
      [changedKey]: {
        ...marketsHashTable[changedKey],
        priceUsd: changedPrice
      }
    })
  }
}
