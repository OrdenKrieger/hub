<script setup lang="ts">
import { ref } from 'vue'
import {
  NForm,
  NFormItem,
  NInput,
  NButton,
  type FormInst,
  type FormRules,
  type FormValidationError
} from 'naive-ui'

const formRef = ref<FormInst | null>(null)

interface LoginModel {
  email: string
  password: string
}

const model = ref<LoginModel>({
  email: '',
  password: ''
})

const rules: FormRules = {
  email: [
    {
      required: true,
      message: 'E-Mail is required'
    }
  ],
  password: [
    {
      required: true,
      message: 'Password is required'
    }
  ]
}

function handleLogin() {
  formRef.value?.validate((errors: Array<FormValidationError> | undefined) => {
    if (!errors) {
      //
    } else {
      //
    }
  })
}
</script>

<template>
  <div class="flex justify-center items-center h-screen bg-gray-950">
    <div class="flex flex-col gap-4 items-center w-96 p-4 rounded-xl bg-slate-900">
      <span
        class="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-100 to-purple-500"
      >
        Home Hub</span
      >
      <n-form ref="formRef" :model="model" :rules="rules" class="w-full">
        <n-form-item path="email" label="E-Mail" :show-require-mark="false">
          <n-input v-model:value="model.email" placeholder="" />
        </n-form-item>
        <n-form-item path="password" label="Password" :show-require-mark="false">
          <n-input v-model:value="model.password" type="password" placeholder="" />
        </n-form-item>
        <n-button
          class="w-full"
          :disabled="model.email === '' || model.password === ''"
          type="primary"
          strong
          secondary
          @click="handleLogin"
        >
          Login
        </n-button>
      </n-form>
    </div>
  </div>
</template>
