<template>
  <Fragment>
    <div class="btn-active" v-if="className">
      <button v-on:click="func">Continue to Payment</button>
    </div>
    <div class="btn-disabled" v-else>
      <button v-on:click="func">Continue to Payment</button>
    </div>
  </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";

export default {
  name: "app-button",
  props: ["className", "func"],
  components: {
    Fragment
  }
};
</script>

<style scoped>
.btn-active {
  background: orange;
  color: #fff;
  text-align: center;
  height: fit-content;
}

.btn-disabled {
  color: #fff;
  text-align: center;
  height: fit-content;
  background: #6b727b;
}

.btn-active button {
  background: unset;
  color: #fff;
  border: unset;
  padding: 15px 0px;
  width: 100%;
  text-align: center;
  cursor: pointer;
}

.btn-disabled button {
  background: unset;
  color: #fff;
  border: unset;
  padding: 15px 0px;
  width: 100%;
  text-align: center;
  cursor: not-allowed;
}

.btn-disabled button:active {
  pointer-events: none;
}
</style>