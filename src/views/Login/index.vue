<template>
  <div>
    <van-nav-bar title="账号登录" left-arrow />
    <van-form @submit="onSubmit" ref="form">
      <van-field
        v-model="username"
        name="username"
        placeholder="请输入账号"
        :rules="[
          { required: true, message: '请输入账号' },
          {
            pattern: /^[a-zA-Z0-9]{5,8}$/,
            message: '账号格式为5-8位的数字或字符',
          },
        ]"
        class="form"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        placeholder="请输入密码"
        :rules="[
          { required: true, message: '请输入密码' },
          {
            pattern: /^[a-zA-Z0-9]{5,8}$/,
            message: '密码格式为5-8位的数字或字符',
          },
        ]"
        class="form"
      />
      <div style="margin: 16px">
        <van-button round block native-type="submit" class="login-btn"
          >登录</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  created () { },
  data () {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    async onSubmit (values) {
      try {
        const res = await login(values)
        console.log(res);
        this.$store.commit('setUser', res.data.body.token)
        if (res.data.body.token) {
          this.$toast.success('登陆成功')
          this.$router.replace('/home')
        }
      } catch (err) {
        this.$toast.fail('登陆失败')

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
.login-btn {
  width: 694px;
  height: 100px;
  line-height: 100px;
  background-color: #1cb676;
  border-radius: 4px;
  color: #ffffff;
  font-size: 36px;
}
.form {
  height: 120px;
  width: 790px;
  line-height: 120px;
  font-size: 36px;
  padding: 2px 36px;
  // border-bottom: 2px solid ;
}
</style> 
