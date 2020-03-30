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
      console.log("buttonBackHandler worked");
      if (this.currentStep === 1) {
        console.log("currentStep = 1");
        return;
      } else if (this.currentStep === 2) {
        console.log("currentStep = 2");
        this.$store.commit("landing/SET_CURRENT_STEP", 1);
        this.buttonDeliveryFlag = true;
        this.buttonPaymentFlag = false;
        return;
      } else if (this.currentStep === 3) {
        console.log("currentStep = 3");
        this.$store.commit("landing/SET_CURRENT_STEP", 2);
        this.buttonPaymentFlag = true;
        return;
      } else {
        return;
      }
    });
    EventBus.$on("buttonFlagHandler", type => {
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
      "paymentMethod",
      "currentStep"
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
