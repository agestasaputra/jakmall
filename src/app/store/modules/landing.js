const landing = {
  namespaced: true,
  state: {
    currentStep: 1,
    productFee: 5000000,
    dropshipper: false,
    dropshipperFee: 0,
    shipmentFee: 0,
    paymentFee: 0,
    totalPrice: 0,
    deliveryDetails: {
      form: {
        email: "",
        dropshipperName: "",
        phone: "",
        dropshipperPhone: "",
        address: ""
      }
    },
    shipmentMethod: null,
    shipments: [
      {
        id: 0,
        name: "GO-SEND",
        time: "today",
        price: 15000
      },
      {
        id: 1,
        name: "JNE",
        time: "2 days",
        price: 9000
      },
      {
        id: 2,
        name: "Personal Courier",
        time: "1 day",
        price: 15000
      }
    ],
    paymentMethod: null,
    payments: [
      {
        id: 0,
        name: "e-Wallet",
        balance: 1500000
      },
      {
        id: 1,
        name: "Bank Transfer",
        balance: 500000
      },
      {
        id: 2,
        name: "Virtual Account",
        balance: 1000000
      }
    ]
  },
  getters: {
    BUTTON_DELIVERY_DETAILS_ACTIVE: state => {
      if (
        state.deliveryDetails.form.email &&
        state.deliveryDetails.form.dropshipperName &&
        state.deliveryDetails.form.phone &&
        state.deliveryDetails.form.dropshipperPhone &&
        state.deliveryDetails.form.address
      ) {
        return "active";
      } else {
        return "disabled";
      }
    },
    BUTTON_PAYMENT_ACTIVE: state => {
      if (state.paymentMethod === null || state.shipmentMethod === null) {
        return "disabled";
      } else {
        return "active";
      }
    }
  },
  mutations: {
    SET_EMAIL(state, payload) {
      state.deliveryDetails.form.email = payload;
    },
    SET_DROPSHIPPER_NAME(state, payload) {
      state.deliveryDetails.form.dropshipperName = payload;
    },
    SET_PHONE(state, payload) {
      state.deliveryDetails.form.phone = payload;
    },
    SET_DROPSHIPPER_PHONE(state, payload) {
      state.deliveryDetails.form.dropshipperPhone = payload;
    },
    SET_ADDRESS(state, payload) {
      state.deliveryDetails.form.address = payload;
    },
    SET_CURRENT_STEP(state, payload) {
      state.currentStep = payload;
    },
    RESET_ALL(state) {
      state.paymentMethod = null;
      state.paymentFee = 0;
      state.shipmentMethod = null;
      state.shipmentFee = 0;
      state.dropshipper = false;
      // state.currentStep = 1;
    },
    SET_SHIPMENT_METHOD(state, payload) {
      if (state.shipmentMethod !== payload.id) {
        state.shipmentFee = 0;
        state.shipmentMethod = payload.id;
        state.shipmentFee = state.shipmentFee + payload.price;
        state.totalPrice =
          state.productFee +
          state.shipmentFee +
          state.paymentFee +
          state.dropshipperFee;
        return;
      } else {
        return;
      }
    },
    SET_PAYMENT_METHOD(state, payload) {
      if (state.paymentMethod !== payload.id) {
        state.paymentFee = 0;
        state.paymentMethod = payload.id;
        state.paymentFee = state.paymentFee + payload.balance;
        state.totalPrice =
          state.productFee +
          state.paymentFee +
          state.shipmentFee +
          state.dropshipperFee;
        return;
      } else {
        return;
      }
    },
    SET_PRODUCT_FEE(state) {
      state.totalPrice =
        state.productFee +
        state.paymentFee +
        state.shipmentFee +
        state.dropshipperFee;
      return;
    },
    SET_DROPSHIPPER(state, payload) {
      if (payload) {
        state.dropshipperFee = 0;
        state.dropshipperFee = 9000;
        state.dropshipper = payload;
        state.totalPrice =
          state.dropshipperFee +
          state.productFee +
          state.paymentFee +
          state.shipmentFee;
        return;
      } else {
        state.dropshipperFee = 0;
        state.dropshipper = payload;
        state.totalPrice =
          state.dropshipperFee +
          state.productFee +
          state.paymentFee +
          state.shipmentFee;
        return;
      }
    }
  },
  actions: {}
};

export default landing;
