<template>
  <div>
    <div class="main-title">
      联系我们
      <div class="en-main-title">CONTACT US</div>
    </div>
    <div class="contact-item">客服热线:0572-2611126</div>
      <div class="contact-item">客服邮箱:service@pgnet.cn</div>
      <div class="contact-item">客服热线:400-0572-916</div>
      <div class="contact-item">投诉电话:0572-2367871</div>
      <div class="contact-item">投诉邮箱:chen@pgnet.cn</div>
      <baidu-map
      style="height:5rem;margin-top:40px;"
      :center="center"
      :zoom="zoom"
      @ready="handler"
      :scroll-wheel-zoom="true"
    >
      <bm-marker :position="{lng: 120.198145, lat: 30.861896}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
      <bm-label content="" :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 30}"/>
    </bm-marker>
    </baidu-map>
  </div>
</template>

<script>
export default {
  data() {
    return {
        center: {
        lng: 0,
        lat: 0
      },
      zoom: 3,
    };
  },
  methods:{
      handler({ BMap, map }) {
      this.center.lng = 120.198145;
      this.center.lat = 30.861896;
      this.zoom = 18;
    }
  }
};
</script>

<style lang="less" scoped>
.contact-item {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b1585c;
  color: white;
  height: 0.7rem;
  border-radius: 0.7rem;
  font-size: 0.3rem;
  width: 80%;
  margin:0 auto;
  margin-bottom: 10px;
}
</style>