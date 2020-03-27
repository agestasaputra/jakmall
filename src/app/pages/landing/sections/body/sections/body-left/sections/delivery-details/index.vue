<template>
  <Fragment>
    <!-- <InputText v-bind:dataProps="this.$store.state.landing.deliveryDetails.form" /> -->
    <!-- <InputText v-bind:dataProps="dropshipper" />
    <InputText v-bind:dataProps="phone" />
    <InputText v-bind:dataProps="dropshipperPhone" />
    <Textarea v-bind:dataProps="address" />-->
    <input type="text" placeholder="Email" v-model="deliveryDetails.form.email" />
    <input
      type="text"
      placeholder="Dropshipper name"
      v-model="deliveryDetails.form.dropshipperName"
    />
    <input type="number" placeholder="Phone number" v-model="deliveryDetails.form.phone" />
    <input
      type="number"
      placeholder="Dropshipper phone number"
      v-model="deliveryDetails.form.dropshipperPhone"
    />
    <Textarea placeholder="Alamat" v-model="deliveryDetails.form.address" />
  </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import { mapState } from "vuex";

export default {
  name: "delivery-details",
  components: {
    Fragment
  },
  computed: {
    ...mapState("landing", ["deliveryDetails"]),
    ...mapState("about", ["dataAbout"])
  }
};
</script>

<style scoped>
input {
  display: inline-block;
  height: 3vw;
  padding: 0px 10px;
  border: 1px solid rgb(232, 233, 233);
}

textarea {
  resize: none;
  height: 10vw;
  padding: 10px;
  border: 1px solid rgb(232, 233, 233);
}
</style>
