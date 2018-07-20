<template>

  <div class="container house">

    <div class="tile is-ancestor">
      <div class="tile is-parent is-vertical">
        <article
          v-for="(device, index) in devices"
          v-if="device.idx === '89' || device.idx === '31' || device.idx === '39'"
          :key="index"
          class="tile is-child">
          <div class="tile is-child box is-vertical-aligned">
            <article class="media">
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>{{ device.Name }}</strong><br>
                    <toggle-button
                      v-if="device.idx === '31'"
                      :value="device.Status === 'Off' ? false : true"
                      :labels="{checked: 'CLOSED', unchecked: 'OPENED'}"
                      :width="75"
                      class="is-pulled-right"/>
                    <toggle-button
                      v-if="device.idx === '89'"
                      :value="device.Status === 'Off' ? false : true"
                      :labels="{checked: 'CLOSED', unchecked: 'OPENED'}"
                      :width="75"
                      class="is-pulled-right"/>
                    <small>{{ device.HardwareType }}</small><br>
                    <small class="is-size-7">{{ device.LastUpdate | moment }}</small>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box media">
          <div class="media-content">
            <div class="content">
              <p>
                <strong>HIKvision</strong><br>
                <small>DS-2CD3345-I</small><br>
              </p>
              <img
                id="hikvision"
                src="">
            </div>
          </div>
        </article>
      </div>
    </div>

    <div
      v-for="(device, index) in devices"
      v-if="device.idx === '54' || device.idx === '55'"
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
                    class="is-pulled-right"/>
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
    created() {
        this.getDevices();
    },
    mounted() {
        this.timer = setInterval(this.getCamStream, 2000);
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
