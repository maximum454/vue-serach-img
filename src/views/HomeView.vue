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
				<form action="" class="search__form">
					<input class="search__input" type="text" placeholder="Поиск">
				</form>
			</div>
		</div>
		<div class="container">
			<ul class="list-items">
				<li class="list-items__item" v-for="item in allItems" :key="item.id">
					<router-link :to="{ name: 'DetailView', params: { id: item.id }}">
						<img class="img-fluid" :src="item.urls.regular" width="473" height="440" alt="">
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
import {onMounted, ref} from 'vue'

const allItems = ref([])

function fetchItems() {
	const apiley = 'V2dimaiA8KXrAmFAZwL4Mxw8XynWpDYHpLvvXsE3TbE';
	fetch(`https://api.unsplash.com/photos?client_id=${apiley}&page=1&per_page=9`)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			console.log('data', data);
			allItems.value = data
		});
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
