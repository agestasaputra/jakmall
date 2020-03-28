<template>
  <Fragment>
    <input
      type="email"
      placeholder="Email"
      v-model="email"
      v-on:input="emailValidation"
      v-bind:class="emailValidation()"
    />
    <input
      type="text"
      placeholder="Dropshipper name"
      v-model="dropshipperName"
      v-on:input="dropshipperNameValidation"
      v-bind:class="dropshipperNameValidation()"
    />
    <input
      type="text"
      placeholder="Phone number"
      v-model="phone"
      v-on:input="phoneValidation"
      v-bind:class="phoneValidation()"
      maxlength="20"
    />
    <input
      type="text"
      placeholder="Dropshipper phone number"
      v-model="dropshipperPhone"
      v-on:input="dropshipperPhoneValidation"
      v-bind:class="dropshipperPhoneValidation()"
    />
    <textarea
      placeholder="Alamat"
      v-model="address"
      v-on:input="addressValidation"
      v-bind:class="addressValidation()"
      maxlength="120"
    />
  </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";

export default {
  name: "app-delivery-details",
  data() {
    return {
      email: "",
      dropshipperName: "",
      phone: "",
      dropshipperPhone: "",
      address: ""
    };
  },
  components: {
    Fragment
  },
  methods: {
    emailValidation() {
      // eslint-disable-next-line
      let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (this.email === "") {
        return "";
      } else {
        regex.test(this.email)
          ? this.$store.commit("landing/SET_EMAIL", this.email)
          : this.$store.commit("landing/SET_EMAIL", "");
        return regex.test(this.email) ? "has-success" : "has-error";
      }
    },
    dropshipperNameValidation() {
      if (this.dropshipperName === "") {
        return "";
      } else {
        this.dropshipperName && this.dropshipperName.length > 2
          ? this.$store.commit(
              "landing/SET_DROPSHIPPER_NAME",
              this.dropshipperName
            )
          : this.$store.commit("landing/SET_DROPSHIPPER_NAME", "");
        return this.dropshipperName.length > 2 ? "has-success" : "has-error";
      }
    },
    phoneValidation() {
      // eslint-disable-next-line
      let regex = /^(^\+62\s?|^0)(\d{3,4}-?){2}\d{3,4}$/;
      // let regex = /(\+62 ((\d{3}([ -]\d{3,})([- ]\d{4,})?)|(\d+)))|(\(\d+\) \d+)|\d{3}( \d+)+|(\d+[ -]\d+)|\d+/;
      if (this.phone === "") {
        return "";
      } else {
        regex.test(this.phone)
          ? this.$store.commit("landing/SET_PHONE", this.phone)
          : this.$store.commit("landing/SET_PHONE", "");
        return this.phone === ""
          ? ""
          : regex.test(this.phone)
          ? "has-success"
          : "has-error";
      }
    },
    dropshipperPhoneValidation() {
      // eslint-disable-next-line
      let regex = /^(^\+62\s?|^0)(\d{3,4}-?){2}\d{3,4}$/;
      // let regex = /(\+62 ((\d{3}([ -]\d{3,})([- ]\d{4,})?)|(\d+)))|(\(\d+\) \d+)|\d{3}( \d+)+|(\d+[ -]\d+)|\d+/;
      if (this.dropshipperPhone === "") {
        return "";
      } else {
        regex.test(this.dropshipperPhone)
          ? this.$store.commit(
              "landing/SET_DROPSHIPPER_PHONE",
              this.dropshipperPhone
            )
          : this.$store.commit("landing/SET_DROPSHIPPER_PHONE", "");
        return this.dropshipperPhone === ""
          ? ""
          : regex.test(this.dropshipperPhone)
          ? "has-success"
          : "has-error";
      }
    },
    addressValidation() {
      if (this.address === "") {
        return "";
      } else {
        this.address && this.address.length > 2
          ? this.$store.commit("landing/SET_ADDRESS", this.address)
          : this.$store.commit("landing/SET_ADDRESS", "");
        return this.address.length > 2 ? "has-success" : "has-error";
      }
    }
  }
};
</script>

<style scoped>
input {
  display: inline-block;
  height: 3vw;
  padding: 0px 10px;
  border: 1px solid rgb(232, 233, 233);
}

.has-success {
  border: 1px solid #3c763d;
}

.has-error {
  border: 1px solid #a94442;
}

textarea {
  resize: none;
  height: 10vw;
  padding: 10px;
  border: 1px solid rgb(232, 233, 233);
}
</style>
