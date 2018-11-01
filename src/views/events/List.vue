<template>
    <div class="container mt-5">
        <card shadow v-for="event in events" :key="event.eventId" class="card-profile" no-body>
            <div class="event-list-item" v-bind:style="{ 'background-image': 'url('+ event.photo +')' }">
            </div>
            <div class="px-2 mb-2">
                <div class="row event-title-photo">
                    <div class="event-title col-9 mt-2">
                        <strong>{{ event.title }}</strong>
                    </div>
                    <div class="col-3">
                        <img v-lazy="event.host.image" class="rounded-circle"/>
                    </div>
                </div>
                <div class="event-time">
                    <i class="xi-time-o"></i> {{ event.date }}
                </div>
                <div class="row">
                  <div class="col food-type">
                    <i class="xi-restaurant"></i>
                    <span v-for="type in event.foodType" :key="type" >
                      <span>{{ type }} </span>
                    </span>
                  </div>
                  <div class="col attendee"><i class="xi-toilet"></i>&nbsp;{{ event.attendee }}명</div>
                </div>
            </div>
        </card>
    </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      events: [
        {
          eventId: 1,
          title: "터키요리",
          photo: "/img/theme/img-2-1200x1000.jpg",
          country: "KR",
          state: "SEO",
          date: "2018-10-19 18:30",
          attendee: 1,
          foodType: ["해산물", "닭고기"],
          host: {
            image: "/img/theme/team-4-800x800.jpg"
          }
        },
        {
          eventId: 2,
          title: "터키요리",
          photo: "/img/theme/team-3-800x800.jpg",
          country: "KR",
          state: "SEO",
          date: "2018-10-19 18:30",
          attendee: 1,
          foodType: ["할랄푸드"],
          host: {
            image: "/img/theme/team-4-800x800.jpg"
          }
        },
        {
          eventId: 3,
          title: "터키요리",
          photo: "/img/theme/team-1-800x800.jpg",
          country: "KR",
          state: "SEO",
          date: "2018-10-19 18:30",
          attendee: 1,
          foodType: ["할랄푸드"],
          host: {
            image: "/img/theme/team-4-800x800.jpg"
          }
        },
        {
          eventId: 4,
          title: "터키요리",
          photo: "/img/theme/team-4-800x800.jpg",
          country: "KR",
          state: "SEO",
          date: "2018-10-19 18:30",
          attendee: 1,
          foodType: ["할랄푸드"],
          host: {
            image: "/img/theme/team-4-800x800.jpg"
          }
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
img {
  max-height: 50px;
}

div.card.card-profile {
  margin: 15px;
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
