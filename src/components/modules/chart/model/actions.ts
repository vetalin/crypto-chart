import { ActionTree } from 'vuex'
import { IMarketsResponse } from '../../../../requests/markets/interfaces'
import { getMarkets } from '../../../../requests/markets/markets'
import { marketsHashTableAdapter } from './adapter'

export const chartActions: ActionTree<any, any> = {
  async getMarkets({ commit }) {
    const markets: IMarketsResponse = await getMarkets()
    const marketHash = marketsHashTableAdapter(markets.data)
    commit('markets', markets.data)
    commit('marketsHashTable', marketHash)
  }
}
