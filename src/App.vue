<template>
  <div id="app">
    <h1>CTO Checklist</h1>
    <p>
      I there, I am <a href="https://www.linkedin.com/in/arnaud-aubry-74928730/" target="_blank">Arnaud Aubry</a>. 
      During my life as a CTO I found it difficult to be always on top of important topics.
      This is why I built a CTO checklist. It is here to help CTO's handling the right thing at the right time. 
      It is far from exhaustive as each company has its own struggles. If you want to contribute go and check the github project. 
      The worldwide CTO community would thank you ;)
    </p>
    <div class="border"></div>
    <div class="filter">
      <Segmented
        v-model="filter"
        :items="['seed', 'serie A', 'post serie A']"
      />
    </div>
    <div class="spacer"></div>
    <div v-for="(key, x) in Object.keys(this.content)" :key="x">
      <h2>{{ key.toUpperCase() }}</h2>
      <Cell
        v-for="(item, y) in filtered(key)"
        v-model="item.value"
        :key="y"
        :tags="item.tags"
        :stage="item.stage"
        :title="item.title"
        :description="item.description"
      />
    </div>
    <div class="border"></div>
    <h3>Want to contribute ?</h3>
    <p>Go and check the github project to add your items to the list.</p>
  </div>
</template>

<script>
import Cell from "./components/Cell.vue";
import Segmented from "./components/Segmented.vue";
export default {
  components: { Cell, Segmented },
  name: "App",
  data() {
    return {
      filter: 0,
      content: Object.assign({}, this.$content.data()),
    };
  },
  methods: {
    filtered(group) {
      let stage = ["seed", "serie A", "post serie A"].slice(0, this.filter + 1);
      return this.content[group].filter((item) => stage.includes(item.stage));
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");

html {
  overflow-y: scroll;
}
html,
body {
  margin: 0;
  padding: 0;
}
h2 {
  font-size: 18px;
  font-weight: lighter;
  padding: 0 12px 0 12px;
}
button {
  height: 44px;
  padding: 0 24px 0 24px;
  color: white;
  outline: none;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  background-color: #2c3e50;
}
#app {
  margin: 44px auto 44px auto;
  width: 100%;
  max-width: 800px;
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.filter {
  width: 100%;
  height: 44px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.spacer {
  height: 24px;
}
.border {
  height: 24px;
  border-top: 1px solid #efefef;
}
</style>
