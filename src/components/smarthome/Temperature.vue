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
          <br>
          <line-chart
            v-if="device.idx === '67'"
            :border-color="'orange'"
            :title-text="'Temperatuur'"
            :chart-data="huiskamerTempData"
            :chart-label="huiskamerTempLabel"
          />
          <line-chart
            v-if="device.idx === '68'"
            :border-color="'green'"
            :title-text="'Luchtvochtigheid'"
            :chart-data="huiskamerLuchtData"
            :chart-label="huiskamerLuchtLabel"
          />
        </div>
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
          <br>
          <line-chart
            v-if="device.idx === '70'"
            :border-color="'orange'"
            :title-text="'Temperatuur'"
            :chart-data="slaapkamerTempData"
            :chart-label="slaapkamerTempLabel"
          />
          <line-chart
            v-if="device.idx === '71'"
            :border-color="'green'"
            :title-text="'Luchtvochtigheid'"
            :chart-data="slaapkamerLuchtData"
            :chart-label="slaapkamerLuchtLabel"
          />
        </div>
      </div>
    </div>

    <p class="title">Kinderkamer</p>
    <div class="columns">
      <div
        v-for="(device, index) in devices"
        v-if="device.idx === '86' || device.idx === '87'"
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
          <br>
          <line-chart
            v-if="device.idx === '86'"
            :border-color="'orange'"
            :title-text="'Temperatuur'"
            :chart-data="kinderkamerTempData"
            :chart-label="kinderkamerTempLabel"
          />
          <line-chart
            v-if="device.idx === '87'"
            :border-color="'green'"
            :title-text="'Luchtvochtigheid'"
            :chart-data="kinderkamerLuchtData"
            :chart-label="kinderkamerLuchtLabel"
          />
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import moment from 'moment';
import { getDevicesAPI, getGraphData } from '@/services/domoticz-api';

import LineChart from '../LineChart';

import Vue from 'vue';
import ToggleButton from 'vue-js-toggle-button';
Vue.use(ToggleButton);

export default {
    name: 'Temperature',
    components: {
        LineChart
    },
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
            huiskamerTempData: [],
            huiskamerTempLabel: [],
            huiskamerLuchtData: [],
            huiskamerLuchtLabel: [],
            slaapkamerTempData: [],
            slaapkamerTempLabel: [],
            slaapkamerLuchtData: [],
            slaapkamerLuchtLabel: [],
            kinderkamerTempData: [],
            kinderkamerTempLabel: [],
            kinderkamerLuchtData: [],
            kinderkamerLuchtLabel: [],
            errorMsg: null
        };
    },
    mounted() {
        this.getDevices();
        this.getCharts();
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
        getCharts() {
            getGraphData(67, 'day')
                .then(response => {
                    for (let index = 0; index < response.data.result.length; index++) {
                        const element = response.data.result[index];
                        this.huiskamerTempData.push(element.te);
                        this.huiskamerTempLabel.push(element.d.split(' ')[1]);
                    }
                })
                .catch(error => {
                    this.errorMsg = 'Alles is kapot!';
                    this.huiskamerTempData = null;
                    return error;
                });
            getGraphData(68, 'day')
                .then(response => {
                    for (let index = 0; index < response.data.result.length; index++) {
                        const element = response.data.result[index];
                        this.huiskamerLuchtData.push(element.hu);
                        this.huiskamerLuchtLabel.push(element.d.split(' ')[1]);
                    }
                })
                .catch(error => {
                    this.errorMsg = 'Alles is kapot!';
                    this.huiskamerLuchtData = null;
                    return error;
                });
            getGraphData(70, 'day')
                .then(response => {
                    for (let index = 0; index < response.data.result.length; index++) {
                        const element = response.data.result[index];
                        this.slaapkamerTempData.push(element.te);
                        this.slaapkamerTempLabel.push(element.d.split(' ')[1]);
                    }
                })
                .catch(error => {
                    this.errorMsg = 'Alles is kapot!';
                    this.slaapkamerTempData = null;
                    return error;
                });
            getGraphData(71, 'day')
                .then(response => {
                    for (let index = 0; index < response.data.result.length; index++) {
                        const element = response.data.result[index];
                        this.slaapkamerLuchtData.push(element.hu);
                        this.slaapkamerLuchtLabel.push(element.d.split(' ')[1]);
                    }
                })
                .catch(error => {
                    this.errorMsg = 'Alles is kapot!';
                    this.slaapkamerLuchtData = null;
                    return error;
                });
            getGraphData(86, 'day')
                .then(response => {
                    for (let index = 0; index < response.data.result.length; index++) {
                        const element = response.data.result[index];
                        this.kinderkamerTempData.push(element.te);
                        this.kinderkamerTempLabel.push(element.d.split(' ')[1]);
                    }
                })
                .catch(error => {
                    this.errorMsg = 'Alles is kapot!';
                    this.kinderkamerTempData = null;
                    return error;
                });
            getGraphData(87, 'day')
                .then(response => {
                    for (let index = 0; index < response.data.result.length; index++) {
                        const element = response.data.result[index];
                        this.kinderkamerLuchtData.push(element.hu);
                        this.kinderkamerLuchtLabel.push(element.d.split(' ')[1]);
                    }
                })
                .catch(error => {
                    this.errorMsg = 'Alles is kapot!';
                    this.kinderkamerLuchtData = null;
                    return error;
                });
        }
    }
};
</script>

<style lang="scss">
</style>
