<template>
  <div class="container">

    <div class="row">

      <div class="col-sm content-view">

        <div class="row">
          <ul class="nav">
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

        <transition
          name="fade"
          mode="out-in">
          <router-view/>
        </transition>
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
    }
}
.nav {
    margin-bottom: 20px;
}
</style>
