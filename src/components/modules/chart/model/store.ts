import { chartActions } from './actions'
import { storeFabricBoilerplate } from '@/store/fabricBoilerplate'
import { IMarket } from '@/requests/markets/interfaces'
import { IMarketHashTable } from '../interfaces'

export const moduleName = 'chart'

export interface StateChart {
  markets: IMarket[]
  marketsHashTable: IMarketHashTable
}

export const state: StateChart = {
  markets: [],
  marketsHashTable: {}
}

const { getters, mutations } = storeFabricBoilerplate(state)

export const store = {
  state,
  actions: chartActions,
  mutations: mutations(),
  getters: getters(),
  moduleName,
  namespaced: true
}
