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
      },
      buttonActive: false
    },
    summary: {
      itemPurchased: 10,
      costOfGoods: 0,
      dropshippingFee: 0,
      deliveryFee: 0,
      total: 0,
      deliveryEstimation: "6 hours",
      deliveryProvider: "6 SiCepat",
      paymentMethod: "Ovo"
    }
  },
  getters: {},
  actions: {},
  mutations: {}
};

export default landing;
