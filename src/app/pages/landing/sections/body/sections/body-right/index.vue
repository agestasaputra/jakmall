<template>
  <div class="section-right">
    <div class="section-right-header">
      <h2>Summary</h2>
      <p>10 items purchased</p>
    </div>
    <hr />
    <div class="section-right-body">
      <app-delivery-estimation v-if="shipmentFlag" />
      <app-payment-method v-if="paymentFlag" />
    </div>
    <div class="section-right-footer">
      <div class="section-desc">
        <h5 class="text">Cost of goods</h5>
        <h5>500,000</h5>
      </div>
      <div class="section-desc">
        <h5 class="text">Dropshipping Fee</h5>
        <h5>{{dropshipperFee}}</h5>
      </div>
      <div class="section-desc" v-show="shipmentMethod !== null ? true : false">
        <h5 class="text">
          <strong>{{shipmentMethod !== null ? shipmentMethodName() : false}}</strong> shipment
        </h5>
        <h5>{{shipmentMethod !== null ? shipmentMethodPrice() : false }}</h5>
      </div>
      <div class="section-total">
        <h2>Total</h2>
        <h2>{{totalPrice}}</h2>
      </div>
      <div v-if="buttonDeliveryFlag" v-bind:class="BUTTON_DELIVERY_DETAILS_ACTIVE">
        <button v-on:click="buttonFlagHandler('delivery-details')">Continue to Payment</button>
      </div>
      <div v-if="buttonPaymentFlag" v-bind:class="BUTTON_PAYMENT_ACTIVE">
        <button
          v-on:click="buttonFlagHandler('payment')"
        >Pay {{paymentMethod !== null ? "with " + paymentMethodName() : null}}</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import AppDeliveryEstimation from "./sections/delivery-estimation";
import AppPaymentMethod from "./sections/payment-method";
import { EventBus } from "@/event-bus";

export default {
  name: "app-body-right",
  components: {
    AppDeliveryEstimation,
    AppPaymentMethod
  },
  data() {
    return {
      paymentFlag: false,
      shipmentFlag: false
    };
  },
  props: ["buttonDeliveryFlag", "buttonPaymentFlag"],
  computed: {
    ...mapState("landing", [
      "deliveryDetails",
      "summary",
      "currentStep",
      "shipmentMethod",
      "shipments",
      "paymentMethod",
      "payments",
      "productFee",
      "dropshipper",
      "dropshipperFee",
      "shipmentFee",
      "paymentFee",
      "totalPrice"
    ]),
    ...mapGetters("landing", [
      "BUTTON_DELIVERY_DETAILS_ACTIVE",
      "BUTTON_DELIVERY_DETAILS_FUNC",
      "BUTTON_PAYMENT_ACTIVE",
      "PAYMENT_METHOD"
    ])
  },
  created() {
    EventBus.$on("summary-payment", item => {
      console.log("summary-payment worked");
      this.paymentFlag = true;
      this.$store.commit("landing/SET_PAYMENT_METHOD", {
        id: item.id,
        balance: item.balance
      });
      return;
    });
    EventBus.$on("summary-shipment", item => {
      console.log("summary-shipment worked");
      this.shipmentFlag = true;
      this.$store.commit("landing/SET_SHIPMENT_METHOD", {
        id: item.id,
        price: item.price
      });
      return;
    });
  },
  methods: {
    buttonFlagHandler(type) {
      EventBus.$emit("buttonFlagHandler", type);
    },
    shipmentMethodName() {
      return this.shipments[this.shipmentMethod].name;
    },
    shipmentMethodPrice() {
      return this.shipments[this.shipmentMethod].price;
    },
    paymentMethodName() {
      return this.payments[this.paymentMethod].name;
    },
    paymentMethodPrice() {
      return this.payments[this.paymentMethod].price;
    }
  }
};
</script>

<style scoped>
h2,
h3,
h4,
h5,
p {
  margin: 0px;
}

hr {
  margin: 15px 0px;
  border: 0.5px solid rgb(185, 185, 185);
  width: 50%;
}

.section-right {
  width: 17%;
  padding-left: 25px;
  border-left: 1px solid black;
  display: flex;
  flex-flow: column nowrap;
}

@media screen and (max-width: 480px) {
  .section-right {
    margin-top: 30px;
    width: auto;
    padding: 0px;
    border: unset;
    display: flex;
    flex-flow: column nowrap;
  }
}

.section-right-header {
  text-align: left;
}

.section-right-body {
  flex: 1;
  text-align: left;
  margin-bottom: 100px;
}

.section-right-body-empty {
  flex: 1;
  text-align: left;
  margin-bottom: 100px;
}

.section-right-footer {
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
  margin-bottom: 10px;
}

h2 {
  color: orange;
}
</style>
