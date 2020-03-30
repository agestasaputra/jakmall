<template>
  <div class="container-landing">
    <app-navigation />
    <app-header />
    <app-body />
  </div>
</template>

<script>
import AppNavigation from "./sections/navigation";
import AppHeader from "./sections/header";
import AppBody from "./sections/body";
// import { required, minLength, between } from "vuelidate/lib/validators";

export default {
  name: "landing",
  components: {
    AppHeader,
    AppBody,
    AppNavigation
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-landing {
  margin: 50px;
  padding: 30px;
  background: #fff;
  border-radius: 0.5em;
}
</style>
