<template>
    <div class="container">
        <card shadow class="card-profile mt-5" no-body>
            <div class="event-list-item">
            <!--v-bind:style="{ 'background-image': 'url(/img/theme/img-2-1200x1000.jpg)' }"-->
            </div>
            <div class="px-2">
                Hello WOrld
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
            attendee: 1
          },
          {
            eventId:1,
            title:"터키요리",
            photo:"/img/theme/team-4-800x800.jpg",
            country:"KR",
            state:"SEO",
            date:"2018-10-19 18:30",
            attendee:1
          },
          {
            eventId:1,
            title:"터키요리",
            photo:"/img/theme/team-4-800x800.jpg",
            country:"KR",
            state:"SEO",
            date:"2018-10-19 18:30",
            attendee:1
          },
          {
            eventId:1,
            title:"터키요리",
            photo:"/img/theme/team-4-800x800.jpg",
            country:"KR",
            state:"SEO",
            date:"2018-10-19 18:30",
            attendee:1
          },
        ]
      }
    }

  }
</script>

<style scoped>
img {
    max-height: 50px;
}

div.event-list-item {
    background-image: url("/img/theme/img-2-1200x1000.jpg");
    -webkit-background-size: cover;
    background-size: cover;
    height:175px;

}
</style>
