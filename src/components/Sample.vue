<template>
  <div>
    <ul>
    <select v-on:change="onChange">
      <option value="USD"> US Dollar </option>
      <option value="EUR"> European Euro </option>
      <option value="JPY"> Japanese Yen </option>
      <option value="CAD"> Canadian Dollar </option>
      <option value="GBP"> Great Britain Pound </option>
      <option value="DEU"> German </option>
      <option value="FRA"> French </option>
      <option value="ITA"> Italy </option>
      <option value="CHE"> Swiss Franc </option>
      <option value="BGR"> Bulgaria </option>
    </select>
      <li v-for="money, index in moneys">
        <div id="moneys">{{getMoneys(index)}}</div>
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
        100500.945, 15043.5, 9909, 210, 44.30, -24, 'tq1'
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
#moneys {
  width: 100px;
  font: 1.2 em "helvetica", sans-serif;
  text-align: right;
}
</style>
