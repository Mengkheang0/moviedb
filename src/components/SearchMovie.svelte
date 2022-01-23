<script>
	let active = false;
	let inputValue = '';
    import {goto} from '$app/navigation'
    import {fly} from 'svelte/transition'

    function canelInactive()
    {
        if(inputValue){
            active = true;
        }
        else{
            active = false;

        }
    }

    function submitSearch()
    {
        goto('/search/' + inputValue);
    }
</script>

<form class="search" on:submit|preventDefault={submitSearch}>
	{#if !active}
		<label in:fly={{y : -10,duration: 500}} out:fly={{y : -10,duration: 500}} for="search_movie">Search Movie</label>
	{/if}

	<input
		on:blur={canelInactive}
		on:focus={() => (active = true)}
		bind:value={inputValue}
		type="text"
		name="search_movie"
        class={active ? 'selected' : ''}
	/>
    {#if inputValue}
	    <button in:fly={{x : 20,duration: 500}} out:fly={{x :0,duration: 500}}>Seach</button>

    {/if}
</form>

<style>
	label {
		font-family: 'Poppins', sans-serif;
		font-weight: bold;
		font-size: 0.8rem;
		top: 50%;
		left: 0;
		position: absolute;
		transform: translate(0, -50%);
		pointer-events: none;
		color: #fff;
		padding: 0rem 1rem;
	}
	.search {
		position: relative;
		width: 30%;
		margin: 1rem;
	}
	button {
		font-size: 0.7rem;
		padding: 0rem 1rem;
		background-color: rgb(96, 110, 201);
		color: white;
		font-weight: bold;
		border: none;
		position: absolute;
		bottom: 50%;
		right: 0;
		transform: translate(50%, 50%);
		height: 100%;
		border-top-right-radius: 10px;
		border-bottom-right-radius: 10px;
		cursor: pointer;
	}
	input {
		width: 100%;
		border: none;
		font-size: 1rem;
		font-family: 'Poppins', sans-serif;
		outline: none;
		color: rgb(255, 255, 255);
		padding: 0.5rem 0.1rem;
		transition: background 0.75s ease-out;
		font-weight: bold;
		background: rgb(63, 63, 63);
		border-radius: 10px;
		padding: 0.8rem;
	}
    input.selected{
        background: rgb(27, 25, 25);
    }
</style>
