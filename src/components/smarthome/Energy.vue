<template>
  <div class="energy">

    <div class="row">
      <div class="col-sm">
        <ul class="list-group">
          <li class="list-group-item">
            Graph here
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import { getDSMRAPI } from '@/services/dsmr-api.js';

export default {
    name: 'Energy',
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
            errorMsg: null
        };
    },
    mounted() {
        this.getDSMRData();
    },
    methods: {
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
        }
    }
};
</script>

<style lang="scss">

</style>
