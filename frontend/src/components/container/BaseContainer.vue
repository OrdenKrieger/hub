<script lang="ts" setup>
/**
 * Expected props for the base
 * container component
 */
const props = defineProps<{
  title?: string
  subTitle?: string
  cardStyle?: boolean
}>()
</script>

<template>
  <div
    class="flex items-center justify-center container"
    :class="
      cardStyle
        ? 'border border-gray-100 shadow-xl bg-scan_gray rounded-lg py-8 mx-4 md:mb-10 sm:mb-0 mt-10'
        : ''
    "
  >
    <div class="w-full px-4 sm:px-10 md:px-12">
      <h1
        v-if="title"
        class="text-center text-2xl sm:text-4xl sm:mt-4 font-bold"
        :class="cardStyle ? 'text-slate-100' : 'text-gray-700'"
      >
        {{ title }}
      </h1>
      <h2
        v-if="subTitle"
        class="text-center text-base sm:text-lg mt-2 font-medium"
        :class="cardStyle ? 'text-slate-50' : 'text-gray-700'"
      >
        {{ subTitle }}
      </h2>
      <div class="mt-5"></div>
      <slot name="windowContent"></slot>
      <div :class="cardStyle ? '' : 'mt-8'"></div>
    </div>
  </div>
</template>
