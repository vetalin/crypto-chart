import { ActionTree } from 'vuex'
import { getRates } from '@/requests/rates/rates'
import { ratesAdapter } from './adapter'
import { IRatesResponse } from '@/requests/rates/interfaces'

export const chartActions: ActionTree<any, any> = {
  async getRates({ commit }) {
    const rates: IRatesResponse = await getRates()
    const filteredRates = ratesAdapter(rates.data)
    commit('rates', filteredRates)
  }
}
