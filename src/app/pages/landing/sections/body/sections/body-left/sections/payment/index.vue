<template>
  <Fragment>
    <div class="card">
      <div class="card-left">
        <h5 class="title">e-Wallet</h5>
        <h5 class="price">1,500,000 left</h5>
      </div>
      <div class="card-right">
        <i class="fa fa-check" />
      </div>
    </div>
    <div class="card">
      <div class="card-left">
        <h5 class="title">Bank Transfer</h5>
      </div>
      <div class="card-right">
        <i class="fa fa-check" />
      </div>
    </div>
    <div class="card">
      <div class="card-left">
        <h5 class="title">Virtual Account</h5>
      </div>
      <div class="card-right">
        <i class="fa fa-check" />
      </div>
    </div>
  </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import { mapState } from "vuex";

export default {
  name: "app-payment",
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
.card {
  display: flex;
  flex-flow: row nowrap;
  padding: 10px;
  border: 1px solid rgb(232, 233, 233);
}

.title {
  margin: 0px;
  font-weight: unset;
}

.price {
  margin: 0px;
}

.card .card-left {
  flex: 1;
}

.card .card-right {
  margin: 0px 5px;
  display: flex;
  align-items: center;
}
</style>
