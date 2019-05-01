<template>
  <div class="container">
    <Header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></Header>
    <NewQuote @newQuote="newQuote"></NewQuote>
    <QuoteGrid :quotes="quotes" @quoteDeleted="deleteQuoteHere"></QuoteGrid>
    <div class="row">
      <div class="col-sm-12" text-center>
        <div class="alert alert-info">Info: click on a quote to delete it</div>
      </div>
    </div>
  </div>
</template>

<script>
import QuoteGrid from "./components/QuoteGrid";
import NewQuote from "./components/NewQuote";
import Header from "./components/Header";
export default {
  data() {
    return {
      quotes: ["Just a simple quote to see something"],
      maxQuotes: 10
    };
  },
  components: {
    QuoteGrid,
    NewQuote,
    Header
  },
  methods: {
    newQuote(quote) {
      if (this.quotes.length >= this.maxQuotes) {
        // alert("Delete a quote to add another");
        return;
      } else {
        this.quotes.push(quote);
      }
    },
    deleteQuoteHere(index) {
      // start splice from index and delete 1 element
      this.quotes.splice(index, 1);
    }
  }
};
</script>

<style>
</style>
