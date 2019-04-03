<template>
	<div class="container">
		<el-container>
			<el-header>页头</el-header>
			<el-container>
				<el-aside width="200px">边框</el-aside>
				<el-container>
					<el-main>Main</el-main>
					<el-footer><el-row style="border-radius: 2px;border: #9DA0A4 solid thin;" type="flex" class="row-bg" justify="end">@购物猫 2018</el-row></el-footer>
				</el-container>
			</el-container>
		</el-container>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
