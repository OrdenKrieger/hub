<script setup lang="ts">
import type { INavbarItem } from '@/components/navbar/types'
import AppNavbar from '@/components/navbar/AppNavbar.vue'
import { isMobile } from '@/utils/media'
import DashboardIcon from '@/components/icons/DashboardIcon.vue'
import FilesIcon from '@/components/icons/FilesIcon.vue'
import SettingsIcon from '@/components/icons/SettingsIcon.vue'

const navbarElemnts: INavbarItem[] = [
  {
    title: 'Home',
    routeName: 'home',
    icon: DashboardIcon,
  },
  {
    title: 'Dateien',
    routeName: 'files',
    icon: FilesIcon,
  },
  {
    title: 'Einstellungen',
    routeName: 'login',
    icon: SettingsIcon,
  },
]
</script>

<template>
  <div class="flex w-full" :class="isMobile ? 'flex-col' : 'flex-row'">
    <AppNavbar :type="isMobile ? 'mobile' : 'desktop'" :elements="navbarElemnts" />
    <div class="flex w-full" :class="isMobile ? 'p-2' : 'py-5 pr-5'">
      <div class="rounded-2xl bg-surface-900 w-full">
        <RouterView />
      </div>
    </div>
  </div>
</template>
