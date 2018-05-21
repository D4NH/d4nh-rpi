<template>
  <div class="energy">

    <div class="row">
      <div class="col-sm">
        <ul class="list-group">
          <li class="list-group-item">
            <line-chart
              v-if="loaded"
              :laag-verbruik="laagVerbruik"
              :hoog-verbruik="hoogVerbruik"
              :chart-label="chartLabel"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import { getDSMRAPI } from '@/services/dsmr-api.js';
import LineChart from '../DSMRChart';

export default {
    name: 'Energy',
    components: {
        LineChart
    },
    data() {
        return {
            loaded: false,
            hoogVerbruik: [],
            laagVerbruik: [],
            chartLabel: [],
            errorMsg: null
        };
    },
    created() {
        this.getDSMRData();
    },
    methods: {
        getDSMRData() {
            getDSMRAPI(
                'statistics',
                'hour',
                '?hour_start__gte=' +
                    moment()
                        .subtract(2, 'days')
                        .format('YYYY-MM-DD') +
                    '&hour_start__lte=' +
                    moment()
                        .subtract(1, 'days')
                        .format('YYYY-MM-DD')
            )
                .then(response => {
                    for (let index = 0; index < response.results.length; index++) {
                        const element = response.results[index];
                        this.laagVerbruik.push(element.electricity1);
                        this.hoogVerbruik.push(element.electricity2);
                        this.chartLabel.push(moment(element.hour_start).format('HH:mm'));
                    }
                    this.loaded = true;
                })
                .catch(error => {
                    this.errorMsg = 'Alles is kapot!';
                    return error;
                });
        }
    }
};
</script>

<style lang="scss">
</style>
