<template>
  <div>
    <van-nav-bar
      :title="$route.query.title"
      left-arrow
      @click-left="$router.back()"
    />

    <van-card
      :desc="item.desc"
      :title="item.title"
      :thumb="'http://liufusong.top:8080' + item.houseImg"
      v-for="(item, index) in houseresourse2"
      :key="index"
      @click="$router.push('/housedetails')"
    >
      <template #tags>
        <van-tag plain>{{ item.tags[0] }}</van-tag>
      </template>
      <template #price>
        <span class="price">{{ item.price }}</span>
        <span>元/月</span>
      </template>
    </van-card>
  </div>
</template>

<script>
import { houseresourse, housefavorites } from '@/api/user'
export default {
  async created () {
    try {
      if (this.$route.query.type == 1) {
        const res = await houseresourse()
        console.log(res)
        this.houseresourse2 = res.data.body
      } else {
        const res = await housefavorites()
        console.log(res)
        this.houseresourse2 = res.data.body
      }
    } catch (err) {
      console.log(err);
    }

  },
  data () {
    return {
      houseresourse2: []
    }
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.van-card__desc {
  padding: 5px 0;
}
.van-card__title {
  font-size: 15px;
  font-weight: bold;
  color: #394043;
}
.van-tag {
  color: #39becd;
  background: #e1f5f8;
  border: #e1f5f8;
}
.price:nth-child(1) {
  font-weight: bold;
  font-size: 16px;
  color: #fa5741;
}
</style>
