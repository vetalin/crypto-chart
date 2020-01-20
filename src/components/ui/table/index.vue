<template lang="pug">
    .ui-table
      .ui-table__headers
        .ui-table__header(v-for="(header, index) in headerText", :key="`header-${index}`") {{ header }}
      .ui-table__content
        .ui-table__row(v-for="(row, rowIndex) in rows", :key="`table-row-${rowIndex}`")
          .ui-table__cell(v-for="(cell, cellIndex) in row", :key="`table-cell-${rowIndex}-${cellIndex}`") {{ cell }}
</template>

<script lang="ts">
import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'
import { chartHeaderNames } from '@/components/modules/chart/headersNames'

interface Data {}
interface Methods {}
interface Computed {
  headers: string[]
  item: string[][]
}

interface Items {
  [key: string]: string
}
interface Props {
  items: Items[]
  headerMapFn: (headerKey: string) => string
}

export default Vue.extend({
  name: 'UiTable',
  props: {
    items: {
      type: Array,
      default: () => []
    },
    headerMapFn: {
      type: Function
    }
  },
  computed: {
    headers() {
      const itemsArray = this.items
      const keysStack = itemsArray.map(item => Object.keys(item)).flat()
      const uniqueKeys = [...new Set(keysStack)]
      return uniqueKeys
    },
    headerText() {
      return this.headerMapFn
        ? this.headers.map(this.headerMapFn)
        : this.headers
    },
    rows() {
      const items = this.items
      const headers = this.headers
      return items.map(item => {
        return headers.map(headerKey => {
          return item[headerKey] || ''
        })
      })
    }
  }
} as ThisTypedComponentOptionsWithRecordProps<Vue, Data, Methods, Computed, Props>)
</script>
