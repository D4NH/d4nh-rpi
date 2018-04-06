<template>
  <div class="container">

    <div class="row">

      <div class="col-sm-2">
        <ul class="nav flex-column">
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/smarthome/overzicht">
              Overzicht
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/smarthome/voordeur">
              Voordeur
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/smarthome/huiskamer">
              Huiskamer
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/smarthome/slaapkamer">
              Slaapkamer
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/smarthome/energie">
              Energie
            </router-link>
          </li>
        </ul>
      </div>

      <div class="col-sm">
        <div class="content-view">
          <router-view/>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
    name: 'SmartHome'
};
</script>

<style lang="scss">
.content-view {
    @media only screen and (min-width: 480px) {
        padding: 0.5rem 1rem;
    }
    .row {
        margin-bottom: 10px;
        &:first-of-type {
            margin-bottom: 0;
        }
    }
}
</style>
