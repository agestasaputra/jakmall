<template>
  <div class="body">
    <BodyLeft />
    <BodyRight />
  </div>
</template>

<script>
import BodyLeft from "./sections/body-left";
import BodyRight from "./sections/body-right";

export default {
  name: "app-body",
  components: {
    BodyLeft,
    BodyRight
  }
};
</script>

<style scoped>
.body {
  display: flex;
  flex-flow: row nowrap;
}
</style>