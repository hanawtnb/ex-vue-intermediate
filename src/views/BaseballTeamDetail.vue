<template>
  <div class="container">
    <div class="detail">
      <div class="topic">球団名</div>
      {{ currentTeam.teamName }}
      <div class="topic">本拠地</div>
      {{ currentTeam.homeStadium }}
      <div class="topic">発足日</div>
      {{ currentTeam.formatBorn }}
      <div class="topic">歴史</div>
      <pre>{{ currentTeam.history }}</pre>
      <br />
      <router-link to="/baseballTeamList">
        <button type="button">戻る</button>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Team } from "@/types/team";

@Component
export default class BaseballTeamDetail extends Vue {
  // 現在指定されているチーム
  private currentTeam!: Team;
  /**
   * 表示されるチームを取得して返す.
   */
  created(): void {
    const baseballTeamId = parseInt(this["$route"].params.id);
    this.currentTeam = this["$store"].getters.getBaseballTeamID(baseballTeamId);
  }

  // get getBornDate(): string {
  //   return this.currentTeam.getBornDate;
  // }
}
</script>

<style>
.container {
  text-align: center;
}

.detail {
  text-align: left;
  display: inline-block;
}

.topic {
  font-weight: bold;
}
</style>
