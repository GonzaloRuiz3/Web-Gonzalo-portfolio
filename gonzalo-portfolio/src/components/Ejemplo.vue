<template>
   <nav class="menu">
  <ul>
    <li><a href="#">Portfolio</a></li>
    <li><a href="#">Curriculum</a></li>
    <li><a href="#">Contacto</a></li>
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