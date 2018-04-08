<template>
  <div class="overview">

    <div class="row">
      <div class="col-sm-3">
        <div class="card-group">
          <div class="card text-center">
            <div class="card-body">
              <p
                v-for="(device, index) in devices"
                v-if="device.idx === '67'"
                :key="index"
                class="card-title">
                {{ device.Temp }} &deg;C
                <br>
                <small
                  v-for="(device, index) in devices"
                  v-if="device.idx === '68'"
                  :key="index"
                  class="card-subtitle mb-2 text-muted">
                  {{ device.Humidity }} %
                </small>
              </p>
              <p class="card-text">
                <small class="text-muted">
                  Huiskamer
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="col-sm">
        <div class="card-group">
          <div
            v-for="(device, index) in devices"
            v-if="device.idx === '39'"
            :key="index"
            class="card">
            <div class="card-body">
              <div class="media">
                <div class="media-body">
                  <p class="mt-0 card-title">
                    <!-- <i class="fas fa-fw fa-lg fa-bell"/> -->
                    Voordeur
                    <br>
                    <small class="card-subtitle mb-2 text-muted">
                      {{ device.Name }}
                    </small>
                  </p>
                  <p class="mb-0 card-text">
                    <small class="text-muted">
                      {{ device.LastUpdate | moment }}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <div class="media">
                <div class="media-body">
                  <p class="mt-0 card-title">
                    <!-- <i class="fas fa-fw fa-lg fa-video"/> -->
                    HIKvision
                    <br>
                    <small class="card-subtitle mb-2 text-muted">
                      DS-2CD3345-I
                    </small>
                  </p>
                  <p class="mb-0 card-text">
                    <small class="text-muted">
                      <a href="#">Login</a>
                    </small>
                  </p>
                </div>
                <img
                  id="hikvision"
                  class="align-self-center rounded"
                  src="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">

      <div class="col-sm-3">
        <div class="card-group">
          <div class="card text-center">
            <div class="card-body">
              <p>{{ consumption }} kWh
                <br>
                <small class="card-subtitle mb-2 text-muted">
                  Huidig
                </small>
              </p>
              <p class="card-text">
                <small class="text-muted">
                  Energie verbruik
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="col-sm">
        <div class="card-group">
          <div
            v-for="(device, index) in devices"
            v-if="device.idx === '56' || device.idx === '57'"
            :key="index"
            class="card">
            <div class="card-body">
              <div class="media">
                <div class="media-body">
                  <p class="mt-0 card-title">
                    <!-- <i class="fas fa-fw fa-lg fa-lightbulb"/> -->
                    {{ device.Name }}
                    <br>
                    <small class="card-subtitle mb-2 text-muted">
                      {{ device.HardwareType }}
                    </small>
                  </p>
                  <p class="mb-0 card-text">
                    <small class="text-muted">
                      {{ device.LastUpdate | moment }}
                    </small>
                  </p>
                </div>
                <toggle-button
                  :value="device.Status === 'Off' ? false : true"
                  :labels="{checked: 'Aan', unchecked: 'Uit'}"
                  class="align-self-center"
                  @change="toggleSwitch(device.idx)"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">

      <div class="col-sm-3">
        <div class="card-group">
          <div class="card text-center">
            <div class="card-body">
              <p class="card-title">
                &euro; {{ costs }}
                <br>
                <small class="card-subtitle mb-2 text-muted">
                  Huidig
                </small>
              </p>
              <p class="card-text">
                <small class="text-muted">
                  Energie kosten
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="col-sm">
        <div class="card-group">
          <div
            v-for="(device, index) in devices"
            v-if="device.idx === '49' || device.idx === '3'"
            :key="index"
            class="card">
            <div class="card-body">
              <div class="media">
                <div class="media-body">
                  <p class="mt-0 card-title">
                    <!-- <i
                      :class="device.idx === '49' ? 'fa-tv' : 'fa-lightbulb'"
                      class="fas fa-fw fa-lg"/> -->
                    {{ device.Name }}
                    <br>
                    <small class="card-subtitle mb-2 text-muted">
                      {{ device.idx === '49' ? 'UE55ES8000' : 'Lightstrip 5050 RGB' }}
                    </small>
                  </p>
                  <p class="mb-0 card-text">
                    <small class="text-muted">
                      {{ device.LastUpdate | moment }}
                    </small>
                  </p>
                </div>
                <toggle-button
                  :value="device.Status === 'Off' ? false : true"
                  class="align-self-center"
                  @change="toggleSwitch(device.idx)"/>
              </div>
            </div>
          </div>
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
                    this.errorMsg = 'Alles is kapot!';
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
#hikvision {
    width: 150px;
}
</style>
