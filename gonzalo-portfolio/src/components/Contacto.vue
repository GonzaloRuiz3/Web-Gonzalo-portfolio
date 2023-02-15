<template>
 <div>
    <section >

<!--Section heading-->
<h2 class="h1-responsive font-weight-bold text-center my-4">Contact me</h2>
<!--Section description-->
<p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact me directly. I will come back to you within
    a matter of hours to help you.</p>
    <div class="card" style="margin:5em">
        <div class="card-body row">

                <form ref="form" style="margin:1em" class="col-8">
                    <!--Grid column-->
                    <div class="row">
                        <div class="col">
                            <div class="">
                                <label for="name" class="">Your name</label>
                                <input type="text" id="name" name="from_name" class="form-control" v-model="emailInfo.name">
                            </div>
                        </div>
                        <div class="col">
                            <div class="">
                                <label for="email" class="">Your email</label>
                                <input type="text" id="email" name="from_email" class="form-control" v-model="emailInfo.email">
                            </div>
                        </div>


                    </div>
      
                    <div class="row">
                        <div class="">
                            <label for="email" class="">Your message</label>

                            <textarea name="message" class="form-control" aria-label="With textarea"></textarea>
                        </div>
                    </div>
                </form>

                <div class="col-3">
                    <ul class="">
                        <li><i><font-awesome-icon icon="fa-solid fa-phone" /></i>
                            <p>+34 626119906</p>
                        </li>
                        <li><i><font-awesome-icon icon="fa-solid fa-envelope" /></i>
                            <p>gonzalo.ruiz.rufo@gmail.com</p>
                        </li>
                        
                    </ul>
                </div>

                <div class="text-center text-md-left">
                    <button class="btn btn-primary" v-on:click="sendEmail">Send</button>
                </div>
        </div>

    </div>
    
   

    


</section>
 </div>

</template>
<script>
import emailjs from '@emailjs/browser';

export default{


    data(){
        return {
            emailInfo: {
                name:null,
                email:null,
                subject:null,
                message: null,
            },
           
            
        }
        
    },
    methods: {
        cambiarMensaje(){
            this.mensaje="adios";
        },
        sendEmail() {
            console.log(this.$refs.form)
            try {
                emailjs.sendForm('service_0bzo2mu', 'template_awpqkba', this.$refs.form,
                'skj9wr0ac19RKQcjJ');

            } catch(error) {
                console.log({error})
            }
            // Reset form field
            },
    }
    
}
</script>