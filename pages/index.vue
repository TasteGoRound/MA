<template>
  <div class="container">
    <div class="viewport">
      <header>
        <h1 class="start_title" v-html="title"></h1>
      </header>
      <main>
        <strong class="start_symbol" v-html="symbol"></strong>
        <nuxt-link class="start_interview" to="/interview">남자친구 속 마음 알아보러 가기!</nuxt-link>
      </main>
    </div>
  </div>
</template>

<script>
import intro from '@/assets/intro.js'

export default {
  data() {
    return {
      title: intro.title,
      symbol: intro.symbol,
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  height: inherit;
  max-width: 600px;
  padding: 0 30px;
  margin: auto auto;
  --main-point-color: rgb(188, 0, 0);
}

.viewport {
  padding: 30px 0;
  margin: auto 0;
  height: max-content;
}

header {
  text-align: center;
}

main {
  margin-top: 40px;
}

.start_symbol {
  display: block;
}

.start_interview {
  display: block;
  font-size: 18px;
  padding: 20px 15px;
  text-align: center;
  background: #ad0712;
  color: #fff;
  text-decoration: none;
  border-radius: 60px;
  margin: 0 auto;
  margin-top: 40px;

  @media screen and (max-width: 355px) {
    font-size: 16px;
  }
}
</style>
