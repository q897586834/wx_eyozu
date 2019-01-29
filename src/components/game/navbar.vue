<template>
     <div class="recommend">
            <img src="../../../static/images/recommend.png" alt="" class="recommend_title">
            <ul class="clear">
                <li class="fl recommend_game" v-for="(value,index) in remList" :key="index" >
                    <img :src="value.iconUrl" alt="" class="game_pic">
                    <p class="name">{{value.name}}</p>
                    <div class="link">开始</div>
                </li>
            </ul>
        </div>
</template>

<script>
export default {
  data() {
    return {
      pdType: 1,
      remList: []
    };
  },
  methods: {
    requestData() {
      var _this = this;
      this.$http
        .post("index/mygame")
        .then(function(res) {
          console.log(res);
          if (res.data.status === "success") {
            _this.remList = res.data.results.list;
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  created() {
    this.requestData();
  },
};
</script>

<style scoped>
.recommend {
  position: relative;
  background-color: #fff;
  border-top: 0.186667rem solid #f2f2f2;
  width: 100%;
  border-bottom: 0.053333rem solid #f5f5fa;
  height: 280rpx;
}
.recommend_title {
  position: absolute;
  left: 0;
  height: 180rpx;
  width: 51rpx;
  top:64rpx;
}
.recommend ul {
  margin-top: 34rpx;
  margin-left: 40rpx;
}
.recommend_game {
  width: 180rpx;
  height: 237rpx;
  background-size: 100% 100%;
  background-image: url(../../../static/images/recommend_bg.png);
  margin-left: 50rpx;
}
.recommend_game .game_pic {
  display: block;
  width: 111rpx;
  height: 111rpx;
  margin-left: 34rpx;
}
.recommend_game .name {
  margin-top: 15rpx;
  line-height: 24rpx;
  margin-left: 25rpx;
  width: 130rpx;
  text-align: center;
  font-size: 24rpx;
  overflow: hidden; 
  text-overflow: ellipsis; 
  white-space: nowrap; 
  padding-bottom: 10rpx;
}
.recommend_game .link {
  width: 94rpx;
  height: 54rpx;
  line-height: 54rpx;
  font-size: 28rpx;
  text-align: center;
  color: #0080fb;
  border: 0.026667rem solid #0080fb;
  border-radius: 0.08rem;
  margin: 0 auto;
}
.recommend_game .link:active {
  background: #0080fb;
  color: #fff;
}
</style>