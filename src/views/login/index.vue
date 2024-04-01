<script setup lang="ts">
// import { useI18n } from 'vue-i18n'
import bg from '@/assets/login/bg.png'
import avatar from '@/assets/login/avatar.svg?component'
import illustration from '@/assets/login/illustration.svg?component'
import { ref, reactive, toRaw } from 'vue'
import { useRouter } from 'vue-router'
import type { FormInstance } from 'element-plus'
import { loginRules } from './rule'

const router = useRouter()
const ruleFormRef = ref<FormInstance>()

const ruleForm = reactive({
  username: 'admin',
  password: 'admin123'
})

const loading = ref(false)
const title = ref('PureAdmin')
// const { t } = useI18n()

const onLogin = async (formEl: FormInstance | undefined) => {
  loading.value = true
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      router.push('/')
      // useUserStoreHook()
      //   .loginByUsername({ username: ruleForm.username, password: 'admin123' })
      //   .then((res) => {
      //     if (res.success) {
      //       // 获取后端路由
      // initRouter().then(() => {
      //   router.push(getTopMenu(true).path)
      //   message('登录成功', { type: 'success' })
      // })
      //     }
      //   })
    } else {
      loading.value = false
      return fields
    }
  })
}
</script>
<template>
  <div class="select-none">
    <img :src="bg" class="wave" />
    <div class="flex-c absolute right-5 top-3">
      <!-- 主题 -->
      <!-- <el-switch v-model="dataTheme" inline-prompt :active-icon="dayIcon" :inactive-icon="darkIcon" @change="dataThemeChange" /> -->
      <!-- 国际化 -->
      <!-- <el-dropdown trigger="click">
        <globalization class="hover:text-primary hover:!bg-[transparent] w-[20px] h-[20px] ml-1.5 cursor-pointer outline-none duration-300" />
        <template #dropdown>
          <el-dropdown-menu class="translation">
            <el-dropdown-item :style="getDropdownItemStyle(locale, 'zh')" :class="['dark:!text-white', getDropdownItemClass(locale, 'zh')]" @click="translationCh">
              <IconifyIconOffline v-show="locale === 'zh'" class="check-zh" :icon="Check" />
              简体中文
            </el-dropdown-item>
            <el-dropdown-item :style="getDropdownItemStyle(locale, 'en')" :class="['dark:!text-white', getDropdownItemClass(locale, 'en')]" @click="translationEn">
              <span v-show="locale === 'en'" class="check-en">
                <IconifyIconOffline :icon="Check" />
              </span>
              English
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown> -->
    </div>
    <div class="login-container">
      <!-- <div class="img">
        <component :is="toRaw(illustration)" />
      </div> -->
      <div class="img">
        <img :src="illustration" />
      </div>
      <div class="login-box">
        <div class="login-form">
          <!-- <avatar class="avatar" /> -->
          <img :src="avatar" class="avatar" />
          <!-- <Motion> -->
          <h2 class="outline-none">{{ title }}</h2>
          <!-- </Motion> -->

          <el-form ref="ruleFormRef" :model="ruleForm" :rules="loginRules" size="large">
            <!-- <Motion :delay="100"> -->
            <el-form-item
              :rules="[
                {
                  required: true,
                  trigger: 'blur'
                }
              ]"
              prop="username"
            >
              <el-input v-model="ruleForm.username" clearable />
            </el-form-item>
            <!-- </Motion> -->

            <Motion :delay="150">
              <el-form-item prop="password">
                <el-input v-model="ruleForm.password" clearable show-password />
              </el-form-item>
            </Motion>

            <!-- <Motion :delay="250"> -->
            <el-button class="w-full mt-4" size="default" type="primary" :loading="loading" @click="onLogin(ruleFormRef)">
              <!-- {{ t('login.pureLogin') }} -->
              登录
            </el-button>
            <!-- </Motion> -->
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('@/styles/login.css');
</style>

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
