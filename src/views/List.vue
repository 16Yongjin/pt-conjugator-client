<template lang="pug">
v-container(fluid grid-list-lg)
  v-layout(row wrap)
    verb-card(v-for="(type, i) in types" :type="type" :name="noun" :conj="conj" :key="type[0]")
    verb-card(v-for="(type, i) in pp"    :type="type" :name="['단수', '복수']" :conj="conj" :key="type[0]")
    verb-card(v-for="(type, i) in extra" :type="type" :conj="conj" :key="type[0]")
</template>

<script>
import VerbCard from '../components/VerbCard'
import axios from '../axios'

export default {
  data () {
    return {
      conj: [],
      noun: ['Eu', 'Você', 'Nós', 'Vocês'],
      types:
      [ [ 'indicative/present', '직설법 / 현재' ],
        [ 'indicative/preterite', '직설법 / 완전과거' ],
        [ 'indicative/imperfect', '직설법 / 불완전과거' ],
        [ 'indicative/pluperfect', '직설법 / 단순대과거' ],
        [ 'indicative/future', '직설법 / 미래' ],
        [ 'conditional', '직설법 / 과거미래' ],
        [ 'subjunctive/present', '접속법 / 현재' ],
        [ 'subjunctive/imperfect', '접속법 / 불완전과거' ],
        [ 'subjunctive/preterite', '접속법 / 미래' ],
        [ 'infinitive/personal', '접속법 / 인칭부정사' ],
        [ 'imperative/affirmative', '명령형 / 긍정' ],
        [ 'imperative/negative', '명령형 / 부정' ] ],
      pp:
      [ [ 'pastparticiple/masculine', '과거분사 / 남성' ],
        [ 'pastparticiple/feminine', '과거분사 / 여성' ] ],
      extra:
        [ [ 'gerund', '동명사' ],
          [ 'infinitive/impersonal', '비인칭부정사' ] ],
      error: false
    }
  },
  watch: {
    '$route.query.query' () {
      this.loadConj(this.$route.query.query)
    }
  },
  mounted () {
    this.loadConj(this.$route.query.query)
  },
  methods: {
    loadConj (query) {
      if (!query) return
      axios.get(`/conj/${query}`)
        .then(({data}) => {
          this.conj = data
          this.error = false
          document.activeElement.blur()
        })
        .catch(e => { this.error = true })
    }
  },
  components: {
    VerbCard
  }
}
</script>

<style scoped>

</style>