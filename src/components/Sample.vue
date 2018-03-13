<template>
  <div>
    <ul>
      <li v-for="money in moneys">
        {{formatCurrency(money)}}
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
    formatCurrency(d) {
      return this.$helpers.currency(d);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
