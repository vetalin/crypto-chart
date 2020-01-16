import { ActionTree } from 'vuex'
import { getRates } from '@/requests/rates'
import { Rate } from '../interfaces'
import { ratesAdapter } from './adapter'

export const chartActions: ActionTree<any, any> = {
  async getRates({ commit }) {
    const rates: Rate[] = await getRates()
    const filteredRates = ratesAdapter(rates)
    commit('rates', filteredRates)
  }
}
