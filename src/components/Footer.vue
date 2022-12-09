<template>
	<div style="height: 500px;">
		<div style="height: 300px;"></div>
	<footer class="page-footer">
		
		<div class="container">
			<div class="row px-md-3">
				<div class="col-sm-6 col-lg-3 py-3">
					<h5>公司简介</h5>
					<ul class="footer-menu">
						<li><a href="#">关于我们</a></li>
						<li><a href="#">隐私保护</a></li>
					</ul>
				</div>
				<div class="col-sm-6 col-lg-3 py-3">
					<h5>更多</h5>
					<ul class="footer-menu">
						<li><a href="#">团队/状况</a></li>
						<li><a href="#">申请加入</a></li>
					</ul>
				</div>
				<div class="col-sm-6 col-lg-3 py-3">
					<h5>友情链接</h5>
					<ul class="footer-menu">
						<li><a href="http://www.nhc.gov.cn/">国家卫健委</a></li>
						<li><a href="https://www.huaihe.com.cn/">河南大学淮河医院</a></li>
						<li><a href="http://software.henu.edu.cn/">河南大学软件学院</a></li>
					</ul>
				</div>
				<div class="col-sm-6 col-lg-3 py-3">
					<h5>联系我们</h5>
					<p class="footer-link mt-2">河南大学金明校区东苑20楼</p>
					<a href="#" class="footer-link">666-666-6666</a>
					<a href="#" class="footer-link">Hansmsy129@hotmail.com</a>
				</div>
			</div>
			<hr>


		</div>
	</footer>
	</div>
</template>


<script>
	export default {
		name: "Footer",
		data() {
			return {
				msg: "Forcecare",
			};
		},
	};
</script>
<style scoped>
	#Footer {
		/*background:#F2F6FC;*/
		padding: 6px;
		border-radius: 5px;
		width: 80%;
		height: 80px;
		margin: 20px auto;
		margin-top: 140px;
	}

	p {
		color: #00d9a5;
		text-align: center;
		margin: 30px auto;
		font-size: 1.1em;
	}
</style>
