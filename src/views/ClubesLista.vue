<template>
  <v-container>
    <h2 class="text-h5 text-center mb-3 mt-5">
        Classificação
    </h2>

    <v-simple-table
        fixed-header
        height="300px"
    >
    <template v-slot:default>
      <thead>
        <tr>
            <th class="text-left">
                Posição
            </th> 
            <th class="text-left">
                Clubes
            </th>
            <th class="text-left">
                Pontos
            </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(clube, index) of listaClubesOrdenada" :key="clube.id">
            <td>{{index +1}}</td>
            <td>
                <v-avatar size= "24">
                    <img
                        :src="clube.escudo"
                        :alt="clube.nome"
                    >
                </v-avatar>
                <span class="pl-2"> {{clube.nome}}</span>
            </td>
            <td>{{clube.pontos}}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  </v-container>
</template>

<script>
export default {
    name: 'ClubesLista',
    data() {
        return {
            listaClubes: []
        }
    },
    computed: {
        listaClubesOrdenada() {
            const listaOrdenada = this.listaClubes.slice(0).sort(
                (a,b) => a.pontos > b.pontos ? -1 : 1
            );
            return listaOrdenada;
        }
    },
    created(){
        fetch('https://hackthon-decola.firebaseio.com/clubes-lista.json')
        .then(response => response.json())
        .then(json => {
            this.listaClubes = json;
        });
    }
}
</script>

<style scoped>

</style>