<template>
  <Fragment>
    <Fragment v-for="item in payments" v-bind:key="item.id">
      <div
        class="card"
        v-on:click="cardHandler(item)"
        v-bind:class="{active : paymentMethod === item.id}"
      >
        <div class="card-left">
          <h5 class="title">{{item.name}}</h5>
          <h5 class="price" v-if="paymentMethod === item.id">{{item.balance}} left</h5>
        </div>
        <div class="card-right" v-if="paymentMethod === item.id">
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
  name: "app-payment",
  components: {
    Fragment
  },
  computed: {
    ...mapState("landing", ["deliveryDetails", "payments", "paymentMethod"]),
    ...mapState("about", ["dataAbout"])
  },
  methods: {
    cardHandler(item) {
      EventBus.$emit("summary-payment", item);
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
.card:hover {
  border: 2px solid #77ef83;
}

.active {
  border: 2px solid #77ef83;
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

.fa-check {
  color: #77ef83;
}
</style>
