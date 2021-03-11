<template>
  <v-app>
    <AppTopBar/>
    
    <v-main>
      <PaginaInicial/>
    </v-main>
  </v-app>
</template>

<script>
import PaginaInicial from './components/PaginaInicial'
import AppTopBar from './components/shared/AppTopBar'

export default {
  name: 'App',

  components: {
    PaginaInicial,
    AppTopBar
  },

};
</script>
