<template>
  <div>
    <v-row>
      <v-col>
        <Input/>
      </v-col>

      <v-col class="mx-auto">
        <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="150"
          max-width="250"
          src="https://picsum.photos/id/11/500/300"
        ></v-img>
      </v-col>

      <v-col>
        <Output/>
      </v-col>
    </v-row>

    <v-spacer></v-spacer>

    <v-row>
      <v-col>
        <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="150"
          max-width="250"
          src="https://picsum.photos/id/11/500/300"
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