<template lang="pug">
    .page-home {{ ev }}
</template>

<script lang="ts">
import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'
import { initPricesListener } from '@/requests/prices/pricesSocket'
import { getRates } from '../requests/rates/rates'
import { ratesAdapter } from '../components/modules/chart/model/adapter'
import { getMarkets } from '../requests/markets/markets'

interface Data {
  ev: any
}
interface Methods {}
interface Computed {}
interface Props {}

export default Vue.extend({
  name: 'PageHome',
  data() {
    return {
      ev: ''
    }
  },
  async created() {
    const rates = await getMarkets()
    debugger
  }
} as ThisTypedComponentOptionsWithRecordProps<Vue, Data, Methods, Computed, Props>)
</script>
