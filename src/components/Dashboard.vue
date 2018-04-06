<template>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <div class="card-deck">
          <a
            class="card list-group-item-action"
            href="/domoticz/">
            <div class="card-body">
              <h5 class="card-title">Domoticz</h5>
              <p class="card-text"><small class="text-muted">RFXCom 433MHz</small></p>
            </div>
          </a>
          <a
            class="card list-group-item-action"
            href="/dsmr/">
            <div class="card-body">
              <h5 class="card-title">DSMR-reader</h5>
              <p class="card-text"><small class="text-muted">Energy Consumption</small></p>
            </div>
          </a>
          <a
            class="card list-group-item-action"
            href="/ipcam/">
            <div class="card-body">
              <h5 class="card-title">IP-cam</h5>
              <p class="card-text"><small class="text-muted">HIKvision DS-2CD3345-I</small></p>
            </div>
          </a>
        </div>
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
