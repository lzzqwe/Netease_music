<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <net-player></net-player>
  </div>
</template>
<script>
const themes = {
  white: "white",
  dark: "dark",
};
const THEME_KEY = "__theme__";
import NetPlayer from "./views/NetPlayer/NetPlayer";
import storage from "good-storage";
import variables from "@/common/themes/variables";
import variablesBlack from "@/common/themes/variables-black";
export default {
  metaInfo() {
    return {
      title: "欢迎来的net-music",
    };
  },
  created() {
    this.themeMap = {
      [themes.white]: {
        file: variables,
        title: "浅色",
      },
      [themes.dark]: {
        file: variablesBlack,
        title: "黑色",
      },
    };
    this.initTheme();
    // this._getUserInfo();
  },
  methods: {
    initTheme() {
      if (!storage.get(THEME_KEY)) {
        this.changeThems(storage.get(THEME_KEY, themes.white));
      } else {
        this.changeThems(storage.get(THEME_KEY));
      }
    },
    changeThems(themeKey) {
      storage.set(THEME_KEY, themeKey);
      const theme = this.themeMap[themeKey].file;
      Object.keys(theme).forEach((key) => {
        const value = theme[key];
        document.documentElement.style.setProperty(key, value);
      });
    },
  },
  name: "App",
  components: {
    NetPlayer,
  },
};
</script>

<style lang="less">
#app {
  width: 100%;
  height: 100%;
}
</style>
