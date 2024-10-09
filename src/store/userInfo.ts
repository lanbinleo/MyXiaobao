import { defineStore } from "pinia";

export const useInfoStore = defineStore("info", {
  state: () => {
    return {
      getted: false,
      name: "",
      englishName: "",
      languageType: 0,
      loginName: "",
      studentInfoId: 0,
    };
  },
  actions: {
    setInfo(info: any) {
        this.name = info.cName
        this.englishName = info.eName
        this.languageType = info.languageType
        this.loginName = info.loginName
        this.studentInfoId = info.studentInfoId
        this.getted = true
    }
  }
})

