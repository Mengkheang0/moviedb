<script context="module">
import { dataset_dev } from "svelte/internal";


	export async function load({ fetch ,params}) {
		const apikey = '544e866552b4596a5a1ffb38e0115b9f';
		const res = await fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=en-US&query=${params.id}&page=1&include_adult=false`
		);

        // store data
        const movieDetail = await res.json();

        console.log(movieDetail)
        if(res.ok){
            return{
                props: {searchMovie : movieDetail.results}
            }
        }
	}
</script>

<script>
    export let searchMovie;
    import MovieCard from "../../components/MovieCard.svelte";
</script>


<div class="searched-movies">

    {#each searchMovie as movie}
        <MovieCard {movie}/>
    {/each}
</div>

<style>
     .searched-movies{
        margin-top: 2rem;
        font-family: 'Poppins',sans-serif;
        font-weight: bold;
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
        grid-column-gap: 1rem;
        grid-row-gap: 2rem;

    }
</style>
