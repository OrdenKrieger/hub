<script setup lang="ts">
defineProps({
  path: String,
})
</script>

<template>
  <span class="text-slate-50">My files under {{ path }}</span>
</template>
