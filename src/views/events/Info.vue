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
                            <div class="h6 font-weight-300"><i class="mr-1 xi-marker-circle"></i>{{ briefAddress }}</div>
                        </div>
                      <div class="mt-4">
                        <div class="h6 ml-1 row"><i class="mr-1 xi-time-o"></i> {{ dateFormatted }}</div>
                        <div class="h6 ml-1 row"><i class="mr-1 xi-money"></i> {{ feeWithComma }}원</div>
                      </div>
                        <div class='mt-3 row'>
                            <div class='col-7 float-left'>
                                <span><i class="xi-flag-o"></i> {{ event.host.name }}</span><br/>
                                <span><i class="xi-home-o"></i> {{ event.provider.name }}</span>
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
                                  <br/>
                                    <a href v-if="isDescLong()"
                                       @click.prevent="toggleMore()">{{ showStatus }}</a>
                                </div>
                            </div>
                        </div>
                      <div class="my-3">
                        <div class="h6">주소 : {{ event.location.name }}</div>
                        <div>{{ fullAddress }}</div>
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
        </section>
    </div>
</template>
<script>
import RequestFooter from "./RequestFooter";

export default {
  name: "Events",
  components: { RequestFooter },
  data() {
    return {
      event: {
        title: "",
        description: "",
        location: {
          name: "",
          country: "",
          state: "",
          city: "",
          detail: "",
          coordinates: {
            lat: 0,
            lng: 0
          }
        },
        host: {
          id: "",
          name: "",
          profileImage: ""
        },
        provider: {
          id: "",
          name: "",
          profileImage: ""
        },
        feeAmount: 0,
        type: null,
        seats: 0,
        startDate: null,
        endDate: null,
        attendCheck: 0,
        hostCheck: false
      },
      isShort: true
    };
  },
  methods: {
    toggleMore() {
      this.isShort = !this.isShort;
    },
    isDescLong() {
      return this.event.description.length > 50;
    },
    joinUrl() {
      return `/event/${this.$route.params.id}/join`;
    }
  },
  created() {
    let eventId = this.$route.params.id;
    let url = "/event/".concat(eventId);

    this.$axios.get(url).then(res => {
      this.event = res.data;
    });

    this.$emit("onNavColorChange", "white");
    this.$scrollToTop();
  },
  computed: {
    shownDescription() {
      return this.isShort && this.isDescLong()
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
      let date = new Date(this.event.startDate);
      return `${date.toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric"
      })} ${date.toLocaleTimeString("ko-KR", {
        hour: "numeric",
        minute: "numeric"
      })}`;
    },
    fullAddress() {
      let location = this.event.location;
      return `${location.country} ${location.state}
       ${location.city} ${location.detail}`;
    },
    briefAddress() {
      let location = this.event.location;
      return `${location.state} ${location.city}`;
    }
  }
};
</script>
<style scoped lang="scss">
.section-profile-cover {
  height: 250px;
}

.host-image {
  max-width: 45px;
}

.event-info {
  padding-bottom: 6rem;
}

button[variant="primary"] {
  padding-right: 3rem;
  padding-left: 3rem;
}
</style>
