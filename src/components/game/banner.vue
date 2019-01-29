<template>
  <div class="banner">
    <swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="1000">
        <block v-for="(item, index) in bannerList" :index="index" :key="index">
            <swiper-item>
                <image :src="item.imgUrl" class="slide-image" mode="aspectFill"/>
            </swiper-item>
        </block>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bannerList: []
    };
  },
  methods: {
    requestData() {
      var _this = this;
      this.$http.post('index/banner').then(function(res){
        console.log(res);
        if(res.data.status==='success'){
          _this.bannerList=res.data.results.list;
        }
      }).catch(function(err){
        console.log(err);
      })
    },
  },
  created() {
      this.requestData();
  }
};
</script>

<style scoped>
.banner{
  height: 286rpx;
  width: 100%;
}
.banner_img {
  width: 100%;
}
</style>