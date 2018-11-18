<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0"
                 v-bind:style="{ 'background-image': 'url(' + event.image + ')' }">
        </section>
        <section class="section section-skew event-info">
            <div class="container">
                <card shadow class="card-profile mt--300" no-body>
                    <div class="px-4">
                        <div class="text-center mt-5">
                            <h3>{{ event.title }}</h3>
                            <div class="h6 font-weight-300"><i class="mr-1 xi-marker-circle"></i>경기도 수원시</div>
                        </div>
                      <div class="mt-4">
                        <div class="h6 ml-1 row"><i class="mr-1 xi-time-o"></i> {{ dateFormatted }}</div>
                        <div class="h6 ml-1 row"><i class="mr-1 xi-money"></i> {{ feeWithComma }}원</div>
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
                      <div class="my-3">
                        <div class="h6">주소 : {{ event.location.name }}</div>
                        <div>{{ event.location.address }}</div>
                      </div>

                      <GmapMap class='col mb-5'
                               :center="coordinates"
                               :zoom='17'
                               style='height:300px;'
                               ref="map"
                      >
                          <GmapMarker
                              :position='coordinates'
                              :clickable='true'
                              :draggable='false'
                              >
                          </GmapMarker>
                      </GmapMap>
                    </div>
                </card>
            </div>
            <div id="attend" class="row mx-0">
                <div class="col text-center my-auto">
                    {{ feeWithComma }}원
                </div>
                <div class="col text-center my-auto">
                    <base-button type="neutral" variant="primary">참가신청</base-button>
                </div>
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
    },
    feeWithComma() {
      return this.event.feeAmount.toLocaleString();
    },
    coordinates() {
      return {
        lat: parseFloat(this.event.location.coordinates.lat),
        lng: parseFloat(this.event.location.coordinates.lng)
      };
    },
    dateFormatted() {
      let date = new Date(this.event.date);
      return `${date.toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric"
      })} ${date.toLocaleTimeString("ko-KR", {
        hour: "numeric",
        minute: "numeric"
      })}`;
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
          name: "아주대학교",
          address: "경기도 수원시 영통구 월드컵로 306",
          coordinates: {
            lat: 37.2828093,
            lng: 127.0441714
          }
        },
        // TODO: moment를 사용해서 API 측에선 Raw한 날짜 정보만 받도록
        time: "2018년 10월 19일 오후 6시 30분",
        fee: 50000,
        image: "/img/theme/img-2-1200x1000.jpg",
        host: {
          id: "1a",
          name: "계성혁",
          profileImage: "/img/theme/team-4-800x800.jpg"
        },
        provider: {
          id: "2a",
          name: "꿉꿉이",
          profileImage: "/img/theme/team-4-800x800.jpg"
        }
      },
      isShort: true
    };
  },
  methods: {
    toggleMore() {
      this.isShort = !this.isShort;
    }
  },
  created() {
    // TODO API로 모임 정보 가져와서 붙여주기
    let eventId = this.$route.params.id;
    let url = "/event/".concat(eventId);

    this.$axios.get(url).then(res => {
      this.event = res.data;
    });

    this.$emit("onNavColorChange", "white");
  }
};
</script>
<style scoped lang="scss">
.host-image {
  max-width: 45px;
}

.event-info {
  padding-bottom: 6rem;
}

#attend {
  width: 100vw;
  height: 65px;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: white;
  box-shadow: 0 -15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07) !important;
  z-index: 100;
}

button[variant="primary"] {
  padding-right: 3rem;
  padding-left: 3rem;
}
</style>
