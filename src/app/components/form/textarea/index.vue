<template>
  <div class="container-textarea">
    <textarea placeholder="name" rows="5" />
    <i class="fa fa-check" />
    <i class="fa fa-times" />
  </div>
</template>

<script>
export default {
  name: "textarea"
};
</script>

<style scoped>
.container-textarea {
  border: 1px solid black;
  padding: 10px 10px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
}

.container-textarea textarea {
  margin-right: 10px;
  border: unset;
  width: -webkit-fill-available;
  resize: none;
}
</style>