<script>
	import { onMount } from 'svelte';
	import Introduction from '../lib/components/Introduction.svelte';
	import Benefits from '../lib/components/Benefits.svelte';
	import Jobs from '../lib/components/Jobs.svelte';
	import AboutUs from '../lib/components/AboutUs.svelte';

	onMount(() => {
		window.addEventListener('hashchange', () => window.history.pushState({}, '', '/'), {});
	});
</script>

<head>
	<title>Join Artify - Create, Inspire, Transform</title>
</head>

<Introduction />
<AboutUs />
<Benefits />
<Jobs />

<style></style>
