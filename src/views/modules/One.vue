<template>
  <div class="my-2">
    <v-row>
      <v-col class="grid">
        <Input/>
      </v-col>

      <v-col class="mx-auto grid">
        <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="1500"
          max-width="250"
          :src="require('../../assets/port.jpg')"
        ></v-img>
      </v-col>

      <v-col class="grid">
        <Output/>
      </v-col>
    </v-row>

    <v-spacer></v-spacer>

    <v-row>
      <v-col class="grid">
        <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="150"
          max-width="250"
          :src="require('../../assets/land.jpg')"
          class="mx-auto"
        ></v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Input from '@/components/Input.vue'
import Output from '@/components/Output.vue'

export default {
  name: 'Modul1',

  components: {
    Input,
    Output
  },
}
</script>

<style scoped>
.grid {
  display: grid;
  place-items: center;
}
</style>