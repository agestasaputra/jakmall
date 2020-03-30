<template>
  <div class="container-input-text">
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
  props: ["dataProps"]
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

.fa-check {
  color: #77ef83;
}
</style>
