<template>
	<div id="app">
		<transition name="fade" mode="out-in"><router-view /></transition>
	</div>
</template>

<script>
export default {
	name: 'App'
};
</script>

<style>
#app,
page,
body,
html {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	width: 100%;
	height: 100%;
	margin: auto;
	padding: 0;
}

.container {
	width: 100%;
	height: 100%;
}
</style>
