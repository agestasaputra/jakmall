<template>
  <Fragment>
    <p>Payment method</p>
    <h4>{{paymentMethod !== null ? paymentMethodName() : null}}</h4>
    <hr v-show="paymentMethod !== null ? true : false" />
  </Fragment>
</template>

<script>
import { mapState } from "vuex";
import { Fragment } from "vue-fragment";

export default {
  name: "app-payment-method",
  components: {
    Fragment
  },
  computed: {
    ...mapState("landing", ["paymentMethod", "payments"])
  },
  methods: {
    paymentMethodName() {
      return this.payments[this.paymentMethod].name;
    },
    paymentMethodPrice() {
      return this.payments[this.paymentMethod].price;
    }
  }
};
</script>

<style>
h4 {
  color: #77ef83;
}

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