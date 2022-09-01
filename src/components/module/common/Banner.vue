<template>
  <div>
    <div class="banner">
      <div class="item">
        <img :src="data[currentIndex]" />
      </div>
      <div class="page" v-if="this.data.length > 1">
        <ul>
          <li @click="gotoPage(prevIndex)">&lt;</li>
          <li v-for="(item, index) in data" :key="index" @click="gotoPage(index)" :class="{ current: currentIndex == index }">{{ index + 1 }}</li>
          <li @click="gotoPage(nextIndex)">&gt;</li>
        </ul>
      </div>
    </div>
  </div></template
>

<script>
export default {
  data: function() {
    return {
      currentIndex: 0, // 默认显示图片
      timer: null // 定时器
    }
  },
  props: ['data'],
  methods: {
    gotoPage(index) {
      this.currentIndex = index
    }
  },
  computed: {
    // 上一张
    prevIndex() {
      if (this.currentIndex == 0) {
        return this.data.length - 1
      } else {
        return this.currentIndex - 1
      }
    },
    // 下一张
    nextIndex() {
      if (this.currentIndex == this.data.length - 1) {
        return 0
      } else {
        return this.currentIndex + 1
      }
    }
  },
  mounted() {
    // 定时器
    this.timer = setInterval(() => {
      this.gotoPage(this.nextIndex)
    }, 2000)
  }
}
</script>

<style></style>
