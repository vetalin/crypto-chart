<template lang="pug">
    .page-home
      module-chart
</template>

<script lang="ts">
import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'
import { initPricesListener } from '@/requests/prices/pricesSocket'
import { getMarkets } from '@/requests/markets/markets'
import ModuleChart from '@/components/modules/chart/index.vue'

interface Data {
  ev: any
}
interface Methods {}
interface Computed {}
interface Props {}

export default Vue.extend({
  name: 'PageHome',
  components: { ModuleChart }
} as ThisTypedComponentOptionsWithRecordProps<Vue, Data, Methods, Computed, Props>)
</script>
