<script setup lang="ts">
import ArrowIcon from '@/components/icons/ArrowIcon.vue'
import MenuIcon from '@/components/icons/MenuIcon.vue'
import NavbarItem from '@/components/navbar/NavbarItem.vue'
import type { INavbarItem } from '@/components/navbar/types'
import { ref } from 'vue'

const expanded = ref(false)

defineProps<{
  type: 'desktop' | 'mobile'
  elements: INavbarItem[]
}>()
</script>

<template>
  <div v-if="type == 'desktop'" class="h-screen p-6">
    <div class="rounded-2xl p-5 bg-surface-50 dark:bg-surface-900 w-fit h-full">
      <div class="flex flex-row h-full">
        <div class="flex flex-col items-center gap-2">
          <span
            v-if="expanded"
            class="select-none bg-gradient-to-r from-sky-500 via-purple-500 to-emerald-500 inline-block text-transparent bg-clip-text text-4xl font-bold"
            >Huby</span
          >
          <span
            v-else
            class="select-none bg-gradient-to-r from-sky-500 to-emerald-500 inline-block text-transparent bg-clip-text text-4xl font-bold"
            >H</span
          >
          <NavbarItem
            v-for="item in elements"
            :key="item.title"
            v-tooltip="expanded ? '' : {value: item.title, showDelay: 250}"
            :title="item.title"
            :route-name="item.routeName"
            :expanded="expanded"
            :icon="item.icon"
          />
        </div>
        <div class="grid items-center justify-center">
          <div
            @click="expanded = !expanded"
            class="absolute translate-x-1 bg-surface-300 rounded-full cursor-pointer"
          >
            <ArrowIcon class="fill-surface-600 h-6" :class="{ 'scale-x-[-1]': expanded }" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="p-2">
    <div class="rounded-2xl p-2 bg-surface-50 dark:bg-surface-900 w-full">
      <div class="flex flex-row justify-between items-center">
        <span
          class="select-none bg-gradient-to-r from-sky-500 via-purple-500 to-emerald-500 inline-block text-transparent bg-clip-text text-4xl font-bold"
          >Huby</span
        >
        <div @click="expanded = !expanded" class="p-0.5 bg-surface-800 rounded-lg cursor-pointer">
          <MenuIcon class="h-10 fill-surface-50" />
        </div>
      </div>
      <div v-if="expanded" class="flex flex-col mt-2 gap-1">
        <NavbarItem
          v-for="item in elements"
          :key="item.title"
          :title="item.title"
          :route-name="item.routeName"
          :expanded="expanded"
          :icon="item.icon"
        />
      </div>
    </div>
  </div>
</template>
