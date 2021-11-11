<template>
  <div class="container">
    <div class="searchHotel">
      <div class="title">ホテル検索</div>
      <div><input type="number" v-model="price" />円以下</div>
      <br />
      <button
        class="waves-effect waves-light btn"
        type="button"
        v-on:click="onSearchHotel(price)"
      >
        検索
      </button>
      <div class="showHitHotels">
        <div v-for="hotel of hitHotels" v-bind:key="hotel">
          <table border="1">
            <tr>
              <th>ホテル名</th>
              <td>{{ hotel.name }}</td>
            </tr>
            <tr>
              <th>最寄駅</th>
              <td>{{ hotel.station }}</td>
            </tr>
            <tr>
              <th>価格</th>
              <td>{{ hotel.price.toLocaleString() }}</td>
            </tr>
          </table>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SearchHotel extends Vue {
  private price = 0;
  private hitHotels = [];

  onSearchHotel(): void {
    this.hitHotels = this["$store"].getters.getSearchHotel(this.price);
  }
}
</script>

<style scoped>
.title {
  font-weight: bold;
}
.container {
  text-align: center;
}

.searchHotel {
  text-align: left;
  display: inline-block;
}
.showHitHotels {
  padding-top: 30px;
}
</style>
