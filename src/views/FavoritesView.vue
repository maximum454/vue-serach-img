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
		<list-items></list-items>
	</div>
</template>

<script>
import ListItems from "@/components/ListItems";
export default {
	name: "FavoritesView",
	components: {ListItems}
}
</script>

<style scoped>
.favorites{

}
</style>