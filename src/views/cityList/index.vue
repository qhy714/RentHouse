<template>
  <div>
    <van-nav-bar title="城市列表" left-arrow @click-left="$router.back()" />

    <van-index-bar :index-list="firstArray">
      <span>
        <van-index-anchor index="#">当前城市</van-index-anchor>
        <van-cell :title="$store.state.city.label" />
      </span>
       <span>
        <van-index-anchor index="热">热门城市</van-index-anchor>
        <van-cell
          @click="area(item1)"
          :title="item1.label"
          v-for="(item1, index) in hotCityList"
          :key="index"
        />
      </span>
      <span v-for="(item, key) in finalCityList" :key="key">
        <van-index-anchor :index="key">{{ key }}</van-index-anchor>
        <van-cell
          @click="area(item1)"
          :title="item1.label"
          v-for="(item1, index) in item"
          :key="index"
        />
      </span>
    </van-index-bar>
  </div>
</template>

<script>
import { getCityList, hotcity } from '@/api/home'
export default {
  created () {
    this.CityList()
    this.hotcity()
  },
  data () {
    return {
      firstArray: [], // 初步的首字母
      firstCityList: [], // 初步的城市数据
      secondCityList: [],
      finalCityList: {},
      hotCityList: []
    }
  },
  methods: {
    area (obj) {
      this.$store.commit('city', obj)
      this.$router.back()
    },
    async CityList () {
      const res = await getCityList()
      this.firstCityList = res.data.body
      // console.log(this.firstCityList);

      this.firstCityList.forEach(item => {
        this.firstArray.push(item.short[0].toUpperCase()) // 把每一项的第一个首字母大写添加到
      })
      this.firstArray = [...new Set(this.firstArray)] // 去重之后是对象，再转换成数组
      // console.log(123,this.firstArray);
      this.firstArray = this.firstArray.sort()
      // this.firstArray.unshift('热') // 在右边首字母前加上热门和当前位置
      console.log(this.firstArray);

      this.firstArray.forEach(item => {
        // console.log(item);
        this.secondCityList = this.firstCityList.filter(Initem => {
          // this.firstArray.push(item.short[0].toUpperCase())


          return Initem.short[0].toUpperCase() === item // 筛选判断城市数据中首字母大写的和item相等，返回新数组
        })
        console.log(this.secondCityList);
        this.finalCityList[item] = this.secondCityList
        // this.finalCityList['热'] = this.hotCityList

      })
      this.firstArray.unshift('#','热')
    },
    async hotcity () {
      const res = await hotcity()
      // console.log(res);
      this.hotCityList = res.data.body
      console.log(222, this.hotCityList);

    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
</style>
