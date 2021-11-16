<template>
  <div>
    <h1>Modul 1</h1>
    <Modul1Table/>
    <h1>Modul 2</h1>
    <h1>Modul 3</h1>
    <h1>Modul 4</h1>
    <h1>Modul 5</h1>
  </div>
</template>

<script>
import Modul1Table from '../components/Tables/modul1Table.vue'
export default {
  name: 'Teams',
  components: {
    Modul1Table
  }
}
</script>