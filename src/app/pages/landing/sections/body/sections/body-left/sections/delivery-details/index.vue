<template>
  <Fragment>
    <div class="container-input" v-bind:class="emailValidation()">
      <input type="email" placeholder="Email" v-model="email" v-on:input="emailValidation" />
      <div class="container-icon">
        <i v-if="emailTrue" class="fa fa-check" />
        <i v-else-if="emailFalse" class="fa fa-times" />
      </div>
    </div>
    <div class="container-input" v-bind:class="dropshipperNameValidation()">
      <input
        type="text"
        placeholder="Dropshipper name"
        v-model="dropshipperName"
        v-on:input="dropshipperNameValidation"
      />
      <div class="container-icon">
        <i v-if="dropshipperNameTrue" class="fa fa-check" />
        <i v-else-if="dropshipperNameFalse" class="fa fa-times" />
      </div>
    </div>
    <div class="container-input" v-bind:class="phoneValidation()">
      <input
        type="text"
        placeholder="Phone number"
        v-model="phone"
        v-on:input="phoneValidation"
        maxlength="20"
      />
      <div class="container-icon">
        <i v-if="phoneTrue" class="fa fa-check" />
        <i v-else-if="phoneFalse" class="fa fa-times" />
      </div>
    </div>
    <div class="container-input" v-bind:class="dropshipperPhoneValidation()">
      <input
        type="text"
        placeholder="Dropshipper phone number"
        v-model="dropshipperPhone"
        v-on:input="dropshipperPhoneValidation"
      />
      <div class="container-icon">
        <i v-if="dropshipperPhoneTrue" class="fa fa-check" />
        <i v-else-if="dropshipperPhoneFalse" class="fa fa-times" />
      </div>
    </div>
    <div class="container-input-textarea" v-bind:class="addressValidation()">
      <textarea
        placeholder="Alamat"
        v-model="address"
        v-on:input="addressValidation"
        maxlength="120"
      />
      <div class="container-icon">
        <i v-if="addressTrue" class="fa fa-check" />
        <i v-else-if="addressFalse" class="fa fa-times" />
      </div>
    </div>
  </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import { mapState } from "vuex";

export default {
  name: "app-delivery-details",
  data() {
    return {
      email: "",
      emailTrue: false,
      emailFalse: false,
      dropshipperName: "",
      dropshipperNameTrue: false,
      dropshipperNameFalse: false,
      phone: "",
      phoneTrue: false,
      phoneFalse: false,
      dropshipperPhone: "",
      dropshipperPhoneTrue: false,
      dropshipperPhoneFalse: false,
      address: "",
      addressTrue: false,
      addressFalse: false
    };
  },
  components: {
    Fragment
  },
  computed: {
    ...mapState("landing", ["deliveryDetails"])
  },
  created() {
    if (localStorage.getItem("deliveryDetails")) {
      console.log("masuk localStorage");
      this.$store.commit("landing/SET_PRODUCT_FEE");
      const tmp = JSON.parse(localStorage.getItem("deliveryDetails"));
      this.oldTmp = tmp;
      this.email = tmp.email;
      this.dropshipperName = tmp.dropshipperName;
      this.phone = tmp.phone;
      this.dropshipperPhone = tmp.dropshipperPhone;
      this.address = tmp.address;
      return;
    } else if (localStorage.getItem("shipment")) {
      // const tmp = JSON.parse(localStorage.getItem("shipment"));
      console.log("ga masuk localStorage");
      this.$store.commit("landing/SET_PRODUCT_FEE");
      return;
    } else {
      console.log("ga masuk localStorage");
      this.$store.commit("landing/SET_PRODUCT_FEE");
      return;
    }
  },
  methods: {
    emailValidation() {
      // eslint-disable-next-line
      let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (this.email === "") {
        this.emailFalse = false;
        return "";
      } else {
        if (regex.test(this.email)) {
          this.$store.commit("landing/SET_EMAIL", this.email);
          this.emailTrue = true;
          return regex.test(this.email) ? "has-success" : "has-error";
        } else {
          this.$store.commit("landing/SET_EMAIL", "");
          this.emailTrue = false;
          this.emailFalse = true;
          return regex.test(this.email) ? "has-success" : "has-error";
        }
      }
    },
    dropshipperNameValidation() {
      if (this.dropshipperName === "") {
        this.dropshipperNameFalse = false;
        return "";
      } else {
        if (this.dropshipperName && this.dropshipperName.length > 2) {
          this.$store.commit(
            "landing/SET_DROPSHIPPER_NAME",
            this.dropshipperName
          );
          this.dropshipperNameTrue = true;
          return this.dropshipperName.length > 2 ? "has-success" : "has-error";
        } else {
          this.$store.commit("landing/SET_DROPSHIPPER_NAME", "");
          this.dropshipperNameTrue = false;
          this.dropshipperNameFalse = true;
          return this.dropshipperName.length > 2 ? "has-success" : "has-error";
        }
      }
    },
    phoneValidation() {
      // eslint-disable-next-line
      let regex = /^(^\+62\s?|^0)(\d{3,4}-?){2}\d{3,4}$/;
      // let regex = /(\+62 ((\d{3}([ -]\d{3,})([- ]\d{4,})?)|(\d+)))|(\(\d+\) \d+)|\d{3}( \d+)+|(\d+[ -]\d+)|\d+/;
      if (this.phone === "") {
        this.phoneFalse = false;
        return "";
      } else {
        if (regex.test(this.phone)) {
          this.$store.commit("landing/SET_PHONE", this.phone);
          this.phoneTrue = true;
          return this.phone === ""
            ? ""
            : regex.test(this.phone)
            ? "has-success"
            : "has-error";
        } else {
          this.$store.commit("landing/SET_PHONE", "");
          this.phoneTrue = false;
          this.phoneFalse = true;
          return this.phone === ""
            ? ""
            : regex.test(this.phone)
            ? "has-success"
            : "has-error";
        }
      }
    },
    dropshipperPhoneValidation() {
      // eslint-disable-next-line
      let regex = /^(^\+62\s?|^0)(\d{3,4}-?){2}\d{3,4}$/;
      // let regex = /(\+62 ((\d{3}([ -]\d{3,})([- ]\d{4,})?)|(\d+)))|(\(\d+\) \d+)|\d{3}( \d+)+|(\d+[ -]\d+)|\d+/;
      if (this.dropshipperPhone === "") {
        this.dropshipperPhoneFalse = false;
        return "";
      } else {
        if (regex.test(this.dropshipperPhone)) {
          this.$store.commit(
            "landing/SET_DROPSHIPPER_PHONE",
            this.dropshipperPhone
          );
          this.dropshipperPhoneTrue = true;
          return this.dropshipperPhone === ""
            ? ""
            : regex.test(this.dropshipperPhone)
            ? "has-success"
            : "has-error";
        } else {
          this.$store.commit("landing/SET_DROPSHIPPER_PHONE", "");
          this.dropshipperPhoneTrue = false;
          this.dropshipperPhoneFalse = true;
          return this.dropshipperPhone === ""
            ? ""
            : regex.test(this.dropshipperPhone)
            ? "has-success"
            : "has-error";
        }
      }
    },
    addressValidation() {
      if (this.address === "") {
        this.addressFalse = false;
        return "";
      } else {
        if (this.address && this.address.length > 2) {
          this.$store.commit("landing/SET_ADDRESS", this.address);
          this.addressTrue = true;
          return this.address.length > 2 ? "has-success" : "has-error";
        } else {
          this.$store.commit("landing/SET_ADDRESS", "");
          this.addressTrue = false;
          this.addressFalse = true;
          return this.address.length > 2 ? "has-success" : "has-error";
        }
      }
    }
  }
};
</script>

<style scoped>
.container-input {
  display: inline-block;
  border: 1px solid rgb(232, 233, 233);
  height: 3vw;
  display: flex;
  flex-flow: row nowrap;
}
.container-input-textarea {
  display: inline-block;
  border: 1px solid rgb(232, 233, 233);
  display: flex;
  flex-flow: row nowrap;
}

input {
  flex: 1;
  padding: 0px 10px;
  margin: 0px;
  border: unset;
}

.container-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 15px;
}

.has-success {
  border: 2px solid #77ef83;
}

.has-error {
  border: 2px solid #a94442;
}

textarea {
  resize: none;
  height: 10vw;
  flex: 1;
  padding: 10px;
  margin: 0px;
  border: unset;
}

.fa-check {
  color: #77ef83;
}

.fa-times {
  color: red;
}
</style>
