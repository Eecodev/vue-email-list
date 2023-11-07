const {createApp} = Vue;

createApp({
    data(){
        return{
            emails: [],
            currentIndex: 0
        }
    },
    methods:{
        getEmails(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
                console.log(response.data.response);
                this.emails.push(response.data);
                this.currentIndex;
            })
        }
    },
    mounted(){
        this.getEmails()
    }
}).mount('#app');