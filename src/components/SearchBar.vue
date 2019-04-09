<template lang="pug">
v-container.pa-2(fluid)
  v-layout
    v-flex
      v-select(
        solo
        ref="searchbar"
        append-icon="close" 
        :append-icon-cb="clear"
        label="Search" 
        @input="searchVerb"
        item-text="0"
        autocomplete 
        :loading="loading"
        :items="items" 
        :search-input.sync="search" 
        v-model="select")
        template(slot="item" slot-scope="data")
          v-list-tile-content
            v-list-tile-title
              span.pr-2 {{ data.item[0] }}
              span.list__tile__sub-title {{ data.item[1] }}

</template>

<script>
import axios from '../axios'
export default {
  data () {
    return {
      query: '',
      items: [],
      loading: false,
      search: null,
      select: []
    }
  },
  watch: {
    search (val) {
      val && this.querySelections(val)
    },
    '$route.query.query' (query) {
      if (query !== this.select[0]) this.clear()
    }
  },
  methods: {
    querySelections (q) {
      this.loading = true
      axios.get(`/ac/${q.toLowerCase()}`)
        .then(({ data }) => { this.items = data; this.loading = false })
        .catch(e => { console.error(e); this.items = [] })
    },
    searchVerb () {
      const query = this.select[0]
      if (!query) return
      this.$router.push({ name: 'list', query: { query } })
    },
    clear () {
      this.$refs.searchbar.$refs.input.focus()
      this.search = null
      this.select = []
    }
  }
}
</script>

<style scoped>

</style>