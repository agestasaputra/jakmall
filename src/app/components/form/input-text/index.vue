<template>
  <div class="container-input-text">
    <!-- <input type="text" v-model.trim="$v.data.$model" @input="setData" placeholder="name" /> -->
    <!-- <Fragment v-if="$v.data.required && $v.data.minLength ">
      <i class="fa fa-check" />
    </Fragment>
    <Fragment v-if="$v.data.$dirty && !$v.data.minLength">
      <i class="fa fa-times" />
    </Fragment>-->
    <input type="text" v-on:input="setData" placeholder="name" />
    <Fragment>
      <i class="fa fa-check" />
      <i class="fa fa-times" />
    </Fragment>
  </div>
</template>

<script>
import { Fragment } from "vue-fragment";

export default {
  name: "input-text",
  components: {
    Fragment
  },
  methods: {
    // setData(event) {
    //   console.log("cek event:", e);
    // }
  },
  props: ["dataProps"],
  created() {
    console.log("cek state on input-text:", this.dataProps);
  }
};
</script>

<style scoped>
.container-input {
  border: 1px solid black;
  padding: 10px 10px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
}

.container-input input {
  margin-right: 10px;
  border: unset;
  width: -webkit-fill-available;
}
</style>
