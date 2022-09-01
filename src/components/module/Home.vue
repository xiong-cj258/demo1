<template>
  <div>
    <Banner :data="img"></Banner>
    <Category></Category>
    <div>
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
import Banner from './common/Banner.vue'
import Category from './common/Category.vue'
import axios from 'axios'
export default {
  data() {
    return {
      name: '首页',
      img: [require('@/assets/img/1.jpg'), require('@/assets/img/2.jpg'), require('@/assets/img/3.jpg'), require('@/assets/img/4.jpg'), require('@/assets/img/5.jpg'), require('@/assets/img/6.jpg')],
      items: []
    }
  },
  components: { Banner, Category },
  methods: {
    getData: function() {
      axios.get('url').then(
        res => {
          console.log(res)
          // this.items =res
        },
        error => {
          console.log(error)
        }
      )
    }
  },
  mounted: function() {
    this.getData()
  }
}
</script>

<style></style>
