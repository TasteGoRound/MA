<template>
  <div class="pagination">
    <div class="pagination-progress-background">
      <div class="pagination-progress-bar" :style="progressWidth"></div>
    </div>
    <div class="pagination-numbering">{{ currentInterviewNumber }}/{{ interviewCount }}</div>
  </div>
</template>

<script>
export default {
  props: {
    currentInterviewNumber: { type: Number, default: 1 },
    interviewCount: { type: Number, default: 10 }
  },
  computed: {
    progressWidth() {
      return { width: `${this.currentInterviewNumber / this.interviewCount * 100}%` }
    }
  }
}
</script>

<style lang="scss" scoped>
  .pagination {
    display: flex;
    align-items: center;
    padding: 0 10px;
  }

  .pagination-progress-background {
    flex-grow: 1;
    background-color: #f7f7f7;
    border-radius: 10px;
    height: 15px;
  }
  .pagination-progress-bar {
    height: inherit;
    border-radius: 5px;
    background-color: #f00;
    transition: width 0.2s ease-out 0s;
  }

  .pagination-numbering {
    display: flex;
    justify-content: flex-end;
    width: 4rem;
    text-align: right;
    font-family: CookieRunOTF-Bold;
    font-size: 1.5rem;
    color: rgba(0, 0, 0, .5);
  }
</style>
