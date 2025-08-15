<template>
  <div id="navigator">
    <img alt="" src="../../static/icon.png" id="icon"/>
    <span style="color: white" @click="getProductList">CoEdit</span>

    <div id="menu">
      <span class="menu_items">CoEdit</span>
      <span class="menu_items">加入我们</span>
    </div>

    <el-tooltip effect="customized" :content="LoginTips" placement="right-start">
      <el-avatar @click="openLoginWindow" id="avatar" :size="30"
                 src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"/>
    </el-tooltip>
  </div>
  <el-dialog v-model="authWindowVisibility" style="height: 532px;width: 815px;" :transition="authWindowTransition">
    <div style="display: flex; height: 470px;">
      <div id="ImagePanel">

      </div>
      <div id="LoginPanel">
        <div id="LoginType">
          <span>密码登录</span>
          <span>验证码登录</span>
        </div>
      </div>
    </div>
  </el-dialog>

</template>
<script setup lang="ts">
import {computed, onMounted, ref} from "vue";
import {AuthStore} from "../../store/auth.ts";
import {getProductList} from "../../core/requestAPI.ts";
import {DialogTransition} from "element-plus";

const authWindowVisibility = ref<boolean>(false);
const authWindowTransition = computed<DialogTransition>(() => {
  return 'dialog-bounce'
})

const authStatusManager = AuthStore();

const LoginTips = ref<string | null>('登入/注册 CoEdit 账号');

onMounted(() => {
  if (authStatusManager.authed)
    LoginTips.value = '欢迎您，' + authStatusManager.account;
})

const openLoginWindow = () => {
  if (!authStatusManager.authed)
    authWindowVisibility.value = true;
}

</script>
<style lang="scss">
@use "../../static/base.scss" as basement;
@use "../../static/dialogBounce.scss" as dialogBounce;

$popper-bg: linear-gradient(90deg, rgb(159, 229, 151), rgb(204, 229, 129));
$popper-arrow-bg: linear-gradient(45deg, #b2e68d, #bce689);
$transition-duration: 0.1s;

@mixin hover-scale($scale: 1.2) {
  transition: all $transition-duration linear;
  &:hover {
    transform: scale($scale);
  }
}
#LoginType{
  border: 1px solid blueviolet;
  width: 100%;
  height: 75px;
}

#LoginPanel, #ImagePanel {
  border: 1px solid red;
  width: 200px;
  flex: 1;
  height: 100%;
}

#menu {
  color: rgb(229, 231, 235);
  width: 58%;
  height: 100%;
  float: right;
  display: flex;
}

.menu_items {
  height: 100%;
  display: flex;
  font-weight: 100;
  text-align: center;
  width: 100px;
  transition: all 0.1s ease-in-out;
  justify-content: center;
  align-items: center;
}

.menu_items:hover {
  font-size: 17px;
  color: white;
}

.el-popper.is-customized {
  padding: 6px 12px;
  background: $popper-bg;

  .el-popper__arrow::before {
    background: $popper-arrow-bg;
    right: 0;
  }
}

#avatar {
  position: relative;
  bottom: 40px;
  margin-left: 95%;
  cursor: pointer;
  @include hover-scale;
}

#navigator {
  position: absolute;
  left: 0;
  top: 0;
  width: 98vw;
  height: 6%;
  padding-left: 30px;
  padding-top: 5px;
  backdrop-filter: blur(3px);
  cursor: pointer;;
}

#icon {
  width: 3%;
  height: 100%;
  @include hover-scale;
}

</style>