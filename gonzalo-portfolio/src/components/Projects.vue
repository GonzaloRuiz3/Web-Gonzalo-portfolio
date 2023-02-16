<template>
    <div class="container" style="margin:2em">
        <div class="row" >
            <div class="card text-center p-1 col-sm" style="margin: 2em; cursor: pointer" @click="playGame('aliens')" >
                <img src="../img/alien.png" class="card-img-top" alt="Card image cap" >
                <div class="card-body">
                <h5 class="card-title">Protect the aliens</h5>
                <p class="card-text">Poner aqui de que va el juego. Poner aqui de que va el juego. Poner aqui de que va el juego. </p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div class="card text-center p-2 col-sm" style="margin: 2em; cursor: pointer">
                <img src="../img/alien.png" class="card-img-top" alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title">Este es el juego 2</h5>
                <p class="card-text">Poner aqui de que va el juego. Poner aqui de que va el juego. Poner aqui de que va el juego. </p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
        <div class="card text-center p-2 row" style="margin: 2em; cursor: pointer">
            <img src="../img/alien.png" class="card-img-top" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">Este es el juego 3</h5>
            <p class="card-text">Poner aqui de que va el juego. Poner aqui de que va el juego. Poner aqui de que va el juego. </p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
    </div>
        
</template>

<script>
import router from '../router';


export default {

    name: "Projects",
    data() {
        return{

        }
    },
    methods: {
        playGame(gameId){
            console.log(gameId);
            this.$router.push({ path: '/play', query: { game: gameId } })
        }
    }
}

</script>