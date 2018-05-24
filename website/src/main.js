import hello from 'app/components/hello/hello';
import Vue from 'vue';

new Vue({
    render: (h) => h(hello)
}).$mount('#app');