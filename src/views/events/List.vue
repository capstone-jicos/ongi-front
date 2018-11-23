<template>
  <section class="section">
    <div class="container">
      <div id="event-list-header">
        <!--<span class="h5">{{ fullLocation }}의 밥모임</span>-->
        <span class="h5">모든 지역의 밥모임</span>
        <div class="float-right">
          <router-link to="">
            <i class="xi-maker xi-2x"></i>
          </router-link>
          <router-link to="">
            <i class="xi-tune xi-2x"></i>
          </router-link>
        </div>
      </div>
    </div>
    <div class="container">
      <router-link v-for="event in events" :key="event.eventId"
                   :to="'event/'+event.idx">
        <card shadow class="card-profile" no-body>
          <div class="event-list-item" v-bind:style="{ 'background-image': 'url('+ event.eventImages +')' }">
          </div>
          <div class="px-2 mb-2">
            <div class="row event-title-photo">
              <div class="event-title col-9 mt-2">
                <strong>{{ titleFormatted(event.title) }}</strong>
              </div>
              <div class="col-3">
                <!--<img v-lazy="event.host.image" class="rounded-circle"/>-->
              </div>
            </div>
            <div class="event-time">
              <i class="xi-time-o"></i> {{ event.startDate }}
            </div>
            <div class="row mx-0">
              <div class="col-8 food-type px-0">
                <i class="xi-restaurant"></i>
                <span v-for="type in event.type" :key="type" >
                      <span>{{ type }} </span>
                    </span>
              </div>
              <div class="col-4 attendee px-0 mx-0"><i class="xi-toilet"></i>&nbsp;{{ event.seats }}명</div>
            </div>
          </div>
        </card>
      </router-link>
    </div>
  </section>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("location");

export default {
  name: "List",
  data() {
    return {
      events: [],
      location: null
    };
  },
  created() {
    this.location = this.getLocationForEventList();
    this.$emit("onNavColorChange", "gray");

    this.$axios.get("/event").then(res => {
      let data = res.data;

      for (let i = 0; i < data.length; i++) {
        let date = new Date(data[i].startDate);
        if (data[i].type) {
          data[i].type = JSON.parse(decodeURIComponent(data[i].type));
        }

        data[i].startDate = `${date.toLocaleDateString("ko-KR", {
          year: "numeric",
          month: "long",
          day: "numeric"
        })} ${date.toLocaleTimeString("ko-KR", {
          hour: "numeric",
          minute: "numeric"
        })}`;
        this.events.push(data[i]);
      }
    });
  },
  methods: {
    ...mapActions(["setLocationForEventList"]),
    ...mapGetters(["getLocationForEventList"]),
    titleFormatted(title) {
      if (title) {
        return title.length < 10 ? title : title.substr(0, 9).concat("...");
      } else {
        return "";
      }
    }
  },
  computed: {
    fullLocation() {
      return `${this.location.state} ${this.location.city}`;
    }
  }
};
</script>

<style scoped lang="scss">
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
