<template>
  <div id="app">
    <NavBar />
    <Hero />
    <About />
    <FooterSection />
  </div>
</template>

<script>
import NavBar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import FooterSection from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Hero,
    About,
    FooterSection
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
