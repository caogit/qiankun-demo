<template>
  <div>
    <el-menu
  class="el-menu-demo"
  background-color="#545c64"
  text-color="#fff"
  mode="horizontal"
  router
  active-text-color="#ffd04b">
  <el-menu-item index="/vue">sub-vue</el-menu-item>
  <el-menu-item index="/vite">sub-vite</el-menu-item>
    </el-menu>
      <!-- 引用其他的子应用 -->
    <div id="vue" ></div>
  </div>

</template>
<script>
export default {

  methods: {
   
  },
}
</script>

<style lang="scss">
html,body{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;

}

</style>
