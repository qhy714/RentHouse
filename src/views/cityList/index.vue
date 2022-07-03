<template>
  <div>
    <van-nav-bar title="城市列表" left-arrow @click-left="$router.back()" />

    <van-index-bar :index-list="firstArray">
      <span v-for="(item, key) in finalCityList" :key="key">
        <van-index-anchor index="1">{{key}}</van-index-anchor>
        <van-cell :title="item1.label" v-for="(item1,index) in item" :key="index"/>
      </span>
    </van-index-bar>
  </div>
</template>

<script>
import { getCityList } from '@/api/home'
export default {
  created () {
    this.CityList()
  },
  data () {
    return {
      firstArray: [], // 初步的首字母
      firstCityList: [], // 初步的城市数据
      secondCityList: [],
      finalCityList: {}
    }
  },
  methods: {
    async CityList () {
      const res = await getCityList()
      this.firstCityList = res.data.body
      // console.log(this.firstCityList);

      this.firstCityList.forEach(item => {
        this.firstArray.push(item.short[0].toUpperCase())
      })
      this.firstArray = [...new Set(this.firstArray)] // 去重之后是对象，再转换成数组
      // console.log(123,this.firstArray);
      this.firstArray = this.firstArray.sort()
      console.log(this.firstArray);

      this.firstArray.forEach(item => {
        // console.log(item);
        this.secondCityList = this.firstCityList.filter(Initem => {
          // this.firstArray.push(item.short[0].toUpperCase())
          return Initem.short[0].toUpperCase() === item
        })
        console.log(this.secondCityList);
        this.finalCityList[item] = this.secondCityList

      })
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
