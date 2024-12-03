import type { Component } from 'vue'
import type { RouteRecordNameGeneric } from 'vue-router'

export interface INavbarItem {
  title: string
  routeName: RouteRecordNameGeneric
  icon: Component
}
