<template>
  <div id="app">

    <div class="header d-flex align-items-end">

      <div class="container">
        <div class="row">
          <div class="col-sm">
            <h1 class="header__title">Doelen 35</h1>
            <ul class="fa-ul list-inline header__icons">
              <li class="list-inline-item">
                <span class="fa-li">
                  <i class="fas fa-fw fa-lg fa-thermometer-empty"/>
                </span>
                <small>Buiten Temperatuur</small>
                <p
                  v-for="(today, index) in weatherToday"
                  :key="index"
                >
                  {{ today.day.avgtemp_c }} &deg;C
                </p>
              </li>
              <li class="list-inline-item">
                <span class="fa-li">
                  <i class="fas fa-fw fa-lg fa-tint"/>
                </span>
                <small>Luchtvochtigheid</small>
                <p
                  v-for="(today, index) in weatherToday"
                  :key="index"
                >
                  {{ today.day.avghumidity }} %
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>

    <div class="content">

      <transition
        name="fade"
        mode="out-in">
        <router-view/>
      </transition>

    </div>

    <div class="footer">

      <nav class="navbar navbar-expand-md navbar-dark fixed-bottom bg-dark">
        <div class="container">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"/>
          </button>
          <div
            id="navbarCollapse"
            class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  to="/">
                  Apps
                </router-link>
              </li>
              <li class="nav-item dropup">
                <a
                  id="navbarDropdownMenuLink"
                  class="nav-link dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                  SmartHome
                </a>
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink">
                  <router-link
                    class="dropdown-item"
                    to="/smarthome/overzicht">
                    Overzicht
                  </router-link>
                  <router-link
                    class="dropdown-item"
                    to="/smarthome/voordeur">
                    Voordeur
                  </router-link>
                  <router-link
                    class="dropdown-item"
                    to="/smarthome/huiskamer">
                    Huiskamer
                  </router-link>
                  <router-link
                    class="dropdown-item"
                    to="/smarthome/slaapkamer">
                    Slaapkamer
                  </router-link>
                  <router-link
                    class="dropdown-item"
                    to="/smarthome/energie">
                    Energie
                  </router-link>
                </div>
              </li>
            </ul>
            <small class="pull-right text-muted">&copy; 2018 Copyright Danh Nguyen | Front-End Developer</small>
          </div>
        </div>
      </nav>

    </div>

  </div>
</template>

<script>
import { getWeatherTodayAPI } from '@/services/weather-api.js';

export default {
    name: 'HomeAutomation',
    data() {
        return {
            errorMsg: '',
            weatherToday: []
        };
    },
    mounted() {
        this.getWeatherToday();
    },
    methods: {
        getWeatherToday() {
            getWeatherTodayAPI()
                .then(response => {
                    this.weatherToday = response.data.forecast.forecastday;
                })
                .catch(error => {
                    this.errorMsg = 'Alles is kapot!';
                    this.weatherToday = null;
                    return error;
                });
        },
        vibrateButton() {
            navigator.vibrate(25);
        }
    }
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.header {
    height: 200px;
    @media only screen and (min-width: 480px) {
        height: 250px;
    }

    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, rgba(0, 0, 0, 0.65) 100%),
        url('./assets/StockSnap_6SMA09U7Y8.jpg') no-repeat;
    background-size: cover;
    background-position: center;
    color: white;
    margin-bottom: 20px;

    &__title {
        margin-bottom: 15px;
    }

    &__icons {
        margin-left: 25px;
        margin-bottom: 0;

        .list-inline-item {
            margin-right: 30px;

            @media only screen and (min-width: 480px) {
                margin-right: 50px;
            }

            &:last-of-type {
                margin-right: 0;
            }
        }
    }
}

.footer {
    position: absolute;
    bottom: 0;
}
</style>
