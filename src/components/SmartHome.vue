<template>
  <div class="container">

    <div class="tabs">
      <ul>
        <router-link
          class="link is-info"
          active-class="is-active"
          tag="li"
          to="/smarthome/overview">
          <a>
            <span class="icon is-small">
              <i class="fas fa-boxes"/><br>
            </span>
            <span>Overview</span>
          </a>
        </router-link>
        <router-link
          class="link is-info"
          active-class="is-active"
          tag="li"
          to="/smarthome/lights">
          <a>
            <span class="icon is-small">
              <i class="fas fa-lightbulb"/><br>
            </span>
            <span>Lights</span>
          </a>
        </router-link>
        <router-link
          class="link is-info"
          active-class="is-active"
          tag="li"
          to="/smarthome/house">
          <a>
            <span class="icon is-small">
              <i class="fas fa-building"/><br>
            </span>
            <span>House</span>
          </a>
        </router-link>
        <router-link
          class="link is-info"
          active-class="is-active"
          tag="li"
          to="/smarthome/temperature">
          <a>
            <span class="icon is-small">
              <i class="fas fa-thermometer-half"/><br>
            </span>
            <span>Temp</span>
          </a>
        </router-link>
        <router-link
          class="link is-info"
          active-class="is-active"
          tag="li"
          to="/smarthome/energy">
          <a>
            <span class="icon is-small">
              <i class="fas fa-bolt"/><br>
            </span>
            <span>Energy</span>
          </a>
        </router-link>
      </ul>
    </div>

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
.box {
    height: 100%;
}
</style>
