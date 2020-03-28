<template>
  <div class="section-left">
    <div class="section-left-header">
      <h3 v-if="step === 1">Delivery details</h3>
      <h3 v-else-if="step === 2">Shipment</h3>
      <div v-if="step === 1" class="section-checkbox">
        <input type="checkbox" />
        <p class="text">Send as dropshipper</p>
      </div>
    </div>
    <div v-if="step === 1" class="container-delivery-details">
      <app-delivery-details />
    </div>
    <Fragment v-else-if="step === 2">
      <div class="container-shipment">
        <app-shipment />
      </div>
      <h3>Payment</h3>
      <div class="container-payment">
        <app-payment />
      </div>
    </Fragment>
    <div v-else />
  </div>
</template>

<script>
import AppDeliveryDetails from "./sections/delivery-details";
import AppShipment from "./sections/shipment";
import AppPayment from "./sections/payment";
import { mapState } from "vuex";
import { Fragment } from "vue-fragment";

export default {
  name: "app-body-left",
  components: {
    AppDeliveryDetails,
    AppShipment,
    AppPayment,
    Fragment
  },
  computed: {
    ...mapState("landing", ["deliveryDetails", "summary", "step"])
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

.section-left .section-left-header .section-checkbox .text {
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
</style>
