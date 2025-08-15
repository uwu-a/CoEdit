<template>
  <div id="app">
    <!--    <div id="toolbar" ref="toolbarContainer"></div>-->
    <div id="univer" ref="univerContainer"></div>
  </div>
</template>

<
<script setup lang="ts">
import {onMounted, ref} from 'vue'
// import {setupUniver} from '../setup-univer.ts'
//import { setupToolbar } from './setup-toolbar.ts'

// DOM ref
const univerContainer = ref<HTMLDivElement | null>(null)
//const toolbarContainer = ref<HTMLDivElement | null>(null)

onMounted(async () => {
  if (univerContainer.value) {
    const { setupUniver } = await import('../setup-univer.ts');
    const univerAPI = setupUniver(univerContainer.value)
    window.univerAPI = univerAPI

    // if (toolbarContainer.value) {
    //   setupToolbar(univerAPI,toolbarContainer.value)
    // }
  }
})
</script>

<style>
#univer {
  width: 100%;
  height: 600px;
}
</style>
