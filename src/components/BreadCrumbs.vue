<template>
  <v-breadcrumbs :items="breadCrumbs">
    <template v-slot:item="{ item }">
      <v-breadcrumbs-item
        :to="item.to"
        class= "text-subtitle-2 crumb-item"
        :disabled= "item.disabled"
        exact
      >
        {{ item.text }}
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
</template>

<script>
export default {
  computed: {
    breadCrumbs() {
      if (typeof this.$route.meta.breadCrumbs === "function") {
        return this.$route.meta.breadCrumbs.call(this, this.$route)
      }
      return this.$route.meta.breadCrumbs;
    }
  }
}
</script>