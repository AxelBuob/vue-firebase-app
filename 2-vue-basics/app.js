const app = Vue.createApp({
    data() {
        return {
            url: "https://thenetninja.co.uk",
            showBooks: true,
            books: [
                {
                    title: 'The Final Empire',
                    author: 'Brandon Sanderson',
                    age: 45,
                    img: "https://picsum.photos/200/",
                    isfav: true
                },
                {
                    title: 'Name of the Wind',
                    author: 'Patrick Rothfuss',
                    age: 56,
                    img: "https://picsum.photos/200/",
                    isfav: false
                },
                {
                    title: 'The Way of the Kings',
                    author: 'Brandon Sanderson',
                    age: 45,
                    img: "https://picsum.photos/200/",
                    isfav: false
                },

            ],
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
        },
        toggleFav(book) {
            book.isfav = !book.isfav;
        }

    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isfav);
        }
    }
})

app.mount('#app')