<template lang="pug">
    .page-home {{ ev }}
</template>

<script lang="ts">
import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'
import { initPricesListener } from '@/requests/prices/pricesSocket'

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
  created() {
    initPricesListener(ev => {
      this.ev += ev.data
    })
  }
} as ThisTypedComponentOptionsWithRecordProps<Vue, Data, Methods, Computed, Props>)
</script>
