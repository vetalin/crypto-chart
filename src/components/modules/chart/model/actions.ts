import { ActionTree } from 'vuex'
import { IMarketsResponse } from '../../../../requests/markets/interfaces'
import { getMarkets } from '../../../../requests/markets/markets'

export const chartActions: ActionTree<any, any> = {
  async getMarkets({ commit }) {
    const markets: IMarketsResponse = await getMarkets()
    commit('markets', markets.data)
  }
}
