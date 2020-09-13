<template>
<div class="container">
  <div class="viewport">
    <h1 class="promotion-title">BADGIRL LIFE STYLE</h1>
    <h2 class="result">
      당신이 남자친구와 재회할 수 있는 확률은<br>
      <em class="result-probability">{{ result.probability }}%</em> 입니다.</h2>
    <p class="result-contents" v-html="result.explain"></p>
    <h3 class="turning-point">[재회 꿀팁]</h3>
    <p class="turning-point-contents" v-html="result.honeyTip"></p>
    <aside class="detail-link">
      <strong class="detail-link-title">매력에 대한 자세한 이해를 원한다면?</strong>
      <div class="detail-attractive">
        매력이란? - <a href="https://cafe.naver.com/dabidonline/22601">칼럼 보러가기</a>
      </div>
      <div class="detail-meetagain">
        더욱 디테일한 재회의 기술 - <a href="https://cafe.naver.com/dabidonline?iframe_url=/ArticleList.nhn%3Fsearch.clubid=21278291%26search.menuid=177%26search.boardtype=W">칼럼 보러가기</a>
      </div>
    </aside>
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
    const isValidate = isNumber && isOverMinus
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
  font-size: 1rem;
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

.detail-link {
  padding-top: 1rem;
  font-size: 1rem;
}

.detail-link-title {
  display: block;
  font-weight: bold;
  text-align: center;
}

.detail-attractive {
  font-size: 0.9rem;
  padding-top: 0.5rem;
}

.detail-meetagain {
  font-size: 0.9rem;
  padding-top: 0.5rem;
}
</style>
