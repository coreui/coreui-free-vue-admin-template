<template>
  <div id="userCount" class="animated fadeIn">
    <count-bingo-users></count-bingo-users>
  </div>
</template>

<script>
  import CountBingoUsers from "../components/count-bingo-users/CountBingoUsers";

export default {
  components: {CountBingoUsers},
  name: 'BingoMetrics'
}
</script>
