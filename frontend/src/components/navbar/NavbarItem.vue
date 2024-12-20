<script setup lang="ts">
import router from '@/router'
import { computed, type Component } from 'vue'
import type { RouteRecordNameGeneric } from 'vue-router'

const props = defineProps<{
  title: string
  expanded: boolean
  routeName: RouteRecordNameGeneric
  icon: Component
}>()

const currentKey = computed(() => {
  return router.currentRoute.value.name == props.routeName
})

function pushTo() {
  router.push({ name: props.routeName })
}
</script>

<template>
  <div
    @click="pushTo"
    class="group flex flex-row items-center gap-2 dark:hover:bg-surface-200 hover:bg-surface-900 cursor-pointer p-2 rounded-md w-full select-none"
    :class="{ 'bg-surface-900 dark:bg-surface-200': currentKey }"
  >
    <component
      class="h-8 fill-surface-700 dark:fill-surface-200 dark:group-hover:fill-surface-700 group-hover:fill-surface-200"
      :class="{ 'fill-surface-200 dark:fill-surface-700': currentKey }"
      :is="icon"
    ></component>
    <span
      class="text-surface-700 dark:text-surface-200 font-bold dark:group-hover:text-surface-700 group-hover:text-surface-200"
      :class="{ 'text-surface-200 dark:text-surface-700': currentKey }"
      v-if="expanded"
      >{{ title }}</span
    >
  </div>
</template>
