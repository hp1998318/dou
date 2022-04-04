<template>
	<div>
		<header>
			<section>
				<span class="title">正在热映</span>
				<span class="header-link">全部正在热映</span>
				<span class="header-link">即将上映</span>
			</section>
			<section class="actions">
				<span class="page-info">{{ pageNum }} / {{ hotMovieChunks.length }}</span>
				<i class="el-icon-caret-left" v-on:click="toPrevPage" />
				<i class="el-icon-caret-right" v-on:click="toNextPage" />
			</section>
		</header>
		<el-carousel
			ref="carousel"
			arrow="never"
			indicator-position="none"
			@change="onPageNumChange"
		>
			<el-carousel-item v-for="(item, index) in hotMovieChunks" :key="item.doubanId">
				里面自己写{{ index }}
			</el-carousel-item>
		</el-carousel>
	</div>
</template>

<script>
import { chunk } from 'lodash';
import { in_theaters } from "@/apis/movie.js";

export default {
	name: 'HotMovie',
	data() {
		return {
			hotMovieChunks: [],
			pageNum: 0,
		}
	},
	mounted() {
		this.fetchHotMovies();
	},
	methods: {
		async fetchHotMovies() {
			const resp = await in_theaters();
			// 五个一组的二维数组
			this.hotMovieChunks = chunk(resp, 5);
			this.pageNum = 1;
		},
		toPrevPage() {
			this.$refs.carousel.prev();
		},
		toNextPage() {
			this.$refs.carousel.next();
		},
		onPageNumChange(index) {
			this.pageNum = index + 1;
		},
	},
}
</script>

<style scoped>
header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-bottom: 10px;
	margin-bottom: 18px;
	border-bottom: 1px solid #eaeaea;
}
.header-link {
	margin-left: 15px;
	font-size: 13px;
	color: #37a;
	transition: all .2s;
	cursor: pointer;
}

.header-link:hover {
	color: #fff;
	background-color: #37a;
}

.actions {
	display: flex;
	align-items: center;
}

.page-info {
	margin-right: 15px;
	font-size: 12px;
	color: #666;
}

.el-icon-caret-left,
.el-icon-caret-right {
	cursor: pointer;
	color: #6D98D2;
}
</style>