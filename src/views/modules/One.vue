<template>
  <div class="my-2">
    Modul 1
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