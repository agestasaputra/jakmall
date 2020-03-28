<template>
  <div class="section-left">
    <div class="section-left-header">
      <h3 v-if="!summary.buttonHide.deliveryDetails">Delivery details</h3>
      <h3 v-else>Shipment</h3>
      <div v-if="!summary.buttonHide.deliveryDetails" class="section-checkbox">
        <input type="checkbox" />
        <p class="text">Send as dropshipper</p>
      </div>
    </div>
    <div
      v-if="!summary.buttonHide.deliveryDetails"
      class="container-delivery-details"
    >
      <app-delivery-details />
    </div>
    <Fragment v-else>
      <div class="container-shipment">
        <app-shipment />
      </div>
      <div class="container-payment">
        <app-payment />
      </div>
    </Fragment>
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
    ...mapState("landing", ["deliveryDetails", "summary"])
  }
};
</script>

<style scoped>
.section-left {
  flex: 1;
  padding-right: 30px;
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
