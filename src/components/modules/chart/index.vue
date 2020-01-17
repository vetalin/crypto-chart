<template lang="pug">
    .module-chart
      .module-chart__item(v-for="(value, key) in marketsHashTable", :key="key")
        .module-chart__row.module-chart__row_name {{ key }}
        .module-chart__row.module-chart__row_price {{ value.priceUsd }}
        br
</template>

<script lang="ts">
import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'
import { moduleName, store } from './model/store'
import { createNamespacedHelpers } from 'vuex'
import { subscribePriceChanges } from './model/mediator'
import { IMarketHashTable } from './interfaces'

type ChangedPriceItem = { changedKey: string; changedPrice: string }
interface Data {
  socket: WebSocket
}
interface Methods {
  getMarkets: () => Promise<void>
}
interface Computed {
  marketsHashTable: IMarketHashTable
}
interface Props {}

const { mapGetters, mapActions } = createNamespacedHelpers(moduleName)

export default Vue.extend({
  name: 'ModuleChart',
  beforeCreate() {
    this.$store.registerModule(moduleName, store)
  },
  beforeDestroy() {
    this.$store.unregisterModule(moduleName)
    this.socket.close()
  },
  data() {
    return {
      socket: null
    }
  },
  async created() {
    await this.getMarkets()
    this.socket = subscribePriceChanges(
      `${moduleName}/pricesChanged`,
      Object.keys(this.marketsHashTable).join(',')
    )
  },
  methods: {
    ...mapActions(['getMarkets', 'changeMarkets'])
  },
  computed: {
    ...mapGetters(['marketsHashTable', 'changedPrices'])
  }
} as ThisTypedComponentOptionsWithRecordProps<Vue, Data, Methods, Computed, Props>)
</script>
