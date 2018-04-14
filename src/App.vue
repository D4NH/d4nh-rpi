<template>
  <div id="app">

    <section class="hero is-medium is-dark">
      <div class="hero-foot">
        <div class="container">
          <h1 class="title">
            -
          </h1>
          <h2 class="subtitle">
            -
          </h2>
          <div class="level">
            <ul class="level-left">
              <li class="level-item">
                <span class="icon is-medium">
                  <i class="fas fa-lg fa-thermometer-empty"/>
                </span>
                <div>
                  <p class="is-size-7">Buiten Temperatuur</p>
                  <p
                    v-for="(today, index) in weatherToday"
                    :key="index"
                  >
                    {{ today.day.avgtemp_c }} &deg;C
                  </p>
                </div>
              </li>
              <li class="level-item">
                <span class="icon is-medium">
                  <i class="fas fa-lg fa-tint"/>
                </span>
                <div>
                  <p class="is-size-7">Luchtvochtigheid</p>
                  <p
                    v-for="(today, index) in weatherToday"
                    :key="index"
                  >
                    {{ today.day.avghumidity }} %
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <transition
        name="fade"
        mode="out-in">
        <router-view/>
      </transition>
    </section>

    <p class="has-text-centered">
      <small class="is-size-7">
        &copy; 2018 Copyright <a href="https://www.danhnguyen.nl">Danh Nguyen</a> | Front-End Developer
      </small>
    </p>

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
body {
    margin-bottom: 50px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.hero {
    padding-top: 150px;
    padding-bottom: 20px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, rgba(0, 0, 0, 0.65) 100%),
        url('./assets/StockSnap_6SMA09U7Y8.jpg') no-repeat;
    background-size: cover;
    background-position: center;

    h1, h2, p {
      text-shadow: 1px 1px 2px #aaa;
    }
}

.footer {
    .nav-link {
        color: #ccc;

        &.router-link-exact-active {
            color: white;
        }
    }
}

.is-vertical-aligned {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
