<template lang="pug">
v-container(fluid="")
    v-layout(column align-center)
      .br 🇧🇷🇵🇹
      pre
        code.pa-2
          | 동사원형 => 직설법 불완전과거
          |  -ar 빼고 -ava, -ava, -ávamos, -avam 첨가
          |  -er/ir 빼고 -ia, -ia, -íamos, -iam 첨가
          |  
          | 직설법 현재 1인칭 단수 => 접속법 현재(명령법)
          |   -o로 끝나는 현재 1인칭 단수에서 -o를 빼고 
          |   -ar 동사는 -e를, -er/-ir 동사는 -a를 첨가
          |  
          | 직설법 완전과거 3인칭 복수 => 직설법 단순대과거
          |   -am 빼고 -a, -a, -amos, -am 첨가
          |  
          | 직설법 완전과거 3인칭 복수 => 접속법 불완전과거
          |   -ram으로 끝나면 -ram을 빼고
          |   -ar 동사는 -sse, -sse, -(á)ssemos, -ssem
          |   -er 동사는 -sse, -sse, -(é)ssemos, -ssem
          |   -ir 동사는 -sse, -sse, -(í)ssemos, -ssem
          |  
          | 직설법 완전과거 3인칭 복수 => 접속법 미래
          |   완전과거 3인칭 복수에서 -am 빼고 
          |   1, 3인 단수는 그대로 
          |   1인칭 복수 -mos, 3인칭 복수는 -em 첨가

</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.br {
  font-size: 5rem;
}

code {
  color: grey;
}
</style>
