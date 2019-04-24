<template>
  <div>
    <div class="title">
      <slot name="title"></slot>
      <span>
        <slot name="subtitle">
          <h3>The subtitle</h3>
        </slot>
      </span>
    </div>
    <hr>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    quote: String
  }
};
</script>

<style scoped>
div {
  border: 1px solid #ccc;
  box-shadow: 1px 1px 2px #000;
  padding: 30px;
  margin: 30px auto;
  text-align: center;
}
h2 {
  color: red;
}
.title {
  font-style: italic;
}
</style>