<template>
  <div class="section-left">
    <div class="section-left-header">
      <h2 v-if="currentStep === 1">Delivery details</h2>
      <h2 v-else-if="currentStep === 2">Shipment</h2>
      <div v-if="currentStep === 1" class="section-checkbox">
        <input type="checkbox" v-model="dropshipper" v-on:change="dropshipperValidation" />
        <p class="text">Send as dropshipper</p>
      </div>
    </div>
    <div v-if="currentStep === 1" class="container-delivery-details">
      <app-delivery-details />
    </div>
    <Fragment v-else-if="currentStep === 2">
      <div class="container-shipment">
        <app-shipment />
      </div>
      <h2>Payment</h2>
      <div class="container-payment">
        <app-payment />
      </div>
    </Fragment>
    <div v-if="currentStep === 3" class="container-thank-you">
      <app-thank-you />
    </div>
    <div v-else />
  </div>
</template>

<script>
import AppDeliveryDetails from "./sections/delivery-details";
import AppShipment from "./sections/shipment";
import AppPayment from "./sections/payment";
import AppThankYou from "./sections/thank-you";
import { mapState } from "vuex";
import { Fragment } from "vue-fragment";

export default {
  name: "app-body-left",
  data() {
    return {
      dropshipper: false
    };
  },
  components: {
    AppDeliveryDetails,
    AppShipment,
    AppPayment,
    AppThankYou,
    Fragment
  },
  computed: {
    ...mapState("landing", ["deliveryDetails", "summary", "currentStep"])
  },
  methods: {
    dropshipperValidation() {
      this.$store.commit("landing/SET_DROPSHIPPER", this.dropshipper);
      // this.$store.commit("landing/SET_DROPSHIPPER_FEE", this.dropshipper);
    }
  }
};
</script>

<style scoped>
.section-left {
  flex: 1;
  padding-right: 30px;
  text-align: left;
}

.section-left .section-left-header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}

.section-left .section-left-header .section-checkbox {
  display: flex;
  align-items: center;
}

.section-left .section-left-header .section-checkbox .text {
  margin-left: 5px;
  display: inline-block;
}

.container-delivery-details {
  display: grid;
  grid-template-columns: 1fr 0.8fr;
  grid-column-gap: 30px;
  grid-row-gap: 10px;
}

.container-shipment,
.container-payment {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
}
.container-thank-you {
  width: fit-content;
  height: 100%;
  margin: -1% auto auto auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}

h2 {
  color: orange;
}
</style>
