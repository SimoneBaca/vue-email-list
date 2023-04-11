/*Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.*/

const { createApp } = Vue
createApp({
    data() {
        return {
            contacts: {
                email: 'simo17@gmail.com',
            }
        }
    },
    methods: {
    },

    beforeMount() {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                console.log(response.data);
                this.contacts.email = response.data.response
                console.log(response.data.response)
            });
    },
}).mount('#app')
