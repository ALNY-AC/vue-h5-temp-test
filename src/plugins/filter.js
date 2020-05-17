import Vue from 'vue'
Vue.filter('arrToStr', function (value) {
    if (!value) return '';
    return value.join(',');
})
Vue.filter('tofixed', function (value) {
    if (!value) return 0;
    return (value * 1).toFixed(2);
})