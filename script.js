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

        methods: {
            removeToDo: function (index) {
                this.todo.splice(index, 1);
            },

            addNewToDo: function (toDoText) {
                if (toDoText != '') {
                    const newMessage = {
                        text: toDoText,
                        done: false
                    }
                    this.todo.push(newMessage);

                    this.newToDo = '';
                } else {
                    alert('Stai Inserendo un Nuovo To-do');
                }
            }
        }
    }
)