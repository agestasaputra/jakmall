<template>
  <div class="container-navigation">
    <div class="navigation-1">
      <div class="navigation-left">
        <div class="step" v-bind:class="{active : this.currentStep >= 1}">
          <p>1</p>
        </div>
      </div>
      <div class="navigation-middle">
        <h5>Delivery</h5>
      </div>
      <div class="navigation-right">
        <i class="fa fa-chevron-right" />
      </div>
    </div>
    <div class="navigation-2">
      <div class="navigation-left">
        <div class="step" v-bind:class="{active : this.currentStep >= 2}">
          <p>2</p>
        </div>
      </div>
      <div class="navigation-middle">
        <h5>Payment</h5>
      </div>
      <div class="navigation-right">
        <i class="fa fa-chevron-right" />
      </div>
    </div>
    <div class="navigation-3">
      <div class="navigation-left">
        <div class="step" v-bind:class="{active : this.currentStep >= 3}">
          <p>3</p>
        </div>
      </div>
      <div class="navigation-middle">
        <h5>Finish</h5>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "app-navigation",
  computed: {
    ...mapState("landing", ["steps", "currentStep"])
  }
};
</script>

<style scoped>
.container-navigation {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -100%);
  display: flex;
  flex-flow: row nowrap;
  width: 30%;
  padding: 10px;
  background: #ffebce;
  border-radius: 4em;
}

.navigation-1 {
  margin-left: 15px;
  flex: 1;
  display: flex;
  flex-flow: row nowrap;
}

.navigation-2 {
  flex: 1;
  display: flex;
  flex-flow: row nowrap;
}

.navigation-3 {
  flex: 0.7;
  display: flex;
  flex-flow: row nowrap;
}

.navigation-left {
  display: flex;
  align-items: center;
  justify-content: center;
}

.navigation-middle {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navigation-right {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
}

.fa-chevron-right {
  color: orange;
}

.step {
  display: inline-block;
  background: #f4cc9a;
  color: orange;
  border-radius: 50%;
  width: fit-content;
  height: fit-content;
  padding: 4px 10px;
}

p {
  margin: 0px;
  font-weight: bold;
}

h5 {
  margin: 0px;
  color: orange;
}

.active {
  background: orange;
  color: #fff;
}

@media screen and (max-width: 768px) {
  .container-navigation {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -125%);
    display: flex;
    flex-flow: row nowrap;
    width: fit-content;
    padding: 10px;
    background: #ffebce;
    border-radius: 4em;
  }

  .navigation-1 {
    margin-left: 2px;
    flex: 1;
    display: flex;
    flex-flow: row nowrap;
  }
}

@media screen and (max-width: 480px) {
  .container-navigation {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -125%);
    display: flex;
    flex-flow: row nowrap;
    width: fit-content;
    padding: 10px;
    background: #ffebce;
    border-radius: 4em;
  }

  .navigation-1 {
    margin-left: 4px;
    flex: 1;
    display: flex;
    flex-flow: row nowrap;
  }

  .step {
    display: inline-block;
    background: #f4cc9a;
    color: orange;
    border-radius: 50%;
    width: fit-content;
    height: fit-content;
    padding: 0px 6px;
  }

  p {
    font-size: 11px;
  }

  h5 {
    font-size: 11px;
  }

  .fa-chevron-right {
    font-size: 11px;
  }
}
</style>