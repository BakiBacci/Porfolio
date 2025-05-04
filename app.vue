<script setup lang="ts">

import { useRoute } from 'vue-router';
const route = useRoute()
</script>

<template>
  <div>
    <AltHeader v-if="route.path==='/contact'"/>
    <MainHeader v-else-if="route.path==='/'"/>
    <NuxtRouteAnnouncer />
    <NuxtPage/>
  </div>
</template>
