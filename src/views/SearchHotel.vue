<template>
  <div class="container">
    <div class="searchHotel">
      <div class="title">ホテル検索</div>
      <div><input type="text" v-model="price" />円以下</div>
      <br />
      <button
        class="waves-effect waves-light btn"
        type="button"
        v-on:click="onSearchHotel(price)"
      >
        検索
      </button>
      <div class="showHitHotels">
        <div v-for="hotel of hitHotels" v-bind:key="hotel.id">
          <table class="highlite">
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
// import { Hotel } from "@/types/hotel";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SearchHotel extends Vue {
  private price = "";
  private hitHotels = [];

  onSearchHotel(): void {
    let searchPrice = this.price;
    if (searchPrice == "") {
      this.hitHotels = this["$store"].getters.getAllHotel;
    } else {
      this.hitHotels =
        this["$store"].getters.getSearchHotelLessThanPrice(searchPrice);
    }
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
