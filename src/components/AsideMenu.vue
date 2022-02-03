<template>
  <div style="height: 100%">
<!--    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">-->
<!--      <el-radio-button :label="false">expand</el-radio-button>-->
<!--      <el-radio-button :label="true">collapse</el-radio-button>-->
<!--    </el-radio-group>-->
    <el-menu
        default-active="2"
        class="el-menu-vertical-demo left-menu"
        :collapse="false"
        @open="handleOpen"
        @close="handleClose"
    >
      <el-menu-item index="1">
        <template #title>
          <el-icon>
            <house/>
          </el-icon>
          <span>Home</span>
        </template>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon>
          <notebook/>
        </el-icon>
        <template #title>Articles</template>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon>
          <user/>
        </el-icon>
        <template #title>Members</template>
      </el-menu-item>
      <div class="nav-bottom">
        <div class="user-item"></div>
      </div>
    </el-menu>


  </div>
</template>

<script>

import {ref} from 'vue'


export default {
  name: "AsideMenu",
  setup() {
    const isCollapse = ref(true)
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath)
    }
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath)
    }

    return {isCollapse, handleOpen, handleClose}
  }
}
</script>

<style scoped>

.left-menu {
  height: 100vh;
}

.nav-bottom{
  width: 300px;
  height: 100px;
  background-color: red;
  position: fixed;
  bottom: 0px;
}
.user-item{
  width: 250px;
  height: 40px;
  background-color: green;
  position:absolute;
  left:50%;    /* 定位父级的50% */
  top:50%;
  transform: translate(-50%,-50%); /*自己的50% */
}

</style>