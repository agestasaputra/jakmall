<template>
  <Fragment>
    <Fragment v-for="item in shipments" v-bind:key="item.id">
      <div
        class="card"
        v-on:click="cardHandler(item.id)"
        v-bind:class="{active : shipmentValue === item.id}"
      >
        <div class="card-left">
          <h5 class="title">{{item.name}}</h5>
          <h5 class="price">{{item.price}}</h5>
          <h5 class="price">{{item.selected}}</h5>
        </div>
        <div class="card-right" v-if="shipmentValue === item.id">
          <i class="fa fa-check" />
        </div>
      </div>
    </Fragment>
  </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import { mapState } from "vuex";

export default {
  name: "app-shipment",
  components: {
    Fragment
  },
  computed: {
    ...mapState("landing", ["deliveryDetails", "shipments", "shipmentValue"]),
    ...mapState("about", ["dataAbout"])
  },
  methods: {
    cardHandler(type) {
      console.log("cek type:", type);
      localStorage.setItem("shipment", type);
      this.$store.commit("landing/SET_SHIPMENT", type);
      return;
    }
  },
  created() {
    if (localStorage.getItem("shipment")) {
      // const localShipment = localStorage.getItem("shipment");

      return;
    } else {
      return null;
    }
  }
};
</script>

<style scoped>
.card {
  display: flex;
  flex-flow: row nowrap;
  padding: 10px;
  border: 1px solid rgb(232, 233, 233);
  cursor: pointer;
}

.active {
  border: 1px solid #3c763d;
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
