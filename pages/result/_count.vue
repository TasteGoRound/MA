<template>
<div class="container">
  <div class="viewport">
    <h1 class="promotion-title">BADGIRL LIFE STYLE</h1>
    <h2 class="result">
      당신의 남자친구가 성적으로 만족할 확률은<br>
      <em class="result-probability">{{ result.title }}%</em> 입니다.</h2>
    <div class="result-visualization" v-html="result.symbol"></div>
    <p class="result-contents" v-html="result.content"></p>
    <h3 class="turning-point">[Turning Point]</h3>
    <strong class="turning-point-title">{{ result.turningPoint.title }}</strong>
    <p class="turning-point-contents" v-html="result.turningPoint.content"></p>
    <a class="banner-link" href="http://www.badgirllifestyle.co.kr">
      <img class="banner-image" src="@/static/BLS/images/banner50.png" width="100%" height="100%">
    </a>
  </div>
</div>
</template>

<script>
import results from '@/assets/results.js'

export default {
  validate({ params }) {
    const isNumber = /^\d+$/.test(params.count)
    const parsedNumber = Number(params.count)
    const isOverMinus = parsedNumber > 0
    const isUnderMaxCount = parsedNumber <= SEX.questions.length
    const isValidate = isNumber && isOverMinus && isUnderMaxCount

    return isValidate
  },
  asyncData(app) {
    const { route } = app
    const { params = {} } = route
    const { count } = params

    return { result: results[count] }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  max-width: 500px;
  padding: 0 30px;
  margin: auto auto;
  font-size: 1.2rem;
  --main-point-color: rgb(188, 0, 0);
}

.viewport {
  padding: 30px 0;
}

.promotion-title {
  padding: 20px 0 40px 0;
  text-align: center;
  font-weight: bold;
}

.result {
  line-height: 2rem;
  text-align: center;
  font-size: 16px;
  font-weight: bold;

  @media screen and (max-width: 355px) {
    font-size: 14px;
  }
}

.result-probability {
  position: relative;
  font-size: 2rem;
  &:after {
    content: '';
    position: absolute;
    bottom: 3px;
    left: 0;
    right: 2px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.5);
  }
}

.result-visualization {
  width: 7rem;
  margin: 30px auto;
}

.result-contents, .turning-point-contents {
  line-height: 20px;
  font-size: 15px;
}

.turning-point {
  color: #ad0712;
  padding: 40px 0 15px 0;
  text-align: center;
  font-weight: bold;
}

.turning-point-title {
  display: block;
  padding-bottom: 40px;
  text-align: center;
  font-weight: bold;
}

.banner-link {
  display: block;
  margin-top: 30px;
}
</style>
