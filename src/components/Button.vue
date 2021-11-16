<template>
  <v-btn
    @click="isOne = !isOne"
    color="primary"
    elevation="2"
    icon
  >
    {{isOne? '1': '0'}}
  </v-btn>
</template>

<script>
export default {
  data() {
    return {
      isOne: false,
    }
  }
}
</script>