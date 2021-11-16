<template>
  <v-btn
    @click="isActive = !isActive"
    elevation="2"
    icon
  >{{isActive? 'ON': 'OFF'}}</v-btn>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    }
  }
}
</script>