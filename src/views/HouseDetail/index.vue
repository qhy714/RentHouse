<template>
  <div>
    <!-- 头 -->
    <van-nav-bar title="樱花语阳光里" left-arrow @click-left="$router.back()" />

    <!-- 图片 -->
    <div class="imgarea">
      <img src="" alt="" />
      <p>用醋还有</p>
      <van-tag type="primary" size="medium">近地铁</van-tag>
    </div>

    <!-- 租金，房型，面积 -->
    <div class="zujin">
      <van-row type="flex" justify="space-around">
        <van-col span="6">
          <span>9999/月</span>
          <span>租金</span>
        </van-col>
        <van-col span="6">
          <span>一室</span>
          <span>房型</span>
        </van-col>
        <van-col span="6">
          <span>9999平米</span>
          <span>面积</span>
        </van-col>
      </van-row>
    </div>

    <!-- 装修，朝向..... -->
    <div class="characteristic">
      <van-row type="left">
        <van-col>
          <span>装修：</span>
          <span>精装</span>
        </van-col>
        <van-col>
          <span>朝向：</span>
          <span>东</span>
        </van-col>
      </van-row>
      <van-row type="left">
        <van-col>
          <span>楼层：</span>
          <span>高楼层</span>
        </van-col>
        <van-col>
          <span>类型：</span>
          <span>普通住宅</span>
        </van-col>
      </van-row>
    </div>

    <!-- 地图房屋 -->
    <van-panel title="小区：天山星城">
      <div class="map"></div>
      <van-cell title="房屋配套" label="暂无数据" />
    </van-panel>

    <!-- 房源概况 -->
    <van-panel title="房源概况">
      <div class="top">
        <div class="left">
          <van-image
            round
            width="52px"
            height="52px"
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
          />
          <p>王女士</p>
          <p>已认证房主</p>
        </div>

        <van-button plain type="primary">朴素按钮</van-button>
      </div>
    </van-panel>
    <div class="okk">123456</div>

    <!-- 底部 -->
    <div class="footer">
      <van-button plain type="primary">收藏</van-button>
      <van-button plain type="primary">在线咨询</van-button>
      <van-button type="primary">电话预约</van-button>
    </div>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {}
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.van-nav-bar{
  position: fixed;
  width: 100%;
}
.imgarea {
  img {
    width: 375px;
    height: 253px;
    background-color: rgb(145, 220, 255);
  }
  p {
    font-size: 16px;
    color: #333;
    padding-left: 10px;
    margin-bottom: 0;
  }
  .van-tag {
    margin-left: 10px;
    margin-top: 5px;
    background-color: #e1f5f8;
    color: #39becd;
  }
}

.zujin {
  .van-row {
    margin: 15px 10px;
    padding: 15px 0;
    text-align: center;
    border-top: 1px solid #cecece;
    border-bottom: 1px solid #cecece;

    span:nth-child(1) {
      display: block;
      color: #fa5741;
      font-size: 18px;
      font-weight: bold;
    }
    span:nth-child(2) {
      font-size: 14px;
      color: #999;
    }
  }
}

.characteristic {
  margin: 0 10px 15px 10px;
  .van-row {
    width: 100%;
    font-size: 14px;
    padding-bottom: 10px;
    .van-col {
      width: 50%;
      span:nth-child(1) {
        color: #999;
      }
    }
  }
}

.map {
  width: 375px;
  height: 145px;
  background-color: rgb(255, 223, 223);
}
.okk{
  margin-bottom: 100px;
}
// 底部按钮
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  width: 100%;
  padding-top: 50px;
  .van-button {
    flex: 1;
    border: none;
  }
}

.top {
.left{
  float: left;
  display: flex;
  p{
    font-size: 14px;
  }
}
}
</style>
