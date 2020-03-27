<template>
  <div class="section-left">
    <div class="section-left-header">
      <h3>Delivery details</h3>
      <div class="section-checkbox">
        <input type="checkbox" />
        <p class="text">Send as dropshipper</p>
      </div>
    </div>
    <div class="section-left-body">
      <DeliveryDetails />
    </div>
  </div>
</template>

<script>
import DeliveryDetails from "./sections/delivery-details";

export default {
  name: "body-left",
  components: {
    DeliveryDetails
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

.section-left-body {
  display: grid;
  grid-template-columns: 1fr 0.8fr;
  grid-column-gap: 30px;
  grid-row-gap: 10px;
}
</style>
