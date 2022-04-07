<template>
	<div v-if="item !== undefined">
		<div v-if="item.type === 'story'" v-on:click="toggleComments">
			<h2>{{ item.title }}</h2>

			<p>360 points by {{ item.by }}</p>
		</div>

		<div v-if="item.type === 'comment'">
			<p v-html="item.text"></p>
		</div>

		<p v-if="item.kids" v-on:click="toggleComments">
			<i>{{ item.kids.length }} replies</i>
		</p>

		<ul v-if="shouldShowComments">
			<li v-for="id in item.kids" v-bind:key="id">
				<item v-bind:id="id"></item>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Item, getItem } from "../hn";

export default defineComponent({
	name: "Item",
	props: {
		id: Number
	},
	setup: (props) => {
		const item = ref<Item | undefined>(undefined);

		(async () => {
			if (typeof props.id !== "number") {
				throw new Error("Item id not passed to component");
			}

			const rawItem = await getItem(props.id);

			if (rawItem.type === "story" || rawItem.type === "comment") {
				item.value = await getItem(props.id);
			} else {
				console.log("type", rawItem.type);
			}

			console.log(item.value);
		})();

		const shouldShowComments = ref<boolean>(false);
		const toggleComments = () =>
			(shouldShowComments.value = !shouldShowComments.value);

		return { item, shouldShowComments, toggleComments };
	}
});
</script>
