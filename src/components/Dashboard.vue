<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <router-link
          class="box"
          to="/smarthome/overview">
          <strong>SmartHome</strong>
          <p class="card-text"><small class="text-muted">Dashboard</small></p>
        </router-link>
      </div>
      <div class="column">
        <a
          class="box"
          href="/domoticz/">
          <strong>Domoticz</strong>
          <p class="card-text"><small class="text-muted">RFXCom 433MHz</small></p>
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
          href="/ipcam/">
          <strong>IP-cam</strong>
          <p class="card-text"><small class="text-muted">HIKvision DS-2CD3345-I</small></p>
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
