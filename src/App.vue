<template>
	<router-view />
</template>

<style>
* {
	margin: 0;
	padding: 0;
}

html {
	background: #202124;
}

#app {
	font-family: "Tinos";
	font-weight: 700 !important;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;

	color: #e8eaed;

	margin: 5% 10%;
}

h1 {
	font-family: "Open Sans";
	font-size: 5rem;
}

h2 {
	font-family: "Tinos";
	font-size: 2rem;
	font-weight: 500;
}

a {
	color: white !important;
	text-decoration: none;
}

p {
	font-size: 1.25rem;
	font-weight: 400;

	color: #b2bec3;

	line-height: 1.5rem;
	letter-spacing: 0.05rem;
	margin-bottom: 1rem;
}

hr {
	margin-bottom: 1rem;
}

li {
	border-top: 1px solid #5f6368;
	padding: 2rem 0;

	list-style-type: none;
}

ul {
	margin-top: 2rem;
}

ul ul {
	margin-left: 1rem;
}
</style>
