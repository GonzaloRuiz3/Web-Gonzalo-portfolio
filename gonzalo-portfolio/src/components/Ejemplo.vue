<template>
<<<<<<< HEAD
   <nav class="menu">
  <ul>
    <li><a href="#">Project</a></li>
    <li><a href="#">CV</a></li>
    <li><a href="#">Contact</a></li>
    <li><a href="#">About me</a></li>
  </ul>
</nav>
<button @click="cambiarMensaje"> Click me! </button>
=======
 <div>
    <p>Ejemplo</p>

>>>>>>> d251d65742ee4ba37ab49457c9bac4e48c678a3a
{{mensaje}}


 </div>

</template>
<script>

export default{
   
    data(){
        return {
            mensaje: 'hola',
        }
    },
    methods: {
        cambiarMensaje(){
            this.mensaje="adios";
        }
    }
    
}
</script>