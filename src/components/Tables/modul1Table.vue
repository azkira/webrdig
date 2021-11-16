<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Nama
          </th>
          <th class="text-left">
            NRP
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in students"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.nrp }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  data () {
      return {
        students: [
          {
            name: 'Muhammad Azki',
            nrp: 11212121259,
          },
          {
            name: 'Adima',
            nrp: 121121212122,
          },
        ],
      }
    },
}
</script>