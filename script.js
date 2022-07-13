const app = new Vue(
    {
        el: '#main-root',

        data: {

            activeIndex: 0,

            newToDo: '',

            todo: [
                {
                    text: 'Fare il to-do',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: false
                },
                {
                    text: 'Tagliare il prato',
                    done: true
                },
                {
                    text: 'Preparare la cena',
                    done: false
                },
            ]
        },
    }
)