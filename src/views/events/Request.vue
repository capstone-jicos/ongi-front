<template>
    <section class="section">
        <div class="container">
            <h4>필수약관동의</h4>
            <div id="attend" class="row my-4">
                <div class="col text-center">
                    <base-button type="neutral" variant="primary" v-on:click="agreeTerms">동의합니다.</base-button>
                </div>
                <div class="col text-center">
                    <base-button type="neutral" variant="primary" v-on:click="disagreeTerms">동의하지 않습니다.</base-button>
                </div>
            </div>
        </div>
        <div class="container">
            <div v-if="condition === true" >
                <h4 mb-2>참가비를 결제해주세요</h4>
                <div class="row">
                    <div class="col">
                        <label>카드번호</label>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3 col-far-left">
                        <base-input align="center"
                                    v-model="card_num_components[0]">
                        </base-input>
                    </div>
                    <div class="col-3 col-middle">
                        <base-input align="center"
                                    v-model="card_num_components[1]">
                        </base-input>
                    </div>
                    <div class="col-3 col-middle">
                        <base-input align="center"
                                    v-model="card_num_components[2]">
                        </base-input>
                    </div>
                    <div class="col-3 col-far-right">
                        <base-input align="center"
                                    type="password"
                                    v-model="card_num_components[3]">
                        </base-input>
                    </div>
                </div>
                <div class="row">
                    <div class="col-4">
                        <label>카드 유효기간</label>
                    </div>
                    <div class="col-8">
                        <label>비밀번호 (앞 2자리)</label>
                    </div>
                </div>
                <div class="row">
                    <div class="col-2 col-far-left pr-0">
                        <base-input align="center"
                                    v-model="expiry_components[1]"
                                    placeholder="YY">
                        </base-input>
                    </div>
                    <div class="col-2 col-middle pr-0">
                        <base-input align="center"
                                    v-model="expiry_components[0]"
                                    placeholder="MM">
                        </base-input>
                    </div>
                    <div class="col-2 col-far-left">
                        <base-input align="center"
                                    v-model="pwd_2digit_components[0]"></base-input>
                    </div>
                    <div class="col-2 col-middle">
                        <base-input align="center"
                                    v-model="pwd_2digit_components[1]"></base-input>
                    </div>
                    <div class="col-2 col-middle">
                        <base-input align="center"
                                    disabled
                                    placeholder="*"></base-input>
                    </div>
                    <div class="col-2 col-far-right">
                        <base-input align="center"
                                    disabled
                                    placeholder="*"></base-input>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <label>생년월일 6자리</label>
                    </div>
                    <div class="col-6">
                        <label>휴대폰 번호</label>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <base-input v-model="birth"
                                    palceholder="YY/MM/DD">
                        </base-input>
                    </div>
                    <div class="col-6">
                        <base-input v-model="buyer_tel"></base-input>
                    </div>
                </div>
                <div class="row my-4">
                    <div class="col text-center">
                        <base-button @click="joinEvent"
                                     type="neutral"
                                     variant="primary">결제하기</base-button>
                    </div>
                </div>
            </div>
            <div v-else-if="condition === false">
                <h4>모임 참가 신청을 취소하시겠습니까?</h4>
                <div class="text-center my-4">
                    <base-button type="neutral" variant="primary">예</base-button>
                </div>
            </div>
        </div>

    </section>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("user");

export default {
  name: "Request",
  created() {
    this.$emit("onNavColorChange", "black");
    if (this.getUserInfo().displayName === null) {
      let login_url = `/login?redirect_url=${this.$route.path}`;
      this.$router.push(login_url);
    }
  },
  data() {
    return {
      condition: "",
      card_num_components: ["", "", "", ""],
      expiry_components: ["", ""],
      birth: "",
      pwd_2digit_components: ["", ""],
      buyer_tel: ""
    };
  },
  methods: {
    ...mapGetters(["getUserInfo"]),
    agreeTerms() {
      this.condition = true;
    },
    disagreeTerms() {
      this.condition = false;
    },
    joinEvent: function() {
      let payload = {
        card_number: this.card_number,
        expiry: this.expiry,
        birth: this.birth,
        pwd_2digit: this.pwd_2digit,
        buyer_tel: this.buyer_tel
      };
      let eventId = this.$route.params.id;
      this.requestPayment(eventId, payload);
    },
    requestPayment(eventId, payload) {
      this.$axios
        .post(`/event/${eventId}/join`, payload, { withCredentials: true })
        .then(response => {
          if (response.status === 201) {
            this.$router.push(
              `complete?receipt_url=${response.data.receipt_url}`
            );
          }
        })
        .catch(error => {
          if (error.response.status === 403) {
            alert(error.response.data.message);
          }
        });
    }
  },
  computed: {
    card_number() {
      let card_num = "";
      for (let i = 0; i < this.card_num_components.length; i++) {
        card_num += this.card_num_components[i];
      }

      return card_num;
    },
    expiry() {
      let expiry = "20";
      let digits = this.expiry_components;
      expiry += `${digits[1]}${digits[0]}`;
      return expiry;
    },
    pwd_2digit() {
      let digits = this.pwd_2digit_components;

      return `${digits[0]}${digits[1]}`;
    }
  }
};
</script>

<style>
.col-far-right {
  padding-left: 7px;
}

.col-middle {
  padding-right: 7px;
  padding-left: 7px;
}

.col-far-left {
  padding-right: 7px;
}
</style>
