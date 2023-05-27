<script setup lang="ts">
import AppView from './views/AppView.vue'
import {
  NConfigProvider,
  NMessageProvider,
  NDialogProvider,
  darkTheme,
  type GlobalThemeOverrides
} from 'naive-ui'

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#a855f7', // Purple 500
    primaryColorHover: '#d8b4fe', // Purple 300
    primaryColorPressed: '#e9d5ff', // Purple 200
    borderRadius: '0.4rem'
  }
}
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides" :theme="darkTheme">
    <NDialogProvider>
      <n-message-provider>
        <AppView></AppView>
      </n-message-provider>
    </NDialogProvider>
  </n-config-provider>
</template>
