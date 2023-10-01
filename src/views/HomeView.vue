<template>
	<div class="home">
		<div class="header">
			<div class="container">
				<div class="header__body">
					<router-link to="/" class="header__logo">
						<img class="img-fluid" src="@/assets/logo.svg" width="187" height="73" alt="">
					</router-link>
					<router-link to="/favorites" class="header__favorite"><span>Избранное</span></router-link>
				</div>
			</div>
		</div>
		<div class="search">
			<div class="container">
				<form class="search__form" v-on:submit.prevent="searchItems()">
					<input class="search__input" ref="titleName" type="text" placeholder="Поиск" value="">
					<button class="search__btn" type="submit"></button>
				</form>
			</div>
		</div>
		<div class="container">
			<ul class="list-items">
				<li class="list-items__item" v-for="item in allItems" :key="item.id">
					<router-link :to="{ name: 'DetailView', params: { id: item.preview_photos[0].id }}">
						<img class="img-fluid" :src="item.preview_photos[0].urls.regular" width="473" height="440" alt="">
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
import {onMounted, ref} from 'vue'

const allItems = ref([])
const apiKey = 'V2dimaiA8KXrAmFAZwL4Mxw8XynWpDYHpLvvXsE3TbE';
const titleName = ref('');

function fetchItems() {
	fetch(`https://api.unsplash.com/collections?client_id=${apiKey}&page=1&per_page=9`)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			allItems.value = data
		});
}

function fetchSearch(name) {
	fetch(`https://api.unsplash.com/search/collections?client_id=${apiKey}&page=1&per_page=9&query=${name}`)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			allItems.value = data.results
		});
}

function searchItems(){
	fetchSearch(titleName.value.value);
}




onMounted(() => {
	fetchItems()
})

</script>

<style scoped lang="scss">
.list-items {
	display: flex;
	flex-wrap: wrap;
	gap: 30px;
	margin: 0;
	padding: 0;
	list-style: none;

	&__item {
		flex: 1 0 calc(33.3% - 30px);
		max-width: calc(33.3% - 15px);
		aspect-ratio: 9/6;
		overflow: hidden;
		border-radius: 8px;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	@media (max-width: 1023px) {
		&__item {
			flex: 1 0 calc(50% - 30px);
			max-width: calc(50% - 15px);
		}
	}
	@media (max-width: 767px) {
		&__item {
			flex: 1 0 100%;
			max-width: 100%;

		}
	}
}
</style>
