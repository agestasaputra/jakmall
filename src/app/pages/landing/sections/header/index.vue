<template>
  <div class="header" v-if="currentStep < 3">
    <i class="fa fa-arrow-left" />
    <p v-on:click="buttonBackHandler" class="arrow-desc">{{newWord}}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { EventBus } from "@/event-bus";

export default {
  name: "app-header",
  data() {
    return {
      word: "back"
    };
  },
  computed: {
    ...mapState("landing", ["currentStep"]),
    newWord() {
      return this.currentStep === 1
        ? "Back to cart"
        : this.currentStep === 2 && "Back to delivery";
    }
  },
  methods: {
    buttonBackHandler() {
      EventBus.$emit("buttonBackHandler");
      return;
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
  margin-right: 5px;
}
.arrow-desc {
  cursor: pointer;
  display: inline-block;
  margin: 0px;
}
.arrow-desc:hover {
  text-decoration: underline;
  color: red;
}
</style>