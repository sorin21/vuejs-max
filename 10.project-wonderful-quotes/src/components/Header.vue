<template>
  <div class="row">
    <div class="col-sm-12">
      <h3>Quotes added</h3>
      <div class="progress">
        <!-- if we have 5 quotes we will have 50% -->
        <div
          class="progress-bar"
          role="progressbar"
          aria-valuenow="60"
          aria-valuemin="0"
          aria-valuemax="100"
          :style="{width: (quoteCount / maxQuotes) * 100 + '%'}"
        >{{ quoteCount }} / {{ maxQuotes }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    quoteCount: Number,
    maxQuotes: Number
  }
};
</script>

<style scoped>
</style>