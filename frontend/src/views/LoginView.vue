<script setup lang="ts">
import FacebookIcon from '@/components/icons/FacebookIcon.vue'
import GithubIcon from '@/components/icons/GithubIcon.vue'
import GoogleIcon from '@/components/icons/GoogleIcon.vue'
</script>

<template>
  <div
    class="flex flex-col p-2 sm:p-0 items-center h-screen justify-center bg-gradient-to-r from-purple-500 via-sky-500 to-emerald-500"
  >
    <div
      class="bg-slate-100 w-full sm:w-96 h-72 rounded-2xl flex flex-col items-center justify-between p-6 bg-opacity-20"
    >
      <span class="font-sans font-extrabold text-4xl mt-2 text-slate-50">Huby</span>

      <div class="flex flex-col w-full gap-2">
        <div class="flex flex-row items-center gap-4 mb-2">
          <div class="w-full h-[0.5px] bg-slate-50"></div>
          <span class="text-slate-50 text-base font-bold">Login</span>
          <div class="w-full h-[0.5px] bg-slate-50"></div>
        </div>
        <div
          class="flex flex-row p-2 bg-slate-900 hover:bg-opacity-80 rounded-full w-full justify-center gap-2 cursor-pointer select-none text-center"
        >
          <span class="text-slate-50 font-bold flex-1 ml-6">Github</span>
          <GithubIcon class="h-6 fill-slate-50" />
        </div>

        <div
          class="flex flex-row p-2 bg-slate-200 hover:bg-opacity-80 rounded-full w-full justify-center gap-2 cursor-pointer select-none text-center"
        >
          <span class="text-slate-900 font-bold flex-1 ml-6">Google</span>
          <GoogleIcon class="h-6" />
        </div>
        <div
          class="flex flex-row p-2 bg-gray-600 hover:bg-opacity-80 rounded-full w-full justify-center gap-2 cursor-pointer select-none text-center"
        >
          <span class="text-slate-50 font-bold flex-1 ml-6">Facebook</span>
          <FacebookIcon class="h-6 fill-slate-50" />
        </div>
      </div>
    </div>
  </div>
</template>
