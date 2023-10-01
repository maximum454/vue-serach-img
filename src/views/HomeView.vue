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

<script>
import {computed, onMounted, ref} from 'vue'
import { useStore } from 'vuex'

export default {
	name: "HomeView",
	setup() {
		const titleName = ref('');
		const store = useStore();

		const allItems = computed(() => store.getters.getItems)



		function searchItems() {
			store.dispatch('fetchSearch', titleName)
		}

		onMounted(() => {
			store.dispatch('fetchItems')
		})

		return{
			searchItems,
			allItems
		}
	}
}


</script>

<style scoped lang="scss">

</style>
