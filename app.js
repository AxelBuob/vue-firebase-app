const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45,
            x: 0,
            y: 0
        }
    },
    methods: {
        changeTitle(title) {
            if (!title) {
                this.title = 'There is no Title'
            } else {
                this.title = title
            }
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        },
        handleEvent(e, data) {
            console.log(e, e.type);

            if (data) {
                console.log(data);
            }
        },
        handleMouseMove(e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        }

    }
})

app.mount('#app')