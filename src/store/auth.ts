// src/stores/auth.js
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    sessionId: "",
  }),
  actions: {
    // 设置 sessionId
    setSessionId(sessionId: string) {
      this.sessionId = sessionId;
    },
    // 清除 sessionId
    clearSession() {
      this.sessionId = "";
    },
  },
  persist: true,
});
