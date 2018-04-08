import Vue from 'vue';
import Router from 'vue-router';

import Dashboard from '@/components/Dashboard';

import SmartHome from '@/components/SmartHome';
import Overview from '@/components/smarthome/Overview';
import Lights from '@/components/smarthome/Lights';
import Temperature from '@/components/smarthome/Temperature';
import House from '@/components/smarthome/House';
import Energy from '@/components/smarthome/Energy';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Dashboard',
            component: Dashboard
        },
        {
            path: '/smarthome',
            name: 'SmartHome',
            component: SmartHome,
            children: [
                {
                    path: 'overview',
                    component: Overview
                },
                {
                    path: 'house',
                    component: House
                },
                {
                    path: 'temperature',
                    component: Temperature
                },
                {
                    path: 'energy',
                    component: Energy
                },
                {
                    path: 'lights',
                    component: Lights
                }
            ]
        }
    ]
});
