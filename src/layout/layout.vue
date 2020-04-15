<template>
  <div class="app">
    <el-container>
      <el-aside
        class="app-side app-side-left"
        :class="isCollapse ? 'app-side-collapsed' : 'app-side-expanded'"
      >
        <div class="app-side-logo">
          <img
            src="@/assets/logo.png"
            :width="isCollapse ? '60' : '60'"
            height="60"
          />
        </div>
        <div>
          <!-- 我是样例菜单 -->
          <el-menu
            :default-active="activeMenu"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            :collapse="isCollapse"
          >
            <!-- <template v-for="route in $router.options.routes">
              <template v-if="route.children && route.children.length">
                <template v-for="item in route.children">
                  <el-menu-item
                    :key="route.path + '/' + item.path"
                    :index="item.path"
                  >
                    <i class="el-icon-menu"></i>
                    <span slot="title">{{ item.name }}</span>
                  </el-menu-item>
                </template>
              </template>
            </template>-->
            <sidebar-item
              v-for="(item, idx) in $router.options.routes"
              :subroute="item"
              :fatherpath="fatherPath"
              :barIdx="idx"
              :key="idx"
            ></sidebar-item>
          </el-menu>
        </div>
      </el-aside>

      <el-container>
        <el-header class="app-header">
          <div
            style="width: 60px; cursor: pointer;"
            @click.prevent="toggleSideBar"
          >
            <i v-show="!isCollapse" class="el-icon-d-arrow-left"></i>
            <i v-show="isCollapse" class="el-icon-d-arrow-right"></i>
          </div>
          <div class="app-header-userinfo">
            <el-dropdown trigger="hover" :hide-on-click="false">
              <span class="el-dropdown-link">
                {{ username }}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>我的消息</el-dropdown-item>
                <el-dropdown-item>设置</el-dropdown-item>
                <el-dropdown-item divided @click.native="logout"
                  >退出登录</el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-header>

        <el-main class="app-body">
          <template>
            <router-view />
          </template>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import SidebarItem from "./SidebarItem.vue";
@Component({
  components: {
    SidebarItem
  }
})
export default class extends Vue {
  private isCollapse = false;
  private username = "";
  private tableData = Array(20).fill({
    date: "2016-05-02",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1518 弄"
  });

  created() {
    const user = sessionStorage.getItem("user");
    if (user) {
      this.username = user;
    }
  }
  get defaultActive() {
    return this.$route.path;
  }

  get fatherPath() {
    // 这里直接获取路由配置的 '/' 项
    return this.$router.options.routes[1].path;
  }
  //设置唯一idnex
  get activeMenu() {
    const route = this.$route;
    const { meta, path } = route;
    // if set path, the sidebar will highlight the path you set
    if (meta.activeMenu) {
      return meta.activeMenu;
    }
    return path;
  }
  private handleOpen(key: string, keyPath: string) {
    console.log(key, keyPath);
  }

  private toggleSideBar() {
    this.isCollapse = !this.isCollapse;
  }
  private logout() {
    this.$confirm("确认退出?", "提示", {})
      .then(() => {
        this.$router.push("/login");
      })
      .catch(() => {
        this.$router.push("/login");
      });
  }
  private handleClose(key: string, keyPath: string) {
    console.log(key, keyPath);
  }
  private handleSelect(key: string, keyPath: string) {
    console.log(key, keyPath);
  }
}
</script>
