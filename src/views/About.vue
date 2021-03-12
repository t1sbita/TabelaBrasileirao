<template>
  <v-container>
    <v-img
      class = "foto-pequena mx-auto mb-2" 
      src="https://media-exp1.licdn.com/dms/image/C5603AQFen6KlHGdddA/profile-displayphoto-shrink_200_200/0/1516942726415?e=1620864000&v=beta&t=Zwit5M0XD06Vc6dHYklFOlZ7blp4eXeoBxVECh5D3ow">
    </v-img>
    <p class="subtitle-2 text-center mt-3">
      Sou uma pessoa tranquila, calma, que não se contenta 
      apenas com o conteúdo passado e segue sempre em busca 
      de mais conhecimento, pois acredito que isso que move o 
      mundo!
    </p>
  </v-container>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style>
  .foto-pequena {
    height: 250px;
    width: 250px;
    border-radius: 3px;
  }
</style>