<template>
  <div class="container">

    <nav class="level">
      <p class="level-item has-text-centered">
        <router-link
          class="link is-info"
          to="/smarthome/overview">
          <span class="icon is-medium">
            <i class="fas fa-2x fa-fw fa-boxes"/><br>
          </span>
          <p class="is-size-7">Overview</p>
        </router-link>
      </p>
      <p class="level-item has-text-centered">
        <router-link
          class="link is-info"
          to="/smarthome/lights">
          <span class="icon is-medium">
            <i class="fas fa-2x fa-fw fa-lightbulb"/><br>
          </span>
          <p class="is-size-7">Lights</p>
        </router-link>
      </p>
      <p class="level-item has-text-centered">
        <router-link
          class="link is-info"
          to="/smarthome/house">
          <span class="icon is-medium">
            <i class="fas fa-2x fa-fw fa-building"/><br>
          </span>
          <p class="is-size-7">House</p>
        </router-link>
      </p>
      <p class="level-item has-text-centered">
        <router-link
          class="link is-info"
          to="/smarthome/temperature">
          <span class="icon is-medium">
            <i class="fas fa-2x fa-fw fa-thermometer-half"/><br>
          </span>
          <p class="is-size-7">Temp</p>
        </router-link>
      </p>
      <p class="level-item has-text-centered">
        <router-link
          class="link is-info"
          to="/smarthome/energy">
          <span class="icon is-medium">
            <i class="fas fa-2x fa-fw fa-bolt"/><br>
          </span>
          <p class="is-size-7">Energy</p>
        </router-link>
      </p>
    </nav>

    <div class="columns">
      <div class="column">
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
            color: #343a40;
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
