<template>
  <div id="app">
    <Navbar />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <index />
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Index from '@/components/Index'
export default {
  components: {
    Navbar,
    Index
  }
  
}
</script>

<style>

</style>
