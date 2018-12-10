<template>
  <section class="section">
    <div class="container">
      <div id="event-list-header">
        <span class="h5">{{displayName}}님의 주최한 모임</span>
        </div>
      </div>
    <div class="container">
      <router-link to="/event/create">
        <card shadow class="card-profile add-new-event" no-body>
          <div class="my-auto text-center">
            <p>원하는 모임을 만들어보세요</p>
          </div>
        </card>
      </router-link>
      <router-link v-for="event in events" :key="event.eventIndex" :to="'/my/hosted/event/'+event.eventIndex">
        <card shadow class="card-profile" no-body>
          <div class="event-list-item" v-bind:style="{ 'background-image': 'url('+ event.eventImages +')' }">
          </div>
          <div class="px-2 mb-2">
            <div class="row event-title-photo">
              <div class="event-title col-9 mt-2">
                <strong>{{ event.title }}</strong>
              </div>
            </div>
            <div class="event-time">
              <i class="xi-time-o"></i> {{ event.startDate }}
            </div>
            <div class="row">
              <div class="col food-type">
                <i class="xi-restaurant"></i>
                <span v-for="food in event.type" :key="food" >
                      <span>{{ food }} </span>
                    </span>
              </div>
              <div class="col attendee"><i class="xi-toilet"></i>&nbsp;{{ event.holdNum }}명</div>
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
  name: "Hosted",
  created() {
    this.$emit("onNavColorChange", "black");
    this.displayName = this.getUserInfo().displayName;

    this.$axios.get("/user/me/hosted", { withCredentials: true }).then(res => {
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
  data() {
    return {
      events: [],
      displayName: null
    };
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
  min-height: 150px;

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

div.add-new-event {
  height: 100%;
  background-color: $gray-100;
  div {
    opacity: 0.3;
    p {
      font-size: 1.5rem;
      color: $gray-900;
    }
  }
}
</style>
