<template>
  <Fragment>
    <div v-bind:class="propsClassName">
      <button v-on:click="waw">Continue to Payment</button>
    </div>
    <!-- <div class="btn-disabled" v-else>
      <button v-on:click="func">Continue to Payment</button>
    </div> -->
    {{ func }}
  </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";

export default {
  name: "app-button",
  props: ["className", "func"],
  components: {
    Fragment
  },
  computed: {
    propsClassName() {
      return this.className;
    }
  },
  methods: {
    waw() {
      this.$store.commit("landing/SET_BUTTON_DELIVERY_DETAILS_HIDE", {
        deliveryDetails: true,
        payment: true
      });
    }
  }
};
</script>

<style scoped>
.active {
  background: orange;
  color: #fff;
  text-align: center;
  height: fit-content;
}

.disabled {
  color: #fff;
  text-align: center;
  height: fit-content;
  background: #6b727b;
}

.active button {
  background: unset;
  color: #fff;
  border: unset;
  padding: 15px 0px;
  width: 100%;
  text-align: center;
  cursor: pointer;
}

.disabled button {
  background: unset;
  color: #fff;
  border: unset;
  padding: 15px 0px;
  width: 100%;
  text-align: center;
  cursor: not-allowed;
}

.disabled button:active {
  pointer-events: none;
}
</style>
