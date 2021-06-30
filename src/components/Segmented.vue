<template>
  <div class="segmented">
    <input
      v-for="(name, i) in items"
      @change="updateValue(i)"
      type="radio"
      :name="items"
      :key="`radio-${i}`"
      :id="name"
      :value="name"
    />
    <label v-for="(name, j) in items" :key="`label-${j}`" :for="name">
      {{ name }}
    </label>
  </div>
</template>

<script>
export default {
  name: "Segmented",
  props: {
    items: Array,
    value: Number,
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    },
  },
};
</script>

<style scoped>
.segmented {
  display: flex;
  max-width: 336px;
  width: 100%;
  position: relative;
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  position: relative;
  z-index: 1;
  margin: 0 auto;
  font-size: 12px;
  border: 1px solid #efefef;
  border-radius: 4px;
  color: #2c3e50;
}
input {
  display: none;
}
input:nth-of-type(1):checked ~ label:last-of-type:before {
  transform: translateX(calc(0% + 0px));
}
input:nth-of-type(2):checked ~ label:last-of-type:before {
  transform: translateX(calc(100% + 0px));
}
input:nth-of-type(3):checked ~ label:last-of-type:before {
  transform: translateX(calc(200% + 0px));
}
label {
  flex: 1;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
}
label:last-of-type:before {
  content: "";
  display: block;
  max-width: calc(33.3333333333% - 0px);
  margin: 0px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  transform: translateX(0);
}
label {
  padding: 6px 3px;
  transition: color 250ms cubic-bezier(0, 0.95, 0.38, 0.98);
}
label:before {
  background: #efefef;
  transition: all 250ms cubic-bezier(0, 0.95, 0.38, 0.98);
}
label:not(:last-child) {
  border-right: 1px solid #efefef;
}
</style>
