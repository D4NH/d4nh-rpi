<template>
  <div class="container">
    <div class="columns">
      <!-- <div class="column">
        <router-link
          class="box"
          to="/smarthome/overview">
          <strong>SmartHome</strong>
          <p class="card-text"><small class="text-muted">Dashboard</small></p>
        </router-link>
      </div> -->
      <div class="column">
        <a
          class="box"
          href="https://hass.danhnguyen.nl">
          <strong>Home Assistant</strong>
          <p class="card-text"><small class="text-muted">Domotica</small></p>
        </a>
      </div>
      <div class="column">
        <a
          class="box"
          href="/dsmr/">
          <strong>DSMR-reader</strong>
          <p class="card-text"><small class="text-muted">Energy Consumption</small></p>
        </a>
      </div>
      <div class="column">
        <a
          class="box"
          href="/pihole/">
          <strong>Pi-Hole</strong>
          <p class="card-text"><small class="text-muted">Ad Blocking</small></p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Dashboard'
};
</script>

<style lang="scss">
</style>
