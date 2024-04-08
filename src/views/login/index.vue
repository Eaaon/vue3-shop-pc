<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref, reactive, toRaw } from 'vue'
import { useI18n } from 'vue-i18n'
import { bg, avatar, illustration, globalization, dayIcon, darkIcon } from './static'
import type { FormInstance, FormRules } from 'element-plus'
import { isPassWord } from '@/utils/validate'
import { loginApi } from '@/api/login'

const router = useRouter()
const ruleFormRef = ref<FormInstance>()
const dataTheme = ref('light')

const ruleForm = reactive({
  username: 'admin',
  password: 'admin123'
})

const validatePassword = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error(t('login.passWordReg')))
  } else if (!isPassWord(value)) {
    callback(new Error(t('login.passWordRuleReg')))
  } else {
    callback()
  }
}

const loginRules = reactive<FormRules<typeof ruleForm>>({
  password: [{ validator: validatePassword, trigger: 'blur' }]
})

const loading = ref(false)
const title = ref('Admin')
const { t, locale } = useI18n()

const onLogin = async (formEl: FormInstance | undefined) => {
  loading.value = true
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      loginApi({ username: ruleForm.username, password: ruleForm.password }).then((res) => {
        if (res.data) {
          router.push('/')
        }
      })
    } else {
      loading.value = false
      return fields
    }
  })
}

const languageChange = (lang: string) => {
  locale.value = lang
  localStorage.setItem('lang', lang)
}

const dataThemeChange = (val: string) => {
  if (val === 'dark') {
    document.documentElement.classList.add('dark')
    document.documentElement.classList.remove('light')
  } else {
    document.documentElement.classList.add('light')
    document.documentElement.classList.remove('dark')
  }
}
</script>
<template>
  <div class="overflow-hidden">
    <img :src="bg" class="fixed left-0 bottom-0 w-4/5 h-full z-basement hidden md:block" />
    <div class="absolute right-5 top-3 flex items-center">
      <!-- 主题 -->
      <el-switch v-model="dataTheme" active-value="dark" inactive-value="light" inline-prompt :active-icon="dayIcon" :inactive-icon="darkIcon" @change="dataThemeChange" />
      <!-- 国际化 -->
      <el-dropdown trigger="click">
        <globalization class="hover:text-primary w-[20px] h-[20px] ml-1.5 cursor-pointer outline-none duration-300" />
        <template #dropdown>
          <el-dropdown-menu class="translation">
            <el-dropdown-item @click="languageChange('zh')">
              <el-icon v-show="locale === 'zh'" class="check-zh"><Check /></el-icon>
              简体中文
            </el-dropdown-item>
            <el-dropdown-item @click="languageChange('en')">
              <el-icon v-show="locale === 'en'" class="check-en"><Check /></el-icon>
              English
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <div class="flex w-screen h-screen">
      <div class="hidden md:flex items-center justify-center flex-1">
        <component :is="toRaw(illustration)" />
      </div>
      <div class="flex items-center justify-center flex-1 text-center">
        <div class="w-72 xl:w-90 text-center">
          <avatar class="w-20 h-20" />
          <!-- <Motion> -->
          <h2 class="text-2xl xs:text-4xl outline-none uppercase my-2 md:my-4 text-light-gray font-consolas">{{ title }}</h2>

          <!-- </Motion> -->

          <el-form ref="ruleFormRef" :model="ruleForm" :rules="loginRules" size="large">
            <!-- <Motion :delay="100"> -->
            <el-form-item
              :rules="[
                {
                  required: true,
                  message: t('login.usernameReg'),
                  trigger: 'blur'
                }
              ]"
              prop="username"
            >
              <el-input v-model="ruleForm.username" clearable :placeholder="t('login.username')" />
            </el-form-item>
            <!-- </Motion> -->

            <Motion :delay="150">
              <el-form-item prop="password">
                <el-input v-model="ruleForm.password" clearable show-password :placeholder="t('login.password')" />
              </el-form-item>
            </Motion>

            <!-- <Motion :delay="250"> -->
            <el-button class="w-full mt-4" size="default" type="primary" :loading="loading" @click="onLogin(ruleFormRef)">
              {{ t('login.login') }}
            </el-button>
            <!-- </Motion> -->
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
:deep(.el-input-group__append, .el-input-group__prepend) {
  padding: 0;
}

.translation {
  ::v-deep(.el-dropdown-menu__item) {
    padding: 5px 40px;
  }

  .check-zh {
    position: absolute;
    left: 20px;
  }

  .check-en {
    position: absolute;
    left: 20px;
  }
}
</style>
