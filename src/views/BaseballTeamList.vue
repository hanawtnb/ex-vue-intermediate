<template>
  <div class="container">
    <div class="list">
      <h1>野球チーム一覧</h1>
      <div
        class="teamNames"
        v-for="team of getBaseBallTeams"
        v-bind:key="team.id"
      >
        <router-link :to="'/baseballTeamDetail/' + team.id">
          {{ team.teamName }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Team } from "@/types/team";

@Component
export default class BaseballTeamList extends Vue {
  /**
   * 野球チームのリストを取得して返す.
   */
  get getBaseBallTeams(): Team {
    return this["$store"].getters.getBaseBallTeams;
  }
}
</script>

<style>
.container {
  text-align: center;
}

.list {
  display: inline-block;
  text-align: left;
}
.teamNames {
  padding-bottom: 10px;
}
</style>
