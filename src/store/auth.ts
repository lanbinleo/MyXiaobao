// src/stores/auth.js
import { defineStore } from 'pinia';
import { CredentialData } from '../api/schemas/auth';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    loggedIn: false,
    sessionId: "",
    saveCredentials: false,
    loginName: "",
    password: "",
    timestamp: 0,
  }),
  actions: {
    // 设置 sessionId
    setSessionId(sessionId: string) {
      this.sessionId = sessionId;
    },

    // 保存登录凭证
    saveCredential(credentials: CredentialData) {
      this.saveCredentials = true;
      this.loginName = credentials.loginName;
      this.password = credentials.password;
      this.timestamp = credentials.timestamp;
    },

    clearCredential() {
      this.saveCredentials = false;
      this.loginName = "";
      this.password = "";
      this.timestamp = 0;
    },
    // 清除 sessionId
    clearSession() {
      this.sessionId = "";
    },
  },
  persist: true,
});
