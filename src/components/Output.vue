<template>
  <div>
    <h1 class="text-subtitle-2 text-center my-2">LED</h1>
    <v-row>
      <v-col>
        <Led/>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <Led/>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <Led/>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <Led/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Led from './Led.vue'

export default {
  name: "Output",
  components: {
    Led
  }
}
</script>