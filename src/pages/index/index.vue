<template>
  <div>
    <game-banner></game-banner>
    <game-navbar></game-navbar>
    <game-scroll></game-scroll>
  </div>
</template>

<script>
import GameBanner from "../../components/game/banner";
import GameNavbar from "../../components/game/navbar";
import GameScroll from "../../components/game/scroll";
export default {
  data() {
    return {
      imgUrl: []
    };
  },
  components: {
    GameBanner,GameNavbar,GameScroll
  }
};
</script>

<style scoped>

</style>
