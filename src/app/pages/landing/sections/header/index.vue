<template>
  <div class="header">
    <i class="fa fa-arrow-left" v-on:click="buttonBackHandler" />
    {{newWord}}
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "app-header",
  data() {
    return {
      word: "back"
    };
  },
  computed: {
    ...mapState("landing", ["step"]),
    newWord() {
      return this.step === 1
        ? "Back to cart"
        : this.step === 2 && "Back to delivery";
    }
  },
  methods: {
    buttonBackHandler() {
      this.step === 1
        ? console.log("step 3 is done!")
        : this.step === 2
        ? this.$store.commit("landing/SET_STEP", 1)
        : this.step === 3
        ? this.$store.commit("landing/SET_STEP", 2)
        : console.log("step 3 is done!");
    }
  }
};
</script>

<style scoped>
.header {
  text-align: left;
  padding: 0px;
}
.fa-arrow-left {
  cursor: pointer;
  margin-right: 5px;
}
</style>