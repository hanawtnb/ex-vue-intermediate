<template>
  <div class="container">
    <div class="ex03">
      <div>衣類検索</div>
      <div class="row">
        <input value="0" type="radio" v-model="gender" checked />
        Man
        <input value="1" type="radio" v-model="gender" checked />
        Weman
        <select v-model="color">
          <option value="赤">赤</option>
          <option value="青">青</option>
          <option value="白">白</option>
          <option value="黄">黄</option>
        </select>
      </div>

      <button type="button" v-on:click="onSearchItem">検索</button>

      <br />
      <div class="results">
        <div v-for="result of resultClothes" v-bind:key="result.id">
          <table>
            <tr>
              <th>ジャンル</th>
              <td>{{ result.genre }}</td>
            </tr>
            <tr>
              <th>サイズ</th>
              <td>{{ result.size }}</td>
            </tr>
            <tr>
              <th>価格</th>
              <td>{{ result.price }}</td>
            </tr>
            <tr>
              <th>性別</th>
              <td>{{ result.gender }}</td>
            </tr>
            <tr>
              <th>色</th>
              <td>{{ result.color }}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Ex03 extends Vue {
  private gender = 0;
  private color = "赤";
  private resultClothes = [];

  onSearchItem(): void {
    this.resultClothes = this["$store"].getters.getClothesByGenderAndColor(
      this.gender,
      this.color
    );
  }
}
</script>

<style scoped>
.container {
  text-align: center;
}

.ex03 {
  text-align: left;
  display: inline-block;
}
/* .results {
  border: solid 1px black;
} */
</style>
