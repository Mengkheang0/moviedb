<script context="module">
	export async function load({ fetch }) {
		const apikey = '544e866552b4596a5a1ffb38e0115b9f';
		const res = await fetch(
			`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`
		);

        // store data
        const data = await res.json();

        if(res.ok){
            return{
                props: {popular : data.results}
            }
        }
	}
</script>



<!-- declare or import from folder -->
<script>

    // get from envfile
    import.meta.env.VITE_API //ot replace variable


    // animation import
    import {fly} from 'svelte/transition';

    import PopularMovie from "../components/PopularMovie.svelte";
    import SearchMovie from "../components/SearchMovie.svelte";
    export let popular;
    import global from '../global.css';
</script>


<!-- render section -->
<section in:fly={{y : 50,duration : 500,delay:500}} out:fly={{duration:500}}>
    <SearchMovie/>
    <PopularMovie movies={popular}/>
</section>

