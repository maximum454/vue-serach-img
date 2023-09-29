<template>
	<div class="container">
		<ul class="list-items">
		<li class="list-items__item">
			<img class="img-fluid" src="https://placehold.co/473x440" width="473" height="440" alt="">
		</li>
		<li class="list-items__item">
			<img class="img-fluid" src="https://placehold.co/473x440" width="473" height="440" alt="">
		</li>
		<li class="list-items__item">
			<img class="img-fluid" src="https://placehold.co/473x440" width="473" height="440" alt="">
		</li>
		<li class="list-items__item">
			<img class="img-fluid" src="https://placehold.co/473x440" width="473" height="440" alt="">
		</li>
		<li class="list-items__item">
			<img class="img-fluid" src="https://placehold.co/473x440" width="473" height="440" alt="">
		</li>
		<li class="list-items__item">
			<img class="img-fluid" src="https://placehold.co/473x440" width="473" height="440" alt="">
		</li>
	</ul>
	</div>
</template>

<script>
export default {
	name: "ListItems"
}
</script>

<style scoped lang="scss">
.list-items{
	display: flex;
	flex-wrap: wrap;
	gap: 30px;
	margin: 0;
	padding: 0;
	list-style: none;
	&__item{
		flex: 1 0 calc(33.3% - 30px);
		max-width: calc(33.3% - 15px);
		img{
			width: 100%;
		}
	}
	@media (max-width: 1023px) {
		&__item{
			flex: 1 0 calc(50% - 30px);
			max-width: calc(50% - 15px);
		}
	}
	@media (max-width: 767px) {
		&__item{
			flex: 1 0 100%;
			max-width: 100%;
		}
	}
}
</style>