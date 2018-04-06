import Vue from 'vue';
import Router from 'vue-router';

import Dashboard from '@/components/Dashboard';

import SmartHome from '@/components/SmartHome';
import Overzicht from '@/components/smarthome/Overzicht';
import Huiskamer from '@/components/smarthome/Huiskamer';
import Slaapkamer from '@/components/smarthome/Slaapkamer';
import Voordeur from '@/components/smarthome/Voordeur';
import Energie from '@/components/smarthome/Energie';

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
                    path: 'overzicht',
                    component: Overzicht
                },
                {
                    path: 'huiskamer',
                    component: Huiskamer
                },
                {
                    path: 'slaapkamer',
                    component: Slaapkamer
                },
                {
                    path: 'energie',
                    component: Energie
                },
                {
                    path: 'voordeur',
                    component: Voordeur
                }
            ]
        }
    ]
});
