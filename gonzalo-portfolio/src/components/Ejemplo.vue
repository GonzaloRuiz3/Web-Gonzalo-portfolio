<template>
   <nav class="menu">
  <ul>
    <li><a href="#">Project</a></li>
    <li><a href="#">CV</a></li>
    <li><a href="#">Contact</a></li>
    <li><a href="#">About me</a></li>
  </ul>
</nav>
<button @click="cambiarMensaje"> Click me! </button>
{{mensaje}}

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