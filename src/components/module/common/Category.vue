<template>
  <div class="index-category">
    <div class="category" v-for="(list, index) in lists" :key="index">
      <i class="iconfont" :class="list.icon" :style="{ background: list.color }"> </i>
      <label> {{ list.title }}</label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        { title: '美食', icon: 'iconfenlei', color: '#da69b9' },
        { title: '购物车', icon: 'icongouwuchekong', color: 'ad00b9' },
        { title: '美食', icon: 'iconfenlei', color: '#da69b9' },
        { title: '美食', icon: 'iconfenlei', color: '#da69b9' },
        { title: '美食', icon: 'iconfenlei', color: '#da69b9' },
        { title: '美食', icon: 'iconfenlei', color: '#da69b9' },
        { title: '美食', icon: 'iconfenlei', color: '#da69b9' },
        { title: '美食', icon: 'iconfenlei', color: '#da69b9' }
      ]
    }
  },
  components: {}
}
</script>

<style></style>
