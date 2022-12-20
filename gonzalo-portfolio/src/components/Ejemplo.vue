<template>
 <div>
    <p>Ejemplo</p>

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