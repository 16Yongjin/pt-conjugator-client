<template lang="pug">
v-flex(lg3 md4 sm6 xs12 )
  v-card
    v-toolbar.secondary(color="indigo" dark)
      v-toolbar-title {{ type[1] }}
    v-list
      v-list-tile(v-for="(c, i) in conj[[type[0]]]" :key="type[0]+i+c.value")
        v-list-tile-action(v-if="name")
          span {{ name[i] }}
        v-list-tile-content
          v-list-tile-title(v-text="c.value")
</template>

<script>
export default {
  props: ['type', 'conj', 'name']
}
</script>

<style scoped>

</style>