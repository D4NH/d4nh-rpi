<template>
  <div class="temperature">

    <div class="row">
      <div class="col-sm">
        <div class="card">
          <ul class="list-group list-group-flush">
            <li
              v-for="(device, index) in devices"
              v-if="device.idx === '67' || device.idx === '68'"
              :key="index"
              class="list-group-item">
              <p class="mt-0 card-title">
                <!-- <i class="fas fa-fw fa-lg fa-lightbulb"/> -->
                <span v-if="device.Temp">{{ device.Temp }} &deg;C</span>
                <span v-else>{{ device.Humidity }} %</span>
                <br>
                <small class="card-subtitle mb-2 text-muted">
                  Huiskamer
                </small>
              </p>
              <p class="mb-0 card-text">
                <small class="text-muted">
                  {{ device.LastUpdate | moment }}
                </small>
              </p>
              <!-- <toggle-button
                :value="device.Status === 'Off' ? false : true"
                class="align-self-center"
                @change="toggleSwitch(device.idx)"/> -->
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <div class="card">
          <ul class="list-group list-group-flush">
            <li
              v-for="(device, index) in devices"
              v-if="device.idx === '70' || device.idx === '71'"
              :key="index"
              class="list-group-item">
              <p class="mt-0 card-title">
                <!-- <i class="fas fa-fw fa-lg fa-lightbulb"/> -->
                <span v-if="device.Temp">{{ device.Temp }} &deg;C</span>
                <span v-else>{{ device.Humidity }} %</span>
                <br>
                <small class="card-subtitle mb-2 text-muted">
                  Slaapkamer
                </small>
              </p>
              <p class="mb-0 card-text">
                <small class="text-muted">
                  {{ device.LastUpdate | moment }}
                </small>
              </p>
              <!-- <toggle-button
                :value="device.Status === 'Off' ? false : true"
                class="align-self-center"
                @change="toggleSwitch(device.idx)"/> -->
            </li>
          </ul>
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

</style>
