<template>
	<div class="home">
		<h1>top stories</h1>

		<ul>
			<li
				v-if="stories.length > 0"
				v-for="item in stories"
				v-bind:key="item"
				class="item"
			>
				<item v-bind:id="item"></item>
			</li>

			<li v-else>no replies :(</li>
		</ul>
	</div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { getTopStories } from "../hn";
import Item from "../components/Item.vue";

export default defineComponent({
	name: "TopStories",
	setup: () => {
		const stories = ref<number[]>([]);

		(async () => {
			stories.value = await getTopStories();
		})();

		return { stories };
	},
	components: {
		Item
	}
});
</script>
