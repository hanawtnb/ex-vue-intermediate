<template>
  <div class="container">
    <h1>野球チーム一覧</h1>
    <div v-for="team of getBaseBallTeams" v-bind:key="team.id">
      <router-link :to="'/baseballTeamDetail/' + team.id">
        {{ team.teamName }}
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Team } from "@/types/team";

@Component
export default class BaseballTeamList extends Vue {
  get getBaseBallTeams(): Team {
    return this["$store"].getters.getBaseBallTeams;
  }
}
</script>

<style></style>
