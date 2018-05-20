<script>
import { Line } from 'vue-chartjs';

export default {
    mixins: [Line],
    props: {
        chartData: {
            type: Array,
            default: null
        },
        chartLabel: {
            type: Array,
            default: null
        },
        titleText: {
            type: String,
            default: null
        },
        borderColor: {
            type: String,
            default: null
        }
    },
    mounted() {
        this.renderChart(
            {
                labels: this.chartLabel,
                datasets: [
                    {
                        label: this.titleText,
                        borderColor: this.borderColor,
                        fill: false,
                        data: this.chartData
                    }
                ]
            },
            {
                responsive: true,
                maintainAspectRatio: false,
                legend: false,
                scales: {
                    xAxes: [
                        {
                            ticks: {
                                autoSkip: true,
                                maxTicksLimit: 10
                            }
                        }
                    ]
                },
                elements: {
                    point: {
                        radius: 0,
                        hitRadius: 10,
                        hoverRadius: 5
                    }
                }
            }
        );
    },
    beforeDestroy() {
        this.renderChart = null;
    }
};
</script>
