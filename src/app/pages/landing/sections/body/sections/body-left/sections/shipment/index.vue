<template>
  <Fragment>
    <Fragment v-for="item in shipments" v-bind:key="item.id">
      <div
        class="card"
        v-on:click="cardHandler(item)"
        v-bind:class="{active : shipmentMethod === item.id}"
      >
        <div class="card-left">
          <h5 class="title">{{item.name}}</h5>
          <h5 class="price">{{item.price}}</h5>
        </div>
        <div class="card-right" v-if="shipmentMethod === item.id">
          <i class="fa fa-check" />
        </div>
      </div>
    </Fragment>
  </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import { mapState } from "vuex";
import { EventBus } from "@/event-bus";

export default {
  name: "app-shipment",
  components: {
    Fragment
  },
  computed: {
    ...mapState("landing", ["deliveryDetails", "shipments", "shipmentMethod"]),
    ...mapState("about", ["dataAbout"])
  },
  methods: {
    cardHandler(item) {
      EventBus.$emit("summary-shipment", item);
    }
    // cardHandler(item) {
    //   this.$store.commit("landing/SET_SHIPMENT_METHOD", {
    //     id: item.id,
    //     price: item.price
    //   });
    //   return;
    // }
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
.card:hover {
  /* border: 1px solid rgb(226, 133, 11); */
  border: 1px solid #3c763d;
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
