Vue.createApp({
    data() {
        return {
            city: 'London',
            weather_info: 'Loading info'
        }
    },
    watch: {
        city: {
            //handler handles the default city value set in the data property, immediate:true tells Vue to automotically query the API
            // use deep:true for arrays and objects
            handler(newVal, preVal) {                 
                console.log(preVal + "->" + newVal);
                this.query(newVal);
            },
            immediate: true
            // deep:true
        }
    },
    methods: {
        query(city) {
            this.weather_info = "Good weather in " + city
        }
    }
}).mount('#watchers');