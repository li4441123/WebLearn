var app = new Vue({
    el: "#app",
    data: {
        city: '',
        wlist: []
    },
    methods: {
        enselect: function () {
            var that = this;
            axios.get('https://tianqiapi.com/api', {
                params: {
                    appid: '73681123',
                    appsecret: 'eIC9iuAy',
                    version: 'v1',
                    city: this.city,
                    vue: '1'
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    that.wlist = res.data.data;
                    console.log(that.wlist);
                })
        },

        change: function (city) {
            this.city = city;
            this.enselect();
        }
    }
})