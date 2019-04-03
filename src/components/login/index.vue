<template>
	<div class="container">
		<el-row type="flex" justify="center">
			<el-card class="box-card form-container">
				<el-form ref="form" :model="form">
					<el-form-item><h2>欢迎使用后台管理系统</h2></el-form-item>
					<el-form-item label="账号"><el-input v-model="form.name"></el-input></el-form-item>
					<el-form-item label="密码"><el-input v-model="form.password"></el-input></el-form-item>
					<el-button type="primary" @click="onSubmit" round>登录</el-button>
				</el-form>
			</el-card>
		</el-row>
	</div>
</template>

<script>
export default {
	data() {
		return {
			form: {
				name: '', //账户
				password: '' //密码
			}
		};
	},
	methods: {
		onSubmit: function() {
			console.log(this.form);
			if (this.form.name == '' || this.form.password == '') {
				this.$message({
					showClose: true,
					message: '账号密码不能为空',
					type: 'error'
				});
				return;
			}
			this.$router.push({ path: '/index' });
		}
	}
};
</script>

<style scoped>
.container {
	width: 100%;
	height: 100%;
	background-image: url(../../../static/main-background.jpg);
	display: flex;
	justify-content: center;
	align-items: center;
}
.form-container {
	background-color: rgba(255, 255, 255, 0.5);
	padding: 2.5rem;
	width: 21.875rem;
}
</style>
