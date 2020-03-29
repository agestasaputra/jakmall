<template>
  <div class="body">
    <app-body-left
      v-bind:buttonDeliveryFlag="buttonDeliveryFlag"
      v-bind:buttonPaymentFlag="buttonPaymentFlag"
    />
    <app-body-right
      v-bind:buttonDeliveryFlag="buttonDeliveryFlag"
      v-bind:buttonPaymentFlag="buttonPaymentFlag"
    />
  </div>
</template>

<script>
import AppBodyLeft from "./sections/body-left";
import AppBodyRight from "./sections/body-right";
import { mapState } from "vuex";
import { EventBus } from "@/event-bus";

export default {
  name: "app-body",
  data() {
    return {
      buttonDeliveryFlag: true,
      buttonPaymentFlag: false
    };
  },
  created() {
    EventBus.$on("buttonBackHandler", () => {
      console.log("buttonBackHandler #1");
      localStorage.removeItem("deliveryDetails");
      localStorage.removeItem("shipmentMethod");
      localStorage.removeItem("paymentMethod");
      localStorage.removeItem("dropshipper");
      this.buttonDeliveryFlag = true;
      this.buttonPaymentFlag = false;
      return;
    });
    EventBus.$on("buttonFlagHandler", type => {
      console.log("buttonFlagHandler #1");
      console.log("cek type:", type);
      if (type === "delivery-details") {
        this.buttonDeliveryFlag = false;
        this.buttonPaymentFlag = true;
        localStorage.setItem(
          "deliveryDetails",
          JSON.stringify(this.deliveryDetails.form)
        );
        this.$store.commit("landing/SET_CURRENT_STEP", 2);
        return;
      } else if (type === "payment") {
        this.buttonPaymentFlag = false;
        localStorage.setItem("shipmentMethod", this.shipmentMethod);
        localStorage.setItem("paymentMethod", this.paymentMethod);
        this.$store.commit("landing/SET_CURRENT_STEP", 3);
        return;
      } else {
        console.log("buttonHandler is not valid!", type);
        return null;
      }
    });
    EventBus.$on("summary-payment", item => {
      console.log("summary-payment worked");
      this.$store.commit("landing/SET_PAYMENT_METHOD", {
        id: item.id,
        balance: item.balance
      });
      return;
    });
    EventBus.$on("summary-shipment", item => {
      console.log("summary-shipment worked");
      this.$store.commit("landing/SET_SHIPMENT_METHOD", {
        id: item.id,
        price: item.price
      });
      return;
    });
  },
  computed: {
    ...mapState("landing", [
      "deliveryDetails",
      "shipmentMethod",
      "paymentMethod"
    ])
  },
  components: {
    AppBodyLeft,
    AppBodyRight
  }
};
</script>

<style scoped>
.body {
  display: flex;
  flex-flow: row nowrap;
}
</style>
