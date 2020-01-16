export const storeFabricBoilerplate = (state: any) => {
  return {
    getters(superGetters = {}) {
      const getters = Object.assign(
        {},
        ...Object.keys(state).map(stateKey => {
          return { [stateKey]: (state: any) => state[stateKey] }
        })
      )
      return Object.assign(getters, superGetters)
    },
    mutations(superMutations = {}) {
      const mutations = Object.assign(
        {},
        ...Object.keys(state).map(stateKey => {
          return {
            [stateKey]: (state: any, payload: any) => {
              state[stateKey] = payload
            }
          }
        })
      )
      return Object.assign(mutations, superMutations)
    }
  }
}
