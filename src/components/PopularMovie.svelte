<script>
    import {fly} from 'svelte/transition';

    // export from index.svelte
    export let movies;
    import MovieCard from "./MovieCard.svelte";
</script>

<h3>Popular Movie</h3>
<div class="popular-movies"> 

    <!-- use forloop -->
    {#each movies as movie}

        <!-- second way of pasin value to another page  <MovieCard test = {movie}/> --> 
        <MovieCard {movie}/>

    {/each}


</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');
    *{
        font-family: 'Poppins', sans-serif;
    }
    h3{
        padding: 0 1rem;
    }
    .popular-movies{
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
        grid-column-gap: 1rem;
        grid-row-gap: 2rem;

    }
</style>