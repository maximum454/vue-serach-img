<template>
	<div class="favorites">
		<div class="header">
			<div class="container">
				<div class="header__body">
					<router-link to="/" class="header__logo">
						<img class="img-fluid" src="@/assets/logo.svg" width="187" height="73" alt="">
					</router-link>
					<router-link to="/favorites" class="header__favorite">Избранное</router-link>
				</div>
			</div>
		</div>
		<h1>Избранное</h1>
		<div class="container">
			<ul class="list-items">
				<li class="list-items__item" v-for="item in allFavorites" :key="item.id">
					<router-link :to="{ name: 'DetailView', params: { id: item.preview_photos[0].id }}">
						<img class="img-fluid" :src="item.preview_photos[0].urls.regular" width="473" height="440" alt="">
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
	name: "FavoritesView",
	setup() {
		const store = useStore();

		const allFavorites = computed(() => store.getters.getFavorites)

		return{
			allFavorites
		}
	}
}
</script>

<style scoped>
.favorites{

}
</style>