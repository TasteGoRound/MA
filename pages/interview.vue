<template>
<div class="container">
  <div class="viewport" ref="viewport">
    <ul class="interview" :style="transformQuestionItem">
      <li class="item" v-for="(question, questionIndex) in questions" :key="questionIndex">
        <div class="item-bag">
          <em class="number">Q{{ questionIndex + 1 }}</em>
          <div class="question-bag">
            <strong class="question">{{ question.interview }}</strong>
          </div>
          <div class="answer-bag">
            <template v-for="(option, optionIndex) in question.options">
              <input
                v-model="responses[questionIndex]"
                type="radio"
                :key="`radio-question${questionIndex}-${optionIndex}`"
                :value="option.point"
                :id="`question${questionIndex + 1}-${optionIndex}`"
                :name="`radio-question${questionIndex + 1}-${optionIndex}`"
                :disabled="isReadonly(questionIndex)"
              />
              <label
                :key="`label-question${questionIndex}-${optionIndex}`"
                class="answer"
                :class="fadeIn(questionIndex)"
                :for="`question${questionIndex + 1}-${optionIndex}`">
                {{ option.answer }}
              </label>
            </template>
          </div>
        </div>
      </li>
    </ul>
    <Pagination
      class="interview-pagination"
      :currentInterviewNumber="responseInterviewCount"
      :interviewCount="questions.length" />
  </div>
</div>
</template>

<script>
import questions from '@/assets/questions.js'
import Pagination from '@/components/Pagination/Progress.vue'

export default {
  components: {
    Pagination
  },
  data() {
    return {
      responses: [],
      questions: questions,
      viewport: null,
      moveEvent: null
    }
  },
  methods: {
    onResize() { this.viewport = this.$refs.viewport.getBoundingClientRect() },
    process() {
      localStorage.setItem('responses', JSON.stringify(this.responses))
      if (this.responses.length >= this.questions.length) {
        // this.moveEvent = setTimeout(() => this.$router.push('/loading'), 500)
      }
    }
  },
  computed: {
    responseInterviewCount() { return this.responses.filter(answer => typeof answer !== 'undefined').length },
    transformQuestionItem() {
      if (!this.viewport) { return { transform: 'translate3d(0px, 0px, 0px)' } }
      const responseCount = this.responseInterviewCount < this.questions.length ? this.responseInterviewCount : this.questions.length - 1;
      const calculatedTransform = responseCount * this.viewport.width

      return { transform: `translate3d(-${calculatedTransform}px, 0px, 0px)`}
    },
    isReadonly() { return (currentNumber) => currentNumber < this.responses.length },
    fadeIn() { return (currentNumber) => this.isReadonly(currentNumber) ? 'fade-in' : '' }
  },
  beforeCreate() { localStorage.clear() },
  mounted() {
    this.viewport = this.$refs.viewport.getBoundingClientRect()
    window.addEventListener('resize', this.onResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
    clearTimeout(this.moveEvent)
  },
  watch: { responses: 'process' }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  height: inherit;
  max-width: 600px;
  padding: 0 5px;
  margin: auto auto;
  font-size: 1.2rem;
  word-break: keep-all;
  --main-point-color: rgb(188, 0, 0);
}

.viewport {
  overflow: hidden;
}

.interview {
  display: flex;
  width: 100%;
  min-width: 100%;
  transition-property: transform;
  transition-timing-function: cubic-bezier(0, 0, 0.25, 1);
  transition-duration: 300ms;
  transition-delay: 0.5s;
  transform: translate3d(0px, 0px, 0px);
}

.item {
  width: 100%;
  min-width: 100%;
  flex-shrink: 0;
  .item-bag {
    padding: 0 10px;
  }
}

.number {
  display: block;
  font-family: Arial;
  font-weight: bolder;
  font-size: 50px;
  color: var(--main-point-color);
}

.question-bag {
  position: relative;
  margin-top: 3vh;
}

.question {
  padding-bottom: 3px;
  border-bottom: 2px solid #efefef;
  line-height: 35px;
  font-size: 1.5rem;
  font-weight: bold;
}

.answer-bag {
  transition: all 1s ease-out;
}

.answer {
  display: block;
  padding: 10px 15px;
  margin-top: 10px;
  border: 1px solid #e1e1e1;
  font-size: 1.25rem;
  line-height: 1.25;
  border-radius: 3px;
  background-color: #efefef;

  @media (hover: hover) {
    &:hover {
      background-color: var(--main-point-color);
      color: #fff;
    }
  }
}

input[type=radio] {
  display: none;

  &:checked + .answer {
    background-color: var(--main-point-color);
    color: #fff;
  }

  &:not(:checked) + .fade-in {
    opacity: 0;
    animation-name: fadeIn;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 0.25s;
  }
}

.interview-pagination {
  margin-top: 20px;
}
</style>
