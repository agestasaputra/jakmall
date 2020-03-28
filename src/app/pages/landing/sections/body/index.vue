<template>
  <div class="body">
    <app-body-left />
    <app-body-right />
  </div>
</template>

<script>
import AppBodyLeft from "./sections/body-left";
import AppBodyRight from "./sections/body-right";

export default {
  name: "app-body",
  components: {
    AppBodyLeft,
    AppBodyRight
  }
};
</script>

<style scoped>
.body {
  display: flex;
  flex-flow: row nowrap;
}
</style>
