<template>
  <!-- 如果当前 subroute 有子节点 -->
  <el-submenu
    v-if="!subroute.hidden && subroute.children && subroute.children.length > 0"
    :index="genPath(fatherpath, subroute.path)"
  >
    <!-- 创建菜单分组 -->
    <template slot="title">
      <i class="el-icon-menu"></i>
      <span slot="title">{{ subroute.name }}</span>
    </template>

    <!-- 递归调用自身，直到 subroute 不含子节点 -->
    <SidebarItem
      v-for="(submenu, subidx) in subroute.children"
      :subroute="submenu"
      :fatherpath="genPath(fatherpath, subroute.path)"
      :barIdx="subidx"
      :key="barIdx + '-' + subidx"
    />
  </el-submenu>

  <!-- 当前节点不含子节点且非隐藏 -->
  <el-menu-item
    style="font-weight: 400"
    v-else-if="!subroute.hidden"
    :index="genPath(fatherpath, subroute.path)"
    >{{ subroute.name }}</el-menu-item
  >

  <el-menu-item
    style="font-weight: 400"
    v-else
    :index="genPath(fatherpath, subroute.path)"
    >{{ subroute.name }}</el-menu-item
  >
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "SidebarItem"
})
export default class extends Vue {
  @Prop({ default: () => null }) private subroute!: object;
  @Prop({}) private barIdx!: string | number;
  @Prop({}) private fatherpath!: string;

  get defaultActive() {
    return this.$route.path;
  }

  private genPath(...arrData: any[]) {
    const arr = arrData;
    let path = arr
      .map(v => {
        while (v[0] === "/") {
          v = v.substring(1);
        }
        while (v[-1] === "/") {
          v = v.substring(0, v.length);
        }
        return v;
      })
      .join("/");
    path = path[0] === "/" ? path : "/" + path;
    return path;
  }

  private handleOpen(key: string, keyPath: string) {
    console.log(key, keyPath);
  }

  private handleClose(key: string, keyPath: string) {
    console.log(key, keyPath);
  }
}
</script>

<style scoped></style>
