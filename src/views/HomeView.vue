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
		<ListItems></ListItems>
	</div>
</template>

<script>


import ListItems from "@/components/ListItems";
export default {

	components: {
		ListItems
	}
}
</script>
