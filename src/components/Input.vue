<template>
  <div>
    <h1 class="text-subtitle-2 text-center my-2">input</h1>
    <v-row>
      <v-col>
        <Button/>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <Button/>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <Button/>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <Button/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Button from './Button.vue'

export default {
  name: "Input",
  components: {
    Button
  }
}
</script>
