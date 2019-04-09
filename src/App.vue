<template lang="pug">
v-app
  v-toolbar.primary(app prominent)
    v-spacer.hidden-sm-and-down
    search-bar
    v-spacer.hidden-sm-and-down
    
  v-content
    router-view
</template>

<script>
import SearchBar from './components/SearchBar'

export default {
  name: 'App',
  data () {
    return {
      clipped: false,
      drawer: true,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      title: '동사변형'
    }
  },
  components: {
    SearchBar
  }
}
</script>
