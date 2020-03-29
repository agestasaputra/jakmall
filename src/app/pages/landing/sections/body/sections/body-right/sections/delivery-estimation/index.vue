<template>
  <Fragment>
    <p>Delivery estimation</p>
    <h4>today by {{shipmentMethod !== null ? shipmentMethodName() : null}}</h4>
    <hr v-show="shipmentMethod !== null ? true : false" />
  </Fragment>
</template>

<script>
import { mapState } from "vuex";
import { Fragment } from "vue-fragment";

export default {
  name: "app-delivery-estimation",
  components: {
    Fragment
  },
  computed: {
    ...mapState("landing", ["paymentMethod", "shipmentMethod", "shipments"])
  },
  methods: {
    shipmentMethodName() {
      return this.shipments[this.shipmentMethod].name;
    },
    shipmentMethodPrice() {
      return this.shipments[this.shipmentMethod].price;
    }
  }
};
</script>

<style>
h4,
p {
  margin: 0px;
}

hr {
  margin: 15px 0px;
  border: 0.5px solid rgb(185, 185, 185);
  width: 50%;
}
</style>