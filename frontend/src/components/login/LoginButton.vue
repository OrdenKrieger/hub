<script setup lang="ts">
import { AUTH_ROUTES } from '@/api/routes'
import type { AuthRedirectResp } from '@/api/types/auth'
import FacebookIcon from '@/components/icons/FacebookIcon.vue'
import GithubIcon from '@/components/icons/GithubIcon.vue'
import GoogleIcon from '@/components/icons/GoogleIcon.vue'
import router from '@/router'
import { firstToUpperCase } from '@/utils/text'
import axios from 'axios'
import { useQuery } from 'vue-query'

const props = defineProps<{
  provider: 'github' | 'google' | 'facebook'
}>()

const fetcher = async (): Promise<AuthRedirectResp> =>
  await axios({
    method: AUTH_ROUTES.redirect.method,
    url: AUTH_ROUTES.redirect.route(props.provider),
  }).then((response) => response.data)

const { isLoading, isError, data } = useQuery(`loginRedirect${props.provider}`, fetcher)

function redirect() {
  window.location.replace(data.value)
}
</script>

<template>
  <div
    v-if="!isLoading && !isError"
    @click="redirect"
    class="flex flex-row p-2 hover:bg-opacity-80 rounded-full w-full justify-center gap-2 cursor-pointer select-none text-center"
    :class="[
      { 'bg-slate-900': provider == 'github' },
      { 'bg-slate-200': provider == 'google' },
      { 'bg-slate-600': provider == 'facebook' },
    ]"
  >
    <span
      class="font-bold flex-1 ml-6"
      :class="[provider == 'github' || provider == 'facebook' ? 'text-slate-50' : 'text-slate-900']"
      >{{ firstToUpperCase(provider) }}</span
    >
    <GithubIcon v-if="provider == 'github'" class="h-6 fill-slate-50" />
    <GoogleIcon v-else-if="provider == 'google'" class="h-6" />
    <FacebookIcon v-else-if="provider == 'facebook'" class="h-6 fill-slate-50" />
  </div>
</template>
