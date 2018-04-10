<template>

  <div class="lights">

    <!-- Huiskamer -->
    <div class="row">
      <div class="col-sm">
        Huiskamer
        <div class="card">
          <ul class="list-group list-group-flush">
            <li
              v-for="(device, index) in devices"
              v-if="device.idx === '56' || device.idx === '57'"
              :key="index"
              class="list-group-item list-group-item-action"
              @click="toggleSwitch(device.idx)">
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
              <toggle-button
                :value="device.Status === 'Off' ? false : true"
                :labels="{checked: 'ON', unchecked: 'OFF'}"
                :width="55"
                @change="toggleSwitch(device.idx)"/>
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
              v-if="device.idx === '49' || device.idx === '3'"
              :key="index"
              class="list-group-item list-group-item-action"
              @click="toggleSwitch(device.idx)">
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
              <toggle-button
                :value="device.Status === 'Off' ? false : true"
                :labels="{checked: 'ON', unchecked: 'OFF'}"
                :width="55"
                @change="toggleSwitch(device.idx)"/>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Keuken -->
    <div class="row">
      <div class="col-sm">
        Keuken
        <div class="card">
          <ul class="list-group list-group-flush">
            <li
              v-for="(device, index) in devices"
              v-if="device.idx === '1' || device.idx === '14'"
              :key="index"
              class="list-group-item list-group-item-action"
              @click="toggleSwitch(device.idx)">
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
              <toggle-button
                :value="device.Status === 'Off' ? false : true"
                :labels="{checked: 'ON', unchecked: 'OFF'}"
                :width="55"
                @change="toggleSwitch(device.idx)"/>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Slaapkamer -->
    <div class="row">
      <div class="col-sm">
        Slaapkamer
        <div class="card">
          <div class="list-group list-group-flush">
            <li
              v-for="(device, index) in devices"
              v-if="device.idx === '77'"
              :key="index"
              class="list-group-item list-group-item-action"
              @click="toggleSwitch(device.idx)">
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
              <toggle-button
                :value="device.Status === 'Off' ? false : true"
                :labels="{checked: 'ON', unchecked: 'OFF'}"
                :width="55"
                @change="toggleSwitch(device.idx)"/>
            </li>
          </div>
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
    name: 'Lights',
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
.list-group-item-action {
  &:hover {
    cursor: pointer;
  }
}
</style>
