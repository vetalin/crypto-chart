<template lang="pug">
    .module-chart
</template>

<script lang="ts">
import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'

interface Data {}
interface Methods {}
interface Computed {}
interface Props {}

export default Vue.extend({
    name: 'ModuleChart'
} as ThisTypedComponentOptionsWithRecordProps<Vue, Data, Methods, Computed, Props>)
</script>