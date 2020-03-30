<template>
  <Fragment>
    <div class="title">
      <h1>Thank you</h1>
    </div>
    <div class="text-order-id">
      <!-- <h3>Order ID: XXKYB</h3> -->
      <h3>Order ID: {{generateCode(5)}}</h3>
    </div>
    <div class="text-desc">
      <p>Your order will be delivered today with {{shipments[shipmentMethod].name}}</p>
    </div>
    <div class="text-navigation">
      <i class="fa fa-arrow-left" />
      <h4 class="text-navigation-desc" v-on:click="goToHompageHandler">Go to hompage</h4>
    </div>
  </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import { mapState } from "vuex";
// import { EventBus } from "@/event-bus";

export default {
  name: "app-thank-you",
  components: {
    Fragment
  },
  computed: {
    ...mapState("landing", ["deliveryDetails", "shipments", "shipmentMethod"]),
    ...mapState("about", ["dataAbout"])
  },
  methods: {
    goToHompageHandler() {
      location.reload();
      localStorage.removeItem("deliveryDetails");
      return;
    },
    generateCode(length) {
      var result = "";
      var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0";
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    }
  }
};
</script>
<style scoped>
h3,
h1,
p {
  margin: 0px;
}

.title {
  margin-bottom: 15px;
}
.text-order-id {
  margin-bottom: 5px;
}
.text-desc {
  margin-bottom: 50px;
}

.text-navigation-desc {
  margin-left: 10px;
  display: inline-block;
  cursor: pointer;
}

.text-navigation-desc:hover {
  text-decoration: underline;
  color: red;
}
</style>
