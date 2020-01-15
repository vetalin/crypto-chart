<template lang="pug">
    .ui-table
</template>

<script lang="ts">
import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'

interface Data {}
interface Methods {}
interface Computed {}
interface Props {}

export default Vue.extend({
  name: 'UiTable'
} as ThisTypedComponentOptionsWithRecordProps<Vue, Data, Methods, Computed, Props>)
</script>
