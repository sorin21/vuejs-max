<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="selectedComponent = 'appQuote'">Qoute</button>
        <button @click="selectedComponent = 'appAuthor'">Author</button>
        <button @click="selectedComponent = 'appNew'">New</button>
        <hr>
        {{ selectedComponent }}
        <keep-alive>
          <component :is="selectedComponent">Default Content</component>
        </keep-alive>
        <!-- <appQuote>
          <h1 slot="title">VueJS Quotes</h1>
          <h2>The Quote</h2>
          <p>{{ quote }}</p>
        </appQuote>-->
      </div>
    </div>
  </div>
</template>

<script>
import Quote from "./components/Quote";
import Author from "./components/Author";
import New from "./components/New";

export default {
  data() {
    return {
      quote: "A wonderful Quote",
      selectedComponent: "appQuote"
    };
  },
  components: {
    appQuote: Quote,
    appAuthor: Author,
    appNew: New
  }
};
</script>

<style>
h1 {
  color: blue;
}
</style>
