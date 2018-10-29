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
                            <h3>{{ event.title }}</h3>
                            <div class="h6 font-weight-300"><i class="mr-1 xi-marker-circle"></i>경기도 수원시</div>
                            <div class="h6 mt-4"><i class="mr-1 xi-time-o"></i>2018년 10월 19일 오후 6시 30분</div>
                            <div><i class="mr-1 xi-money"></i>50,000원</div>
                        </div>
                        <div class='mt-3 row'>
                            <div class='col-7 float-left'>
                                <span><i class="xi-flag-o"></i> 호스트: {{ event.host.name }}</span><br/>
                                <span><i class="xi-home-o"></i> 장소 제공자: {{ event.provider.name }}</span>
                            </div>
                            <div class='col-5'>
                                <div class='float-right'>
                                    <img v-lazy="event.host.profileImage" class="rounded-circle host-image mr-2">
                                    <img v-lazy="event.provider.profileImage" class="rounded-circle host-image">
                                </div>
                            </div>
                        </div>
                        <div class="mt-3 py-2 border-top text-center">
                            <div class="row justify-content-center">
                                <div class="col-lg-9">
                                  <span v-html="shownDescription"></span>
                                    <a href @click.prevent="toggleMore()">{{ showStatus }}</a>
                                </div>
                            </div>
                        </div>
                        <div class='row'>
                            <GmapMap class='col mb-5'
                                     :center="event.location.coordinates"
                                     :zoom='17'
                                     style='height:300px;'
                            >
                                <GmapMarker
                                    :position='event.location.coordinates'
                                    :clickable='true'
                                    :draggable='true'
                                    >
                                </GmapMarker>
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
  computed: {
    shownDescription() {
      return this.isShort
        ? this.event.description.substr(0, 50).concat("...")
        : this.event.description;
    },
    showStatus() {
      return this.isShort ? "더 보기" : "간략히 보기";
    }
  },
  data() {
    return {
      event: {
        title: "터키요리 해먹기 모임",
        description:
          "<p>터키요리 해먹으면서 노는 모임</p>" +
          "<p>아싸 퇴근이다.</p>" +
          "<p>에헤라디야 바람 분다.</p>" +
          "<p>에헤라디야 바람 분다.</p>" +
          "<p>에헤라디야 바람 분다.</p>",
        location: {
          coordinates: {
            lat: 37.2828093,
            lng: 127.0441714
          }
        },
        host: {
          id: "1a",
          name: "계성혁",
          profileImage: "img/theme/team-4-800x800.jpg"
        },
        provider: {
          id: "2a",
          name: "꿉꿉이",
          profileImage: "img/theme/team-4-800x800.jpg"
        }
      },
      isShort: true
    };
  },
  methods: {
    toggleMore() {
      this.isShort = !this.isShort;
    }
  }
};
</script>
<style>
.host-image {
  max-width: 45px;
}
</style>
