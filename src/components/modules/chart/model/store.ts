import { Rate } from '../interfaces'
import { chartActions } from './actions'
import { storeFabricBoilerplate } from '../../../../store/fabricBoilerplate'

export const moduleName = 'chart'

export interface StateChart {
  rates: Rate[]
}

export const state: StateChart = {
  rates: []
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
