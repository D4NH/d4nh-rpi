<template>

  <div class="container lights">
    <p class="title">Huiskamer</p>
    <div
      v-for="(device, index) in devices"
      v-if="device.idx === '56' || device.idx === '57' || device.idx === '49' || device.idx === '3'"
      :key="index"
      class="columns">
      <div class="column">
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

    <!-- Keuken -->
    <p class="title">Keuken</p>
    <div
      v-for="(device, index) in devices"
      v-if="device.idx === '1' || device.idx === '14'"
      :key="index"
      class="columns">
      <div class="column">
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

    <!-- Slaapkamer -->
    <p class="title">Slaapkamer</p>
    <div
      v-for="(device, index) in devices"
      v-if="device.idx === '77'"
      :key="index"
      class="columns">
      <div class="column">
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
import { getDevicesAPI, getToggleAPI } from '@/services/domoticz-api';

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
            getToggleAPI(deviceId)
                .then(response => {
                    this.getDevices();
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
.list-group-item-action {
    &:hover {
        cursor: pointer;
    }
}
</style>
