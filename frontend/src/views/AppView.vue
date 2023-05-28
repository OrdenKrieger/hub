<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import { NMenu, NLayout, NLayoutSider, type MenuOption } from 'naive-ui'
import { renderIcon, routerLink } from '@/utils/naive'
import DropdownIcon from '@/components/icons/DropdownIcon.vue'
import DashboardIcon from '@/components/icons/DashboardIcon.vue'
import SettingsIcon from '@/components/icons/SettingsIcon.vue'

const router = useRouter()

// Todo mobile trigger
const mobile = false
const showMobile = ref(false)

const showFullApp = computed(() => {
  switch (router.currentRoute.value.name) {
    case 'login':
      return false
    case undefined:
      return false
    default:
      return true
  }
})

const currentKey = computed(() => {
  return router.currentRoute.value.name?.toString()
})

const collapsed = ref(true)

const menuOptions: MenuOption[] = [
  {
    label: () => routerLink({ name: 'dashboard' }, 'Dashboard'),
    key: 'dashboard',
    icon: renderIcon(DashboardIcon)
  },
  {
    label: () => routerLink({ name: 'settings' }, 'Settings'),
    key: 'settings',
    icon: renderIcon(SettingsIcon)
  }
]
</script>

<template>
  <n-layout v-if="showFullApp" :has-sider="!mobile">
    <div v-if="mobile" class="bg-gray-950">
      <div class="flex justify-end p-1.5 pr-2">
        <DropdownIcon
          @click="showMobile = !showMobile"
          class="h-10 fill-purple-600 bg-purple-600 bg-opacity-20 rounded-md cursor-pointer"
        ></DropdownIcon>
      </div>
      <n-layout v-if="showMobile" class="bg-gray-950">
        <n-menu
          v-model:value="currentKey"
          :collapsed-width="64"
          :collapsed-icon-size="22"
          :options="menuOptions"
        />
      </n-layout>
    </div>
    <n-layout-sider
      v-else
      collapse-mode="width"
      :collapsed-width="64"
      :width="240"
      :collapsed="collapsed"
      show-trigger
      @collapse="collapsed = true"
      @expand="collapsed = false"
    >
      <n-menu
        v-model:value="currentKey"
        :collapsed="collapsed"
        :collapsed-width="64"
        :collapsed-icon-size="22"
        :options="menuOptions"
      />
    </n-layout-sider>
    <n-layout>
      <div class="min-h-screen">
        <RouterView />
      </div>
    </n-layout>
  </n-layout>
  <RouterView v-else />
</template>
