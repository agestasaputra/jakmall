const landing = {
  namespaced: true,
  state: {
    step: 2,
    deliveryDetails: {
      form: {
        email: "",
        dropshipperName: "",
        phone: "",
        dropshipperPhone: "",
        address: ""
      }
    },
    shipmentValue: "",
    shipments: [
      {
        id: 0,
        name: "GO-SEND",
        price: 15000,
        selected: false
      },
      {
        id: 1,
        name: "JNE",
        price: 9000,
        selected: false
      },
      {
        id: 2,
        name: "Personal Courier",
        price: 15000,
        selected: false
      }
    ],
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
      }
    }
  },
  getters: {
    SELECTED_PAYMENT: state => {
      let tmp = state.shipments.filter(item => item.selected);
      console.log("cek tmp on SELECTED_PAYMENT", tmp);

      return;
    },
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
      if (state.paymentMethod) {
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
    SET_STEP(state, payload) {
      state.step = payload;
    },
    SET_SHIPMENT(state, payload) {
      // const tmp = state.shipments.filter(item => item.id !== payload);
      // tmp.map(item => !item.selected);
      // tmp.push({
      //   ...state.shipments[payload],
      //   selected: true
      // });
      // console.log("cek tmp:", tmp);
      // Object.assign(state.shipments, tmp);

      // Object.assign(state.shipments[payload], {
      //   ...state.shipments[payload],
      //   selected: true
      // });
      state.shipmentValue = payload;
    }
  },
  actions: {}
};

export default landing;
