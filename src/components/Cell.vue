<template>
  <div class="cell">
    <div class="headline">
      <input type="checkbox" @change="updateValue($event.target.checked)" />
      <div class="clickable" v-on:click="expanded = !expanded">
        <h3 v-bind:class="{ disabled: value }">
          {{ title }} <span>- {{ stage }}</span>
        </h3>
        <ul>
          <li v-for="(tag, index) in tags" :key="index">{{ tag }}</li>
        </ul>
      </div>
    </div>
    <div v-if="description" v-bind:class="{ expanded }" class="details">
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cell",
  props: {
    stage: String,
    tags: Array,
    title: String,
    description: String,
    value: Boolean,
  },
  data() {
    return {
      expanded: false,
    };
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    },
  },
};
</script>

<style scoped>
input[type="checkbox"] {
  width: 22px;
  height: 22px;
}
span {
  font-size: 12px;
  color: #8f8f8f;
}
li {
  list-style: none;
  margin: 0 6px 0 0;
  padding: 4px 12px 4px 12px;
  border-radius: 4px;
  font-size: 12px;
  color: white;
  display: inline;
  background-color: #c9c9c9;
}
.cell {
  cursor: pointer;
}
.cell:not(:last-child) {
  border-bottom: 1px solid #efefef;
}
.clickable {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.headline {
  padding: 12px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.headline h3 {
  margin-left: 6px;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.disabled {
  opacity: 0.4;
}
.details {
  margin: 0;
  padding: 0px;
  height: 0px;
  overflow: hidden;
}
.expanded {
  height: fit-content;
}
p {
  margin: 0 0 12px 0;
  padding: 0 12px 0 12px;
}
</style>
