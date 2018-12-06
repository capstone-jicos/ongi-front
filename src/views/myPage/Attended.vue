<template>
  <section class="section">
    <div class="container">
      <div id="event-list-header">
        <span class="h5">{{displayName}}님의 참가한 모임</span>
        </div>
      </div>
    <div class="container">
      <router-link v-for="event in events" :key="event.eventIdx" :to="'/my/attended/event/'+event.eventIdx">
        <card shadow class="card-profile" no-body>
          <div class="event-list-item" v-bind:style="{ 'background-image': 'url('+ event.image +')' }">
          </div>
          <div class="px-2 mb-2">
            <div class="row event-title-photo">
              <div class="event-title col-9 mt-2">
                <strong>{{ event.title }}</strong>
              </div>
              <div class="col-3">
                <img v-lazy="event.hostImage" class="rounded-circle"/>
              </div>
            </div>
            <div class="event-time">
              <i class="xi-time-o"></i> {{ dateFormatted }}
            </div>
            <div class="row">
              <div class="col food-type">
                <i class="xi-restaurant"></i>
                <span v-for="food in event.type" :key="food" >
                      <span>{{ food }} </span>
                    </span>
              </div>
              <div class="col attendee"><i class="xi-toilet"></i>&nbsp;{{ event.seats }}명</div>
            </div>
          </div>
        </card>
      </router-link>
    </div>
  </section>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("user");

export default {
  name: "Attended",
   data() {
    return {
      events: [],
      displayName: null
    };
  },
  created() {
    this.$emit("onNavColorChange", "black");
    this.displayName = this.getUserInfo().displayName;

    this.$axios.get("/user/me/attended", { withCredentials: true }).then(res => {
      for (let index = 0; index < res.data.length; index++) {
        let type = JSON.parse(decodeURIComponent(res.data[index].type));
        let event = res.data[index];
        event.type = type;
        this.events.push(event);
      }
    });
  },
  computed:{
    dateFormatted() {
      let date = new Date(this.events.startDate);
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

  methods: {
    ...mapGetters(["getUserInfo"])
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/bootstrap/functions";
@import "../../assets/scss/custom/variables";

img {
  max-height: 50px;
}

div#event-list-header {
  i {
    color: #68778c;
  }
}

div.card.card-profile {
  margin: 15px 0;
  font-size: 16px;

  div.event-title {
    font-size: 1.75rem;
  }

  div.event-list-item {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    -webkit-background-size: cover;
    background-size: cover;
    height: 125px;
  }

  div.event-title-photo {
    img {
      margin-top: -30px;
    }
  }

  div.attendee {
    text-align: right;
    margin-right: 0.5rem;
  }
}
</style>
