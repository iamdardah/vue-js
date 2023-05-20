var app = Vue.createApp({
    data() {
        return {
            content: "This is vue js practice content",
            studentInfo: {
                studentName: "Shaikh Abu Dardah",
                studentWebName: "www.dropletweb.com",
                studentWebLink: "https://www.dropletweb.com",
            },
            studentFacebook: '<a href="https://www.facebook.com/s.k.a.darda">Shaikh Abu Dardah</a>',
            count: 0,
        };
    },


    methods: {
        increase() {
            this.count = this.count + 1;
        },
        decrease() {
            if(this.count > 0) {
                this.count--;
            }
        },
        
        increaseOne(event, amount) {
            this.count = this.count + amount;
            console.log(event)
        },
        decreaseOne(amount) {
            if(this.count > 0) {
                this.count = this.count - amount;
            }
        }
    }
});


app.mount("#mainContent")