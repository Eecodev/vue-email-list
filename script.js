const {createApp} = Vue;

createApp({
    data(){
        return{
            emails: [],
        }
    },
    methods:{
        getEmails(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail?qty=10').then((res) => {
                console.log(res.data.response);
                this.emails = res.data.response;
            })
        }
    },
    mounted(){
        this.getEmails()
    }
}).mount('#app');