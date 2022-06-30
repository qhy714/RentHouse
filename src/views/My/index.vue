<template>
  <div>
    <div class="My_title">
      <!-- 已登录 -->
      <div class="header header-login" v-if="user">
        <div class="My_info__eOYeg2">
          <van-image
            round
            width="60px"
            height="60px"
            :src="'http://liufusong.top:8080' + userInfo.avatar"
          />

          <p>{{ userInfo.nickname }}</p>
          <van-button type="primary" round @click="logout">退出</van-button>
          <br />
          <div>
            <span class="diu">编辑个人资料</span><van-icon name="play" />
          </div>
        </div>
      </div>
      <!-- 未登录 -->
      <div class="header header-notlogin" v-else>
        <div class="My_info__eOYeg">
          <van-image
            round
            width="60px"
            height="60px"
            src="http://liufusong.top:8080/img/profile/avatar.png"
          />

          <p>游客</p>
          <van-button type="primary" @click="$router.push('/login')"
            >去登录</van-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getUserInfo, logout } from '@/api/user'
import { mapState,mapMutations } from 'vuex'
import { Dialog } from 'vant';
export default {
  created () {

    this.getUserInfo()
  },
  data () {
    return {
      userInfo: {}
    }
  },
  methods: {
     async logoutfn () {
      const res = await logout()
      console.log(res);
  if(res.data.status ===200){
    console.log('退出成功');
    this.remove()
  }
    },
    async getUserInfo () {
      console.log(this.user);
      const res = await getUserInfo()
      console.log(res);
      this.userInfo = res.data.body
      console.log(this.userInfo);
    },
    logout () {
      Dialog.confirm({

        message: '是否确认退出',
      })
        .then(() => {

    this.logoutfn()
          
        })
        .catch(() => {
          // on cancel
        });
    },
    ...mapMutations(['remove'])

  },
  computed: {
    ...mapState(["user"])
  },
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang="less">
.header-login {
  position: relative;
  width: 375px;
  height: 375px;
  background: url("@/assets/avatar (1).png") no-repeat;
  background-size: cover;
  .My_info__eOYeg2 {
    position: absolute;
    left: 50%;
    top: 45%;
    transform: translateX(-50%);
    width: 318px;
    height: 208px;
    background-color: rgb(255, 255, 255);
    margin: 0 auto;
    box-shadow: 2px 2px 2px 2px rgba(165, 165, 165, 0.2);

    .van-image {
      position: absolute;
      left: 50%;
      top: -20%;
      transform: translateX(-50%);
      border: 4px solid rgb(243, 243, 243);
    }
    p {
      font-size: 13px;
      margin-top: 40px;
    }
    .diu {
      font-size: 12px;
      margin-top: 80px;
      color: #999999;
    }
    .van-icon {
      font-size: 12px;
      color: #999999;
    }
    .van-button {
      font-size: 12px;
      width: 56px;
      height: 22px;
      background-color: #21b97a;
      margin-bottom: 20px;
    }
  }
}
.My_title {
  width: 375px;
  height: 300px;
  text-align: center;
  .header-notlogin {
    position: relative;
    width: 375px;
    height: 191px;
    background: url("@/assets/bg.png") no-repeat;
    background-size: cover;
  }
  .My_info__eOYeg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%);
    width: 318px;
    height: 165px;
    background-color: rgb(255, 255, 255);
    margin: 0 auto;
    box-shadow: 2px 2px 2px 2px rgba(165, 165, 165, 0.2);

    .van-image {
      position: absolute;
      left: 50%;
      top: -20%;
      transform: translateX(-50%);
      border: 4px solid rgb(243, 243, 243);
    }
    p {
      font-size: 13px;
      margin-top: 40px;
    }
    .van-button {
      font-size: 8px;
      width: 68px;
      height: 30px;
      background-color: #21b97a;
    }
  }
}
</style>
