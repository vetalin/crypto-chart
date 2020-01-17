import { chartActions } from './actions'
import { storeFabricBoilerplate } from '@/store/fabricBoilerplate'
import { IMarket } from '@/requests/markets/interfaces'
import { IMarketHashTable } from '../interfaces'
import { IPriceSocket } from '@/requests/prices/interfaces'

export const moduleName = 'chart'

export interface StateChart {
  initialMarkets: IMarket[]
  marketsHashTable: IMarketHashTable
  changedPrices: IPriceSocket
}

export const state: StateChart = {
  initialMarkets: [],
  marketsHashTable: {},
  changedPrices: {}
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