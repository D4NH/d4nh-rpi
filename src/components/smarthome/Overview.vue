<template>
  <div class="container overview">

    <div class="columns">
      <div class="column is-one-fifth">
        <div class="box is-vertical-aligned has-text-centered">
          <p
            v-for="(device, index) in devices"
            v-if="device.idx === '67'"
            :key="index">
            {{ device.Temp }} &deg;C
            <br>
            <small
              v-for="(device, index) in devices"
              v-if="device.idx === '68'"
              :key="index">
              {{ device.Humidity }} %
            </small>
          </p>
          <p>
            <small>
              Huiskamer
            </small>
          </p>
        </div>
      </div>
      <div
        v-for="(device, index) in devices"
        v-if="device.idx === '39'"
        :key="index"
        class="column">
        <div class="box is-vertical-aligned">
          <article class="media">
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>Voordeur</strong><br>
                  <small>{{ device.Name }}</small><br>
                  <small class="is-size-7">{{ device.LastUpdate | moment }}</small>
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div class="column">
        <div class="box is-vertical-aligned">
          <article class="media">
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>HIKvision</strong><br>
                  <small>DS-2CD3345-I</small><br>
                  <small><a href="#">Login</a></small>
                </p>
              </div>
            </div>
            <div class="media-right">
              <img
                id="hikvision"
                class="media-image is-pulled-right"
                src="">
            </div>
          </article>
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="column is-one-fifth">
        <div class="box is-vertical-aligned has-text-centered">
          <p>
            {{ consumption }} kWh
            <br>
            <small>
              Huidig
            </small>
          </p>
          <p>
            <small>
              Energie verbruik
            </small>
          </p>
        </div>
      </div>
      <div
        v-for="(device, index) in devices"
        v-if="device.idx === '56' || device.idx === '57'"
        :key="index"
        class="column">
        <div class="box is-vertical-aligned">
          <article class="media">
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>{{ device.Name }}</strong><br>
                  <toggle-button
                    :value="device.Status === 'Off' ? false : true"
                    :labels="{checked: 'ON', unchecked: 'OFF'}"
                    :width="55"
                    class="is-pulled-right"
                    @change="toggleSwitch(device.idx)"/>
                  <small>{{ device.HardwareType }}</small><br>
                  <small class="is-size-7">{{ device.LastUpdate | moment }}</small>
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="column is-one-fifth">
        <div class="box is-vertical-aligned has-text-centered">
          <p>
            &euro; {{ costs }}
            <br>
            <small>
              Huidig
            </small>
          </p>
          <p>
            <small>
              Energie kosten
            </small>
          </p>
        </div>
      </div>
      <div
        v-for="(device, index) in devices"
        v-if="device.idx === '49' || device.idx === '3'"
        :key="index"
        class="column">
        <div class="box is-vertical-aligned">
          <article class="media">
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>{{ device.Name }}</strong><br>
                  <toggle-button
                    :value="device.Status === 'Off' ? false : true"
                    :labels="{checked: 'ON', unchecked: 'OFF'}"
                    :width="55"
                    class="is-pulled-right"
                    @change="toggleSwitch(device.idx)"/>
                  <small>{{ device.HardwareType }}</small><br>
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
import { getDSMRAPI } from '@/services/dsmr-api.js';
import { getDevicesAPI } from '@/services/domoticz-api';

import Vue from 'vue';
import ToggleButton from 'vue-js-toggle-button';
Vue.use(ToggleButton);

export default {
    name: 'Overview',
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
            consumption: '-',
            costs: '-',
            devices: [],
            errorMsg: null
        };
    },
    mounted() {
        this.timer = setInterval(this.getCamStream, 5000);
        this.getDSMRData();
        this.getDevices();
    },
    beforeDestroy() {
        this.cancelAutoUpdate();
    },
    methods: {
        getCamStream() {
            const BASE_URL =
                window.location.href.indexOf('localhost') > -1 || window.location.href.indexOf('192') > -1
                    ? 'http://192.168.0.101:8080'
                    : 'https://thuis.danhnguyen.nl/domoticz';
            document.getElementById('hikvision').src = `${BASE_URL}/camsnapshot.jpg?idx=1&rand=` + Math.random();
            this.loading = false;
        },
        cancelAutoUpdate() {
            clearInterval(this.timer);
        },
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
        },
        getDSMRData() {
            getDSMRAPI()
                .then(response => {
                    this.consumption = parseFloat(response.electricity1 + response.electricity2).toFixed(2);
                    this.costs = response.total_cost;
                })
                .catch(error => {
                    this.consumption = 'Alles is kapot!';
                    this.costs = 'Alles is kapot!';
                    return error;
                });
        },
        toggleSwitch(deviceId) {
            console.log('clicked', deviceId);
            // getToggleAPI(deviceId)
            //     .then(response => {
            //         this.getDevices();
            //     })
            //     .catch(error => {
            //         this.errorMsg = 'Alles is kapot!';
            //         this.devices = null;
            //         return error;
            //     });
        }
    }
};
</script>

<style lang="scss">
.media-image {
    width: 150px;
}
</style>
