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
      <!-- <app-button
        v-bind:className="BUTTON_DELIVERY_DETAILS_ACTIVE"
        v-bind:func="BUTTON_DELIVERY_DETAILS_FUNC"
        >Continue to Payment</app-button
      >-->
      <div v-if="step === 1" v-bind:class="BUTTON_DELIVERY_DETAILS_ACTIVE">
        <button v-on:click="buttonHandler('delivery-details')">Continue to Payment</button>
      </div>
      <div v-else-if="step === 2" v-bind:class="BUTTON_PAYMENT_ACTIVE">
        <button v-on:click="buttonHandler('payment')">Pay</button>
      </div>
      <div v-else />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "app-body-right",
  computed: {
    ...mapState("landing", ["deliveryDetails", "summary", "step"]),
    ...mapGetters("landing", [
      "BUTTON_DELIVERY_DETAILS_ACTIVE",
      "BUTTON_DELIVERY_DETAILS_FUNC",
      "BUTTON_PAYMENT_ACTIVE"
    ])
  },
  methods: {
    buttonHandler(type) {
      if (type === "delivery-details") {
        console.log("type: deliveryDetails");
        localStorage.setItem(
          "deliveryDetails",
          JSON.stringify(this.deliveryDetails.form)
        );
        this.$store.commit("landing/SET_STEP", 2);
        return;
      } else if (type === "payment") {
        // localStorage.setItem("deliveryDetails", JSON.stringify(deliveryDetails.form) )
        this.$store.commit("landing/SET_STEP", 3);
        return;
      } else {
        console.log("buttonHandler is not valid!", type);
        return null;
      }
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

.section-button {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin: 15px 0px;
}

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

.text {
  font-weight: unset;
}
</style>
