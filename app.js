const app = Vue.createApp({
    data() {
        return {
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45
        }
    },
    methods: {
        changeTitle(title) {
            if(!title) {
                this.title = 'There is no Title'
            } else {
                this.title = title
            }
        }
    }
})

app.mount('#app')