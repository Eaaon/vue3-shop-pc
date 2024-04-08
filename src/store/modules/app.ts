import { defineStore } from 'pinia'
import { store } from '@/store'

export interface AppStore {
  APP_ID: string
  sidebar: {
    opened: boolean
    withoutAnimation: boolean
    isClickCollapse: boolean
  }
  layout: string
  device: string
  viewportSize: { width: number; height: number }
}

export const useAppStore = defineStore({
  id: 'app',
  state: (): AppStore => ({
    APP_ID: 'wx8d64466dcb6b3334',
    sidebar: {
      opened: false,
      withoutAnimation: false,
      isClickCollapse: false
    },
    layout: 'layout',
    device: 'desktop',
    viewportSize: {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    }
  }),
  getters: {
    getSidebarStatus(state) {
      return state.sidebar.opened
    },
    getDevice(state) {
      return state.device
    },
    getViewportWidth(state) {
      return state.viewportSize.width
    },
    getViewportHeight(state) {
      return state.viewportSize.height
    }
  },
  actions: {
    TOGGLE_SIDEBAR(opened?: boolean, resize?: string) {
      // const layout = storageLocal().getItem<StorageConfigs>(`${responsiveStorageNameSpace()}layout`)
      // const layout = ''
      if (opened && resize) {
        this.sidebar.withoutAnimation = true
        this.sidebar.opened = true
        // layout.sidebarStatus = true
      } else if (!opened && resize) {
        this.sidebar.withoutAnimation = true
        this.sidebar.opened = false
        // layout.sidebarStatus = false
      } else if (!opened && !resize) {
        this.sidebar.withoutAnimation = false
        this.sidebar.opened = !this.sidebar.opened
        this.sidebar.isClickCollapse = !this.sidebar.opened
        // layout.sidebarStatus = this.sidebar.opened
      }
      // storageLocal().setItem(`${responsiveStorageNameSpace()}layout`, layout)
    },
    async toggleSideBar(opened?: boolean, resize?: string) {
      await this.TOGGLE_SIDEBAR(opened, resize)
    },
    toggleDevice(device: string) {
      this.device = device
    },
    setLayout(layout: string) {
      this.layout = layout
    },
    setViewportSize(size: any) {
      this.viewportSize = size
    }
  }
})

export function useAppStoreWithOut() {
  return useAppStore(store)
}
