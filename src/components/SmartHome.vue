<template>
  <div class="container">

    <div class="row">
      <ul class="nav flex-sm-column text-center smart-nav">
        <li class="nav-item">
          <router-link
            class="nav-link"
            to="/smarthome/overview">
            <i class="fas fa-2x fa-fw fa-boxes"/><br>
            <span>Overview</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            to="/smarthome/lights">
            <i class="fas fa-2x fa-fw fa-lightbulb"/><br>
            <span>Lights</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            to="/smarthome/house">
            <i class="fas fa-2x fa-fw fa-building"/><br>
            <span>House</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            to="/smarthome/temperature">
            <i class="fas fa-2x fa-fw fa-thermometer-half"/><br>
            <span>Temp</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            to="/smarthome/energy">
            <i class="fas fa-2x fa-fw fa-bolt"/><br>
            <span>Energy</span>
          </router-link>
        </li>
      </ul>

      <div class="col-sm">
        <transition
          name="fade"
          mode="out-in">
          <div class="smarthome">
            <router-view/>
          </div>
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
.smart-nav {
  @media only screen and (max-width: 480px) {
      width: 100%;
  }

  .nav-link {
    margin-bottom: 13px;
    color: #ccc;

    &.router-link-active {
      color: #343A40;
    }

    span {
      font-size: 10px;
    }
  }
}

.smarthome {
  .row {
      margin-bottom: 10px;
  }

  .card {
    min-height: 130px;
  }
}
</style>
