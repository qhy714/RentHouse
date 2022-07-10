<template>
  <div>
    <!-- 头 -->
    <van-sticky>
      <van-nav-bar title="发布房源" left-arrow  @click-left="$router.back()"/>
    </van-sticky>
    <!-- 内容 -->
    <div>
      <div class="house">
        <van-cell value="房源信息" class="info" />
        <van-cell title="小区名称" is-link value="请输入小区名称" />

        <van-cell-group>
          <van-field
            v-model="value1"
            label="租  金"
            placeholder="请输入租金/月"
          >
            <template #extra>
              <span> ￥/月</span>
            </template>
          </van-field>
          <van-field
            v-model="value2"
            clearable
            label="建筑面积"
            placeholder="请输入建筑面积"
          >
            <template #extra>
              <span>m²</span>
            </template>
          </van-field>
        </van-cell-group>

        <van-cell
          title="户  型"
          is-link
          :value="roomType1 ? roomType1 : '请选择'"
          @click="roomType(1)"
        />
        <!-- 13.如果roomType1有数据就显示到界面，否则就显示请选择 -->
        <!-- 5.点击事件触发户型事件 -->
        <van-cell
          title="所在楼层"
          is-link
          :value="floor1 ? floor1 : '请选择'"
          @click="floor(2)"
        />
        <!-- 13.如果floor1有数据就显示到界面，否则就显示请选择 -->
        <van-cell
          title="朝  向"
          is-link
          :value="oriented1 ? oriented1 : '请选择'"
          @click="oriented(3)"
        />
      </div>
      <van-popup v-model="show" position="bottom" :style="{ height: '45%' }">
        <van-picker
          title="标题"
          :columns="data"
          ref="change"
          @change="onChange"
        />
        <!--8. 滚动选择器触发修改事件onChange -->
      </van-popup>

      <!-- 房屋标题 图像 -->
      <van-panel title="房屋标题">
        <van-field
          v-model="message"
          autosize
          type="textarea"
          placeholder="请输入标题（例如：整租 小区名 2室 5000元）"
        />
      </van-panel>
      <van-panel title="房屋图像">
        <van-uploader :after-read="afterRead" />
      </van-panel>

      <van-panel title="房屋配置">
        <van-row type="flex" justify="space-around">
          <van-col span="4">span: 4</van-col>
          <van-col span="4">span: 4</van-col>
          <van-col span="4">span: 4</van-col>
          <van-col span="4">span: 4</van-col>
          <van-col span="4">span: 4</van-col>
        </van-row>
        <van-row type="flex" justify="space-around">
          <van-col span="4">span: 4</van-col>
          <van-col span="4">span: 4</van-col>
          <van-col span="4">span: 4</van-col>
          <van-col span="4">span: 4</van-col>
          <van-col span="4">span: 4</van-col>
        </van-row>
      </van-panel>

      <van-panel title="房屋描述">
        <van-field
          v-model="message"
          autosize
          type="textarea"
          placeholder="请输入房屋描述信息"
          rows="5"
        />
      </van-panel>
    </div>
    <!-- 底部按钮 -->
    <div class="footer">
      <van-button plain type="primary">取消</van-button>
      <van-button type="primary">提交</van-button>
    </div>
  </div>
</template>

<script>
import { getHousesParams } from '@/api/house' // 1.获取全部数据
export default {
  created () {
    this.getHousesParams()
  },
  data () {
    return {
      housesParams: {}, //转换后的全部数据
      show: false,
      data: [], // 当前选择器数据
      objData: {}, // 发送到服务器的暂存数据
      index: 0,
      roomType1: '',
      floor1: '',
      oriented1: ''
    }
  },
  methods: {
    onChange () {
      const value = this.$refs.change.getValues() //9.通过ref标记的组件、用getValues<选择器自带方法>方法获取选中的数据 获取滚动数据值
      console.log(value);
      if (this.index === 1) { //10. 判断时那一组数据
        this.objData.roomType = value[0].value // 11.在暂存数据中存放对应的数据   滚动数据值的第一项的id   放到新增的.roomType里
        this.roomType1 = value[0].text //12. 滚动数据值的第一项的值放到.roomType1 
      } else if (this.index === 2) {
        this.objData.floor = value[0].value
        this.floor1 = value[0].text
      } else {
        this.objData.oriented = value[0].value
        this.oriented1 = value[0].text

      }
    },
    roomType (id) {
      this.data = this.housesParams.roomType  //6.将所有数据里的户型roomtype数据放入data暂存给选择器使用
      this.show = true //7. 显示弹出层
      this.index = id
    },
    floor (id) {
      this.data = this.housesParams.floor
      this.show = true
      this.index = id
    },
    oriented (id) {
      this.data = this.housesParams.oriented
      this.show = true
      this.index = id
    },

    async getHousesParams () {
      try {
        const res = await getHousesParams()
        console.log(res);  // 2.接收数据
        const json = JSON.stringify(res.data.body).replace(/label/g, 'text') //3. 把数据对象转换为字符串，把全部的label换成text
        this.housesParams = JSON.parse(json) //4.把换完的字符串转为对象存为数据,放入data
        console.log(this.housesParams)
      } catch (error) {
        console.log(error);
      }
    },

    afterRead (file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.house {
  padding-right: 10px;
}
.info {
  span {
    color: #21b97a;
  }
}
.van-uploader {
  padding: 10px 10px;
}
.van-col {
  background-color: pink;
}

.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  .van-button {
    width: 50%;
    border: none;
  }
}
</style>
