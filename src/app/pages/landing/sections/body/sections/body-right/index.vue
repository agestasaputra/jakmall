<template>
  <div class="section-right">
    <div class="section-right-header">
      <h3>Summary</h3>
      <p>10 items purchased</p>
    </div>
    <div class="section-right-body">
      <div class="section-desc">
        <h5 class="text">Cost of goods</h5>
        <h5>500,000</h5>
      </div>
      <div class="section-desc">
        <h5 class="text">Dropshipping free</h5>
        <h5>6,000</h5>
      </div>
      <div class="section-total">
        <h3>Total</h3>
        <h3>506,000</h3>
      </div>
      <app-button
        v-bind:className="deliveryDetails.buttonActive"
        v-bind:func="customFunctionHandler"
      >Continue to Payment</app-button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AppButton from "@/app/components/button";

export default {
  name: "body-right",
  components: {
    AppButton
  },
  computed: {
    ...mapState("landing", ["deliveryDetails"])
  },
  methods: {
    customFunctionHandler() {
      console.log("customFunctionHandler invoked!");
      return;
    }
  }
};
</script>

<style scoped>
h3,
h5,
p {
  margin: 0px;
}

.section-right {
  width: 17%;
  padding-left: 30px;
  border-left: 1px solid black;
  display: flex;
  flex-flow: column nowrap;
}

.section-right-header {
  flex: 1;
  text-align: left;
}

.section-desc {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}

.section-total {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin: 15px 0px;
}

.text {
  font-weight: unset;
}
</style>