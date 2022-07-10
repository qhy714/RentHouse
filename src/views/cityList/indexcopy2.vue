<template>
  <div>
    <van-nav-bar title="城市列表" left-arrow />

    <van-index-bar :index-list="Initials">
      <span v-for="(item, key) in lastCityList" :key="key">
        <van-index-anchor index="1">{{ key }}</van-index-anchor>
        <van-cell
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
    this.citylist()
    this.hotcity()
  },
  data () {
    return {
      Initials: [],
      firstCityList: [],
      sencondCityList: [],
      lastCityList: {},
      hotCityList: []
    }
  },
  methods: {
    async citylist () {
      const res = await getCityList()
      // console.log(res);
      this.firstCityList = res.data.body
      console.log(this.firstCityList);

      this.firstCityList.forEach(item => {
        this.Initials.push(item.short[0].toUpperCase())
      })

      this.Initials = [...new Set(this.Initials)]
      // console.log(123, this.Initials);
      this.Initials = this.Initials.sort()
      this.Initials.unshift('#', '热')
      console.log(123, this.Initials);

      this.Initials.forEach(item => {
        this.sencondCityList = this.firstCityList.filter(Initem => {
          if (Initem.label === '北京') {
            this.lastCityList['#'] = [Initem]

          }
          return Initem.short[0].toUpperCase() === item
        })
        // console.log(this.sencondCityList);
        this.lastCityList[item] = this.sencondCityList
        this.lastCityList['热'] = this.hotCityList

      })
      console.log(this.lastCityList);

      console.log(this.hotCityList);
    },
    async hotcity () {
      const res = await hotcity()
      console.log(res);
      this.hotCityList = res.data.body
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
