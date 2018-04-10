<template>
  <div class="house">

    <div class="row">
      <div class="col-sm">
        <ul class="list-group">
          <li
            v-for="(device, index) in devices"
            v-if="device.idx === '39' || device.idx === '31' || device.idx === '46'"
            :key="index"
            class="list-group-item">
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
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="row">
      <div class="col-sm">
        <ul class="list-group">
          <li
            v-for="(device, index) in devices"
            v-if="device.idx === '54' || device.idx === '55'"
            :key="index"
            class="list-group-item">
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
                :labels="{checked: 'ON', unchecked: 'OFF'}"
                :width="55"
                class="align-self-center"
                @change="toggleSwitch(device.idx)"/>
            </div>
          </li>
        </ul>
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
    name: 'House',
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
