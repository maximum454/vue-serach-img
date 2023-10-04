<template>
	<div class="header">
		<div class="container">
			<div class="header__body">
				<router-link to="/" class="header__logo">
					<img class="img-fluid" src="@/assets/logo.svg" width="187" height="73" alt="">
				</router-link>
				<div>
					<router-link to="/favorites" class="header__search"><span>Поиск</span></router-link>
					<router-link to="/favorites" class="header__favorite"><span>Избранное</span></router-link>
				</div>
			</div>
		</div>
	</div>
	<div class="detail">
		<div class="detail__bg">
			<img class="img-fluid" :src="detailUrls.regular" alt="">
		</div>
		<div class="container">
			<div class="detail__body">
				<div class="detail__header">
					<div class="user">
						<div class="user__photo">
							<img class="img-fluid" :src="detailUserPhoto.small" alt="">
						</div>
						<div class="user__content">
							<div class="user__name">{{ detailUser.first_name }}</div>
							<div class="user__nik">@{{ detailUser.username }}</div>
						</div>
					</div>
					<div class="detail__control">
						<button type="button" class="btn btn-secondary" @click="addFavorite"><i class="icon icon-like-dark"></i><span>Избранное</span></button>
						<button type="button" class="btn btn-primary"><i class="icon icon-download-dark"></i><span>Downloand</span></button>
					</div>
				</div>
				<figure class="detail__figure">
					<img class="img-fluid" :src="detailUrls.regular" alt="">
					<div class="detail__miximize"><img class="img-fluid" src="@/assets/maximize.svg" width="24" height="24" alt=""></div>
				</figure>
			</div>
		</div>

		{{detail}}
	</div>
</template>
<script>
import {computed, onMounted, ref} from 'vue'
import router from '@/router'
import { useStore } from 'vuex'

export default {
	name: "DetailView",
	setup() {
		const ID = ref(router.currentRoute.value.params.id)
		const detailUser = ref([])
		const detailUrls = ref([])
		const detailUserPhoto = ref([])
		const store = useStore();



		function fetchItemsId() {
			const apiley = 'V2dimaiA8KXrAmFAZwL4Mxw8XynWpDYHpLvvXsE3TbE';
			fetch(`https://api.unsplash.com/photos/${ID.value}?client_id=${apiley}`)
				.then((response) => {
					return response.json();
				})
				.then((data) => {
					detailUrls.value = data.urls
					detailUser.value = data.user
					detailUserPhoto.value = data.user.profile_image
				});
		}

		function addFavorite() {

		}

		const detail = computed(() => store.getters.getDetail)

		onMounted(() => {
			store.dispatch('fetchIdItem', router.currentRoute.value.params.id)
			fetchItemsId()
		})
		return {
			detailUrls,
			detailUser,
			detailUserPhoto,
			addFavorite,
			detail
		}
	}
}
</script>

<style scoped lang="scss">
.detail {
	position: relative;
	padding-top: 43px;

	&__bg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		max-height: 50vh;
		overflow: hidden;

		img {
			width: 100%;
			filter: grayscale(1);
			object-fit: cover;
		}
	}

	&__body {
		position: relative;
		z-index: 10;
	}

	&__header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 10px;
		flex-wrap: wrap;
	}

	&__control {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
	}

	&__figure {
		margin: 40px 0 0;
		box-shadow: 0 4px 50px rgba(#000, .5);
		border-radius: 8px;
		overflow: hidden;
		position: relative;
		img {
			aspect-ratio: 9/4;
			width: 100%;
			object-fit: cover;
			display: block;
		}
	}
	&__miximize{
		position: absolute;
		bottom: 40px;
		right: 40px;
		cursor: pointer;
		img {
			aspect-ratio: 1;
			width: 100%;
			object-fit: cover;
			display: block;
		}
	}
	@media (max-width: 767px) {
		padding-top: 40px;
		&__bg {
			display: none;
		}
		&__control {
			span{
				display: none;
			}
		}
		&__figure {
			img {
				aspect-ratio: 9/6;
			}
		}
		&__miximize{
			position: absolute;
			bottom: 10px;
			right: 10px;
			img {
				aspect-ratio: 1;
			}
		}
		.icon{
			margin-right: 0;
			width: 20px;
			height: 20px;
		}
	}
}

.user {
	display: flex;
	align-items: center;
	gap: 10px;
	color: #FFFFFF;

	&__photo {
		width: 55px;
		height: 55px;
		border-radius: 5px;
		border: 2px solid #FFFFFF;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			display: block;
		}
	}

	&__name {
		font-size: 30px;
		line-height: 36px;
	}

	&__nik {
		font-size: 18px;
	}
	@media (max-width: 767px) {
		&__photo {
			width: 48px;
			height: 48px;

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
				display: block;
			}
		}
		&__name {
			font-size: 18px;
			line-height: 22px;
			color: #000000;
		}

		&__nik {
			font-size: 14px;
			line-height: 18px;
			color: #BDBDBD;
		}
	}
}

</style>
