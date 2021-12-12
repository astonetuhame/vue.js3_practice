Vue.createApp({
    data() {
        return {
            newItem: '',
            items: ['orange', 'apple'],
            max: 8
        }
    },
    computed: {
        msg() {
            if (this.items.length == 0) {
                return 'add new item';
            } else if (this.items == 1) {
                return 'one item';
            } else {
                return this.items.length + " items added";
            }
        }
    },
    methods: {
        add() {
            if (this.newItem.length == 0) return
            this.items.push(this.newItem);
            this.newItem = '';
        },
        remove(index) {
             this.items.splice(index, 1);
        },
        check(){
            if(this.newItem.length > this.max)
            {
                this.newItem = this.newItem.substring(0, this.max)
            }

        }


    }
}).mount('#main');


