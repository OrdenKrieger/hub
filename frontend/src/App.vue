<script setup lang="ts">
import DashboardIcon from '@/components/icons/DashboardIcon.vue'
import SettingsIcon from '@/components/icons/SettingsIcon.vue'
import type { INavbarItem } from '@/components/navbar/types'
import Navbar from './components/navbar/Navbar.vue'
import { isMobile } from '@/utils/media'

const navbarElemnts: INavbarItem[] = [
  {
    title: 'Home',
    routeName: 'home',
    icon: DashboardIcon,
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
    <Navbar :type="isMobile ? 'mobile' : 'desktop'" :elements="navbarElemnts" />
    <div class="flex w-full" :class="isMobile ? 'p-2' : 'py-5 pr-5'">
      <div class="rounded-2xl bg-surface-900 w-full">
        <RouterView />
      </div>
    </div>
  </div>
</template>
