<template>
  <div>
    <!-- 轮播 -->
    <div class="lunbo">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in swipperImg" :key="item.id">
          <van-image
            width="375px"
            :src="'http://liufusong.top:8080' + item.imgSrc"
          />
        </van-swipe-item>
      </van-swipe>

      <van-search show-action placeholder="请输入小区或地址" @search="onSearch">
        <template #label>
          <div @click="$router.push('/citylist')">
            {{$store.state.city.label}}
            <van-icon name="arrow-down" />
          </div>
        </template>
        <template #action>
          <van-icon name="location-o" class="mapIcon" />
        </template>
      </van-search>
    </div>

    <!-- 租房 -->
    <van-grid :border="false">
      <van-grid-item text="整租">
        <template #icon>
          <img src="@/assets/zufang1.png" alt="" />
        </template>
      </van-grid-item>
      <van-grid-item text="合租">
        <template #icon>
          <img src="@/assets/zufang2.png" alt="" />
        </template>
      </van-grid-item>
      <van-grid-item icon="photo-o" text="地图找房">
        <template #icon>
          <img src="@/assets/zufang3.png" alt="" />
        </template>
      </van-grid-item>
      <van-grid-item icon="photo-o" text="去出租" @click="$router.push('torent')">
        <template #icon>
          <img src="@/assets/zufang4.png" alt="" />
        </template>
      </van-grid-item>
    </van-grid>

    <!-- 租房小组 -->
    <div class="rentgroup">
      <div class="rentTop">
        <h3>租房小组</h3>
        <p>更多</p>
      </div>
    </div>

    <div class="rentbottom">
      <van-grid direction="horizontal" :column-num="2" :gutter="10">
        <van-grid-item v-for="item in houseGroup" :key="item.id">
          <template #icon>
            <img :src="'http://liufusong.top:8080' + item.imgSrc" alt="" />
          </template>
          <template #text>
            <div>
              <p>{{ item.title }}</p>
              <p>{{ item.desc }}</p>
            </div>
          </template>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
import { swipper, groups } from '@/api/home'
export default {
  created () {
    this.getswipper()
    this.getGroups()
  },
  data () {
    return {
      swipperImg: [],
      houseGroup: []
    }
  },
  methods: {
    async getswipper () {
      const res = await swipper()
      console.log(res);
      this.swipperImg = res.data.body
      console.log(this.swipperImg);
    },
    onSearch () { },

    async getGroups () {
      const res = await groups()
      console.log(res);
      this.houseGroup = res.data.body
      console.log(this.houseGroup);

    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang="less">
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  height: 212px;
  text-align: center;
  background-color: #39a9ed;
}
.van-search {
  position: absolute;
  top: 10px;
  left: 0;
  line-height: 34px;
  background: transparent;
  width: 375px;
}
.mapIcon {
  color: #fff;
  font-size: 25px;
  line-height: 40px;
}
/deep/.van-grid-item__text {
  font-size: 14px;
}
.van-grid-item {
  img {
    width: 60px;
  }
}
.rentgroup {
  width: 375px;
  background-color: #f6f5f6;
  .rentTop {
    height: 50px;
    margin: 0 10px;
    h3 {
      float: left;
      font-size: 15px;
      color: #333333;
    }
    p {
      float: right;
      font-size: 14px;
      color: #787d82;
    }
  }
}
.rentbottom {
  background-color: #f6f5f6;
  padding-top: 2px;
  // text-align: center;

  .van-grid-item {
    font-size: 14px;
    color: #333333;
    text-align: center;
    img {
      width: 50px;
      height: 50px;
      margin-right: 5px;
    }
    p {
      margin: 0;
    }
  }
}
</style>
