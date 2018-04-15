<template>

  <div class="container temperature">
    <p class="title">Huiskamer</p>
    <div class="columns">
      <div
        v-for="(device, index) in devices"
        v-if="device.idx === '67' || device.idx === '68'"
        :key="index"
        class="column">
        <div class="box is-vertical-aligned">
          <article class="media">
            <div class="media-content">
              <div class="content">
                <p>
                  <strong v-if="device.Temp">{{ device.Temp }} &deg;C</strong>
                  <strong v-else>{{ device.Humidity }} %</strong><br>
                  <small v-if="device.Temp">Temperatuur</small>
                  <small v-else>Luchtvochtigheid</small><br>
                  <small class="is-size-7">{{ device.LastUpdate | moment }}</small>
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="column">
        Chart here
      </div>
    </div>

    <p class="title">Slaapkamer</p>
    <div class="columns">
      <div
        v-for="(device, index) in devices"
        v-if="device.idx === '70' || device.idx === '71'"
        :key="index"
        class="column">
        <div class="box is-vertical-aligned">
          <article class="media">
            <div class="media-content">
              <div class="content">
                <p>
                  <strong v-if="device.Temp">{{ device.Temp }} &deg;C</strong>
                  <strong v-else>{{ device.Humidity }} %</strong><br>
                  <small v-if="device.Temp">Temperatuur</small>
                  <small v-else>Luchtvochtigheid</small><br>
                  <small class="is-size-7">{{ device.LastUpdate | moment }}</small>
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import moment from 'moment';
import { getDevicesAPI } from '@/services/domoticz-api';

import Vue from 'vue';
import ToggleButton from 'vue-js-toggle-button';

Vue.use(ToggleButton);

export default {
    name: 'Temperature',
    filters: {
        roundUp(value) {
            return Math.ceil(value);
        },
        moment(date) {
            return moment(date).fromNow();
        }
    },
    data() {
        return {
            devices: [],
            errorMsg: null
        };
    },
    mounted() {
        this.getDevices();
    },
    methods: {
        getDevices() {
            getDevicesAPI()
                .then(response => {
                    this.devices = response.data.result;
                })
                .catch(error => {
                    this.errorMsg = 'Alles is kapot!';
                    this.devices = null;
                    return error;
                });
        }
    }
};
</script>

<style lang="scss">

</style>
