import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useWidget = defineStore('widget', {
  state: () => ({
      currentType: useStorage('currentType', ''),
      comment: useStorage('comment', ''),
      screenshot: useStorage('screenshot', ''),
  }),
})