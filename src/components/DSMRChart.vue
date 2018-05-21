<script>
import { Line } from 'vue-chartjs';

export default {
    mixins: [Line],
    props: {
        laagVerbruik: {
            type: Array,
            default: null
        },
        hoogVerbruik: {
            type: Array,
            default: null
        },
        chartLabel: {
            type: Array,
            default: null
        }
    },
    mounted() {
        this.renderChart(
            {
                labels: this.chartLabel,
                datasets: [
                    {
                        label: 'Hoog verbruik',
                        borderColor: 'rgba(240, 80, 80,1)',
                        pointHoverBackgroundColor: '#fff',
                        pointStrokeColor: '#fff',
                        backgroundColor: 'rgba(240, 80, 80,0.1)',
                        pointColor: 'rgba(240, 80, 80,1)',
                        data: this.hoogVerbruik
                    },
                    {
                        label: 'Laag verbruik',
                        borderColor: 'rgba(125, 49, 26,1)',
                        pointHoverBackgroundColor: '#fff',
                        pointStrokeColor: '#fff',
                        backgroundColor: 'rgba(125, 49, 26,0.1)',
                        pointColor: 'rgba(125, 49, 26,1)',
                        data: this.laagVerbruik
                    }
                ]
            },
            {
                responsive: true,
                maintainAspectRatio: false
            }
        );
    },
    beforeDestroy() {
        this.renderChart = null;
    }
};
</script>
