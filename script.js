const {createApp} = Vue;

createApp({
    data(){
        return{
            emails: [],
            currentIndex: 0,
            allEmailsFetched: false
        }
    },
    methods:{
        getEmails(){
                for(let i = 0; i < 10; i++){
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
                    console.log(response.data.response);
                    this.emails.push(response.data.response);

                    if(this.emails.length === 10){
                        this.allEmailsFetched = true;
                    } 
                })
            }
        }
    },
    mounted(){
        this.getEmails()
    }
}).mount('#app');