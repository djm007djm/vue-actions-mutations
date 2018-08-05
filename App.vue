<template>
  <div id="app">
    <keep-alive :include = "['app-home']">
      <router-view/>
    </keep-alive>
    
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
