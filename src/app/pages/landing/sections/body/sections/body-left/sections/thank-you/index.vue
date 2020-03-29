<template>
  <Fragment>
    <div class="title">
      <h1>Thank you</h1>
    </div>
    <div class="text-order-id">
      <h3>Order ID: XXKYB</h3>
    </div>
    <div class="text-desc">
      <p>Your order will be delivered today with {{shipments[shipmentMethod].name}}</p>
    </div>
    <div class="text-navigation">
      <i class="fa fa-arrow-left" />
      <h4 class="text-navigation-desc" v-on:click="goToHompageHandler">Go to hompage</h4>
      <!-- <h4 class="text-navigation-desc" v-on:click="buttonBackHandler">Go to hompage</h4> -->
    </div>
  </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import { mapState } from "vuex";
import { EventBus } from "@/event-bus";

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
      EventBus.$emit("buttonBackHandler", "thank-you");
      return;
    },
    buttonBackHandler() {
      console.log("buttonBackHandler invoked!");
      this.$store.commit("landing/SET_CURRENT_STEP", 1);
      this.$store.commit("landing/SET_SHIPMENT_METHOD", { id: null, price: 0 });
      this.$store.commit("landing/SET_PAYMENT_METHOD", {
        id: null,
        balance: 0
      });
      this.$store.commit("landing/SET_DROPSHIPPER", false);
      localStorage.removeItem("deliveryDetails");
      localStorage.removeItem("shipmentMethod");
      localStorage.removeItem("paymentMethod");
      localStorage.removeItem("dropshipper");
      return;
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
