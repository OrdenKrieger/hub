import { h, type Component } from 'vue'
import { NIcon } from 'naive-ui'
import { RouterLink, type RouteLocationRaw } from 'vue-router'

export function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

export function routerLink(to: RouteLocationRaw, label: string) {
  return h(
    RouterLink,
    {
      to
    },
    { default: () => label }
  )
}
