import { ActionTree } from 'vuex'
import { IMarketsResponse } from '@/requests/markets/interfaces'
import { getMarkets } from '@/requests/markets/markets'
import { marketsHashTableAdapter, priceAdapter } from './adapter'
import { IPriceSocket } from '@/requests/prices/interfaces'
import { upDownAnimate } from './mediator'

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
        const oldPrice = priceAdapter(marketsHashTable[changedKey].priceUsd, 3)
        const newPrice = priceAdapter(changedValue, 3)
        const upOrDown = oldPrice < newPrice ? 'up' : 'down'
        const keyTable = marketsHashTable[changedKey].name
          .toLowerCase()
          .replace(' ', '_')
        if (oldPrice !== newPrice) upDownAnimate(keyTable, upOrDown)
        return {
          ...acc,
          [changedKey]: {
            ...marketsHashTable[changedKey],
            priceUsd: priceAdapter(changedValue, 3)
          }
        }
      },
      marketsHashTable
    )
    commit('marketsHashTable', changedMarkets)
  }
}
