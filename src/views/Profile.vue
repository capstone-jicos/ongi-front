<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-primary alpha-4">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
        <section class="section section-skew">
            <div class="container">
                <card shadow class="card-profile mt--300" no-body>
                    <div class="px-4">
                        <div class="text-center mt-5">
                            <h3>터키요리 해먹기 모임</h3>
                            <div class="h6 font-weight-300"><i class="ni location_pin mr-2"><!-- TODO 핀 아이콘 넣기 --></i>경기도 수원시</div>
                            <div class="h6 mt-4"><i class="ni business_briefcase-24 mr-2"><!-- TODO 시계 아이콘 넣기 --></i>2018년 10월 19일 오후 6시 30분</div>
                            <div><i class="ni education_hat mr-2"><!-- TODO 돈 아이콘 넣기--></i>50,000원</div>
                        </div>
                        <div class='mt-3 row'>
                            <div class='col float-left'>
                                <span><!--TODO 호스트 아이콘? -->호스트: 계성혁</span><br/>
                                <span><!--TODO 호스트 아이콘? -->장소 제공자: 꿉꿉이</span>
                            </div>
                            <div class='col'>
                                <div class='float-right'>
                                    <img v-lazy="'img/theme/team-4-800x800.jpg'" class="rounded-circle host-image mr-2">
                                    <img v-lazy="'img/theme/team-4-800x800.jpg'" class="rounded-circle host-image">
                                </div>
                            </div>
                        </div>
                        <div class="mt-5 py-5 border-top text-center">
                            <div class="row justify-content-center">
                                <div class="col-lg-9">
                                    <p>터키요리 해먹으면서 노는 모임. 아싸 퇴근이다.</p>
                                    <a href="#">Show more</a>
                                    <!-- TODO Show More 버튼 누르면 확장될 수 있게 (Vue Event 조작하면 될 듯) -->
                                </div>
                            </div>
                        </div>
                        <!-- TODO 지도넣기 -->
                        <div class='row'>
                            <GmapMap class='col mb-5'
                                     :center="{lat: 37.2828135,lng: 127.0441767}"
                                     :zoom='17'
                                     style='height:500px;'
                            >
                                <!-- TODO 마커 위치 넣기 -->
                                <!--<GmapMarker-->
                                    <!--:key='index'-->
                                    <!--v-for='(m,index) in markers'-->
                                    <!--:position='m.position'-->
                                    <!--:clickable='true'-->
                                    <!--:draggable='true'-->
                                    <!--@click='center=m.position'>-->
                                <!--</GmapMarker>-->
                            </GmapMap>
                        </div>
                    </div>
                </card>
            </div>
        </section>
    </div>
</template>
<script>
export default {
  name: "Events",
  methods: {
    data() {
      return {
        center: { lat: 45.508, lng: -73.587 },
        markers: [],
        places: [],
        currentPlace: null
      };
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  },
  mounted() {
    this.geolocate();
  }
};
</script>
<style>
.host-image {
  max-width: 60px;
}
</style>
