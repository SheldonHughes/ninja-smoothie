<template>
  <div id="app">
    <Navbar />
    <div id="nav">
    </div>
    <!--<index />-->
    <router-view/>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Index from '@/components/Index'
export default {
  //name: 'App',
  components: {
    //App,
    Navbar,
    Index
  }
  
}
</script>

<style>

</style>
