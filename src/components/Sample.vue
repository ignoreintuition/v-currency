<template>
  <div>
    <ul>
    <select v-on:change="onChange">
      <option value="USD"> USD </option>
      <option value="EUR"> EUR </option>
      <option value="JPY"> JPY </option>
    </select>
      <li v-for="money, index in moneys">
        <div>{{getMoneys(index)}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sample',
  data () {
    return {
      moneys: [
        100, 150, 99, 210, 44.30, 24
      ]
    }
  },
  methods: {
    getMoneys(i) {
      return this.$helpers.currency(this.moneys[i]);
    },
    onChange(e){
      this.$helpers.changeCurrency(e.target.value);
      this.$forceUpdate();
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
