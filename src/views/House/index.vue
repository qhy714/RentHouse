<template>
  <div>
    <van-nav-bar left-arrow @click-left="$router.back()">
      <template #title>
        <van-search placeholder="请输入小区或地址" @search="onSearch">
          <template #label>
            <div @click="$router.push('/citylist')">
              {{ $store.state.city.label }}
              <van-icon name="arrow-down" />
            </div>
          </template>
        </van-search>
      </template>
      <template #right>
        <van-icon name="location-o" class="mapIcon" size="20px" />
      </template>
    </van-nav-bar>

    <van-dropdown-menu>
      <van-dropdown-item title="区域">
        <van-picker show-toolbar  />
      </van-dropdown-item>
      <van-dropdown-item title="方式"></van-dropdown-item>
      <van-dropdown-item title="租金"></van-dropdown-item>
      <van-dropdown-item title="筛选"></van-dropdown-item>
    </van-dropdown-menu>
  </div>
</template>

<script>
import { findHouseInfo } from '@/api/house.js'
export default {
  created () { 
    this.findHouseInfo()
  },
  data () {
    return {

    }
  },
  methods: {
    onSearch () { },
    async findHouseInfo () {
      try {
        const res = await findHouseInfo()
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang="less">
/deep/.van-search {
  padding: 0;
  border-radius: 12px;
  background-color: #fff;
  color: #9c9fa1;
  width: 300px;
  height: 34px;
  .van-icon {
    color: #000;
  }
  .van-icon-search {
    color: #9c9fa1;
  }
}

.van-col {
  // display: inline;
  flex: 1;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 18px;
  color: #333;
}
</style>
