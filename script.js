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
                for(let i = 0; i < 10; i++){
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
                    console.log(res.data.response);
                    this.emails.push(res.data.response);
                })
            }
        }
    },
    mounted(){
        this.getEmails()
    }
}).mount('#app');