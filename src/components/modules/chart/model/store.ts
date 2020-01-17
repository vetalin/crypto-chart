import { chartActions } from './actions'
import { storeFabricBoilerplate } from '@/store/fabricBoilerplate'
import { IMarketHashTable } from '../interfaces'

export const moduleName = 'chart'

export interface StateChart {
  marketsHashTable: IMarketHashTable
}

export const state: StateChart = {
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
