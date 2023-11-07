const {createApp} = Vue;

createApp({
    data(){
        return{
            emails: []
        }
    },
    methods:{
        getEmails(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp)=>{
                console.log(resp.data.emails);
                this.emails = resp.data.emails;
            })
        }
    },
    mounted(){
        this.getEmails()
    }
}).mount('#app');