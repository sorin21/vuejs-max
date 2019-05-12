<template>
  <div>
    <p>Counter is: {{ counter }}</p>
    <p>Counter clicks: {{ clicks }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { DOUBLE_COUNTER, CLICK_COUNTER } from "../store/types.js";

export default {
  // props: ['counter']
  computed: {
    ...mapGetters({
      counter: DOUBLE_COUNTER,
      clicks: CLICK_COUNTER
    })
  }
};
</script>