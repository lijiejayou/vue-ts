<template>
  <div class="login-box">
    <div class="login-background"></div>

    <div class="login-content">
      <div class="login-form" style="position: relative;">
        <div class="companyName">typeScript</div>
        <div>
          <div slot="header" class="header">
            <span class="login-title">用户登录</span>
          </div>
          <div class="formContainer">
            <el-form
              label-width="80px"
              :model="form"
              ref="ruleForm"
              :hide-required-asterisk="true"
              class="loginForm"
            >
              <div style="background:#B0B8DC;border-radius:5px;">
                <el-form-item
                  label="用户名"
                  prop="name"
                  style="padding:5px 0;"
                  class="userInput"
                >
                  <el-input
                    v-model="form.name"
                    name="name"
                    class="formInput"
                  ></el-input>
                </el-form-item>
              </div>
              <div style="background:#7B8BC4;border-radius:5px;">
                <el-form-item
                  label="密码"
                  prop="password"
                  style="padding:5px 0;"
                  class="pwdInput"
                >
                  <el-input
                    v-model="form.password"
                    type="password"
                    name="password"
                    class="formInput"
                  ></el-input>
                </el-form-item>
              </div>
              <!-- <el-form-item>

              </el-form-item>-->
            </el-form>
            <div class="btnflex">
              <el-button type="primary" size="medium" @click="submit"
                >立即登录</el-button
              >
              <el-button type="primary" size="medium">重&nbsp;置</el-button>
            </div>
          </div>
          <div class="linkText">
            为了更好的用户体验，并访问所有功能，我们建议您使用Chorme
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  name: "Login"
})
export default class extends Vue {
  private form = {
    name: "",
    password: ""
  };
  private submit() {
    if (!this.form.name || !this.form.password) {
      this.$notify({
        title: "警告",
        message: "请完善登录信息",
        type: "warning"
      });
      return;
    } else {
      this.$router.push("/home");
    }
  }
}
</script>

<style scoped>
.el-card {
  background: transparent;
}

.login-title {
  font-size: 14px;
  /* font-weight: bold; */
  /* color: #409eff; */
}

.login-box {
  position: relative;
  width: 100%;
  height: 100%;
}

.login-background {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  /* background-color: aliceblue; */
  background-image: url("../assets/bg2.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.login-content {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.login-form {
  width: 10%;
  min-width: 320px !important;
  margin-left: 50%;
  background: transparent;
}

.login-copyright {
  position: absolute;
  bottom: 0;
  right: 100px;
}

.login-link-to {
  position: absolute;
  z-index: 999;
  top: 0;
  right: 10px;
}

.login-img {
  position: absolute;
  bottom: 2%;
  right: 2%;
}

.login-link-to a,
.login-link-to span,
.login-link-to i {
  color: #fff;
}
.login-link-to:hover {
  cursor: pointer;
}
.header {
  border: none;
  background: #e6e8f4;
  padding: 12px;
  border-radius: 5px;
  margin-bottom: 20px;
}
.formInput {
  width: 80%;
  float: right;
  margin-right: 5px;
  background: transparent !important;
}
.btnflex {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
.companyName {
  position: absolute;
  right: -140px;
  top: -74px;
  left: -140px;
  font-size: 40px;
  color: #fff;
  margin-bottom: 30px;
  text-align: center;
  font-family: YouYuan;
}
.userInput,
.pwdInput {
  margin-left: 10px;
}
</style>

<style>
.loginForm .el-input__inner {
  background: transparent !important;
}
.userInput .el-input__inner {
  border-color: #98a8d1;
}

.pwdInput .el-input__inner {
  border-color: #7087bf;
}

.loginForm .el-form-item__error {
  left: 20%;
}
.formContainer .el-button--primary {
  background-color: #294a9d;
  border-color: #294a9d;
}
.formContainer .el-button {
  width: 48%;
  padding: 12px 0;
  font-size: 16px;
}
.formContainer .el-form-item__label,
.formContainer .el-input__inner {
  color: #000;
}
.linkText {
  font-size: 12px;
  color: #fff;
  margin-top: 20px;
  padding-left: 8px;
}
.linkText span {
  color: #e6a24e;
  cursor: pointer;
}
</style>
