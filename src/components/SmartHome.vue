<template>
  <div class="container">

    <div class="row">

      <ul class="nav flex-sm-column nav-fill text-center smart-nav">
        <li class="nav-item">
          <router-link
            class="nav-link"
            to="/smarthome/overzicht">
            <i class="fas fa-2x fa-fw fa-boxes"/><br>
            <span>Overview</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            to="/smarthome/voordeur">
            <i class="fas fa-2x fa-fw fa-building"/><br>
            <span>House</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            to="/smarthome/huiskamer">
            <i class="fas fa-2x fa-fw fa-lightbulb"/><br>
            <span>Lights</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            to="/smarthome/slaapkamer">
            <i class="fas fa-2x fa-fw fa-thermometer-half"/><br>
            <span>Temp</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            to="/smarthome/energie">
            <i class="fas fa-2x fa-fw fa-bolt"/><br>
            <span>Energy</span>
          </router-link>
        </li>
      </ul>

      <div class="col-sm">

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
</style>
