const landing = {
  namespaced: true,
  state: {
    deliveryDetails: {
      form: {
        email: "",
        dropshipperName: "",
        phone: "",
        dropshipperPhone: "",
        address: ""
      }
    },
    shipment: "",
    paymentMethod: "",
    summary: {
      itemPurchased: 10,
      costOfGoods: 0,
      dropshippingFee: 0,
      deliveryFee: 0,
      total: 0,
      deliveryEstimation: "6 hours",
      deliveryProvider: "6 SiCepat",
      paymentMethod: "Ovo",
      buttonActive: {
        deliveryDetails: false,
        payment: false
      },
      buttonHide: {
        deliveryDetails: false,
        payment: true
      }
    }
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
      if (state.shipment && state.paymentMethod) {
        return "active";
      } else {
        return "disabled";
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
    SET_BUTTON_DELIVERY_DETAILS_HIDE(state, payload) {
      state.deliveryDetails.form = {
        email: "",
        dropshipperName: "",
        phone: "",
        dropshipperPhone: "",
        address: ""
      };
      state.summary.buttonHide = payload;
    },
    SET_BUTTON_PAYMENT_HIDE(state, payload) {
      state.deliveryDetails.form = {
        email: "",
        dropshipperName: "",
        phone: "",
        dropshipperPhone: "",
        address: ""
      };
      state.summary.buttonHide = payload;
    }
  },
  actions: {}
};

export default landing;
