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
        <el-image src="../src/static/b.jpg" lazy/>
      </div>
      <div id="LoginPanel">
        <div id="LoginType">
          <span ref="LoginViaPassword" class="active" @click="switchLoginType('password')">密码登录</span>
          <span ref="LoginViaCode" @click="switchLoginType('code')">验证码登录</span>
        </div>
        <br><br>
        <div id="InputArea">
          <el-input style="width: 95%;" placeholder="请输入账号" clearable v-model="Account"/>
          <br><br>
          <el-input style="width: 95%;" placeholder="请输入密码" clearable v-model="Password" type="password"
                    show-password/>
          <br><br>
          <el-button style="width: 45%;height: 40px" plain>注册</el-button>
          <el-button style="width: 45%;height: 40px" color="rgb(36, 37, 44)">登录</el-button>
          <br><br><br><br>
          <el-divider />
          <el-checkbox checked>
            <span style="font-size:12px;font-weight: 400">&nbsp; 我已阅读并同意 《CoEdit 用户许可协议》 《用户隐私政策》</span>
          </el-checkbox>
        </div>

      </div>
    </div>
  </el-dialog>

</template>
<script setup lang="ts">
import {computed, onMounted, ref} from 'vue';
import {AuthStore} from '../../store/auth';
import {getProductList} from '../../core/requestAPI';
import {DialogTransition} from 'element-plus';

/* ---------------------------------------------- */
const authWindowVisibility = ref<boolean>(false);
const authWindowTransition = computed<DialogTransition>(() => 'dialog-bounce');

const authStatusManager = AuthStore();

const LoginTips = ref<string>('登入/注册 CoEdit 账号');
const Account = ref<string>('');
const Password = ref<string>('');

/* ---------------------------------------------- */
const LoginViaPassword = ref<HTMLElement | null>(null);
const LoginViaCode = ref<HTMLElement | null>(null);

/* ---------------------------------------------- */
const switchLoginType = (type: 'password' | 'code') => {
  if (!LoginViaPassword.value || !LoginViaCode.value) return;

  if (type === 'password') {
    LoginViaPassword.value.classList.add('active');
    LoginViaCode.value.classList.remove('active');
  } else {
    LoginViaPassword.value.classList.remove('active');
    LoginViaCode.value.classList.add('active');
  }
};

const openLoginWindow = () => {
  if (!authStatusManager.authed) authWindowVisibility.value = true;
};

/* ---------------------------------------------- */
onMounted(() => {
  if (authStatusManager.authed) {
    LoginTips.value = `欢迎您，${authStatusManager.account}`;
  }
});

</script>

<style lang="scss">
@use "../../static/base.scss" as basement;
@use "../../static/dialogBounce.scss" as *;

$popper-bg: linear-gradient(90deg, rgb(159, 229, 151), rgb(204, 229, 129));
$popper-arrow-bg: linear-gradient(45deg, #b2e68d, #bce689);
$transition-duration: 0.1s;

$font-color-light: rgb(211, 213, 216);
$font-color-hover: white;
$menu-item-width: 100px;

@mixin hover-scale($scale: 1.2) {
  transition: all $transition-duration linear;
  &:hover {
    transform: scale($scale);
  }
}

%flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

#InputArea {
  height: 100px;
}

#LoginType {
  @extend %flex-center;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 15px;
  width: 100%;
  height: 100px;

  span {

    cursor: pointer;
    color: $font-color-light;
    font-weight: 300;
    font-size: small;

    &.active {
      color: black;
      border-bottom: 1px solid black;
    }
  }
}

#LoginPanel,
#ImagePanel {
  flex: 1;
  height: 470px;
  display: flex;
  flex-direction: column;

}

#menu {
  color: rgb(229, 231, 235);
  width: 58%;
  height: 100%;
  display: flex;
  float: right;
}

.menu_items {
  @extend %flex-center;
  width: $menu-item-width;
  height: 100%;
  font-weight: 100;
  text-align: center;
  transition: all $transition-duration ease-in-out;

  &:hover {
    font-size: 17px;
    color: $font-color-hover;
  }
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
  cursor: pointer;
}

#icon {
  width: 3%;
  height: 100%;
  @include hover-scale;
}
</style>