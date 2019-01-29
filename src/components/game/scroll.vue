<template>
  <div>
    <div class="nav">
      <p :class="{active: pdType===1}" @click="changeTab(1)">热门</p>

      <p :class="{active: pdType===2}" @click="changeTab(2)">新游</p>

      <p :class="{active: pdType===3}" @click="changeTab(3)">普通</p>
    </div>
    <ul id="dataList" class="data-list scroll_list">
      <li v-for="(pd,index) in dataList" :key="index">
        <img class="fl pd-img" :src="pd.iconUrl">
        <div class="fl">
          <p class="game_title">{{pd.name}}</p>
          <p class="sketch">{{pd.introduce}}</p>
        </div>
        <div class="fr link">开始</div>
      </li>
      <!-- <li
        class="end"
        v-show="loading"
      >--正在加载--</li>
      <li
        class="end"
        v-show="endShow"
      >--End--</li>-->
    </ul>
  </div>
</template>
<script>
import qs from "qs";
export default {
  config: {
    enablePullDownRefresh: true
  },
  data() {
    return {
      dataList: [],
      pageNum: 1,
      pageSize: 10,
      pdType: 1,
      pageTotal: 1,
    };
  },
  created() {
    // this.requestData();
    this.fetchData(1, 10, 1);
  },

  // 上拉加载，拉到底部触发
  onReachBottom() {
    // var arr = [];
    // var _this = this;
    // this.$http
    //   .post("index/getGames")
    //   .then(function(res) {
    //     console.log(res);
    //     if (res.data.status === "success") {
    //       arr = res.data.results.list.data;
    //       _this.pageTotal = res.data.results.list.pageVo.pageTotal;
    //       _this.pageNum++;
    //       if (_this.pageTotal >= _this.pageNum) {
    //         _this.dataList = _this.dataList.concat(arr);
    //       } else {
    //         _this.dataList = _this.dataList;
    //       }
    //     }
    //   })
    //   .catch(function(err) {
    //     console.log(err);
    //   });
    if(this.pageNum<this.pageTotal){
      this.fetchData(this.pageNum, this.pageSize, this.pdType)
    }
    // console.log(this.pageNum)
    // console.log(this.pageTotal)
  },
  methods: {
    changeTab(type) {
      if (type != this.pdType) {
        this.pdType = type;
        this.dataList = []; // 在这里手动置空列表,可显示加载中的请求进度
        this.fetchData(1, 10, type);
      }
    },
    fetchData(pageNum, pageSize, pdType) {
      var _this = this;
      var arr = [];
      this.$http
        .post(
          "/index/getGames",
          qs.stringify({ pageNum: pageNum, pageSize: pageSize, type: pdType })
        )
        .then(function(res) {
          console.log(res);
          arr = res.data.results.list.data;
          _this.dataList = _this.dataList.concat(arr);
          _this.pageTotal = res.data.results.list.pageVo.pageTotal;
          _this.pageNum = pageNum + 1;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    // requestData() {
    //   var _this = this;
    //   this.$http
    //     .post("index/getGames")
    //     .then(function(res) {
    //       console.log(res);
    //       if (res.data.status === "success") {
    //         _this.dataList = res.data.results.list.data;
    //       }
    //     })
    //     .catch(function(err) {
    //       console.log(err);
    //     });
    // },
    mounted() {
      onReachBottom();
    }
  }
};
</script>

<style scoped>
.nav {
  text-align: center;
  border-bottom: 0.02666rem solid #ddd;
  background-color: #fff;
}
.nav p {
  display: inline-block;
  width: 30%;
  padding: 0.1333rem 0;
  font-size: 34rpx;
}
.nav .active {
  border-bottom: 0.02666rem solid #0080fb;
  color: #0080fb;
}
.scroll_list {
  padding-bottom: 2rem;
  background-color: #fff;
}
.fl p {
  width: 300rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.scroll_list li {
  position: relative;
  width: 100%;
  border-bottom: 0.026667rem solid #f5f5fa;
  height: 155rpx;
  font-size: 28rpx;
}
.scroll_list li p {
  margin-left: 0.68rem;
  font-size: 20rpx;
}
.scroll_list .pd-img {
  width: 111rpx;
  height: 111rpx;
  display: block;
  margin-left: 0.4rem;
  border-radius: 0.266667rem;
  margin-top: 22rpx;
}
.scroll_list li p.game_title {
  margin-top: 40rpx;
  line-height: 28rpx;
  font-size: 28rpx;
  width: 300rpx;
  color: #000;
}
.scroll_list li p.sketch {
  line-height: 20rpx;
  width: 300rpx;
  margin-top: 33rpx;
  font-size: 20rpx;
  color: #949494;
}
.scroll_list li .link {
  width: 94rpx;
  height: 55rpx;
  line-height: 55rpx;
  font-size: 28rpx;
  text-align: center;
  color: #0080fb;
  border: 0.026667rem solid #0080fb;
  border-radius: 0.08rem;
  /* margin: 50rpx 34rpx; */
  float: right;
  margin-right: 34rpx;
  margin-top: 50rpx;
}
.scroll_list li .link:active {
  background: #0080fb;
  color: #fff;
}
.scroll_list li.end {
  text-align: center;
  line-height: 1rem;
  height: 1rem;
  padding: 0;
}
</style>