<template>
	<div>
		<header>
			<div class="topbar">
				<div class="container">
					<div class="row">
						<div class="col-sm-8 text-sm">
							<div class="site-info">
								<a href="#"><span class="mai-call text-primary"></span> +86 666 6666 6666</a>
								<span class="divider">|</span>
								<a href="#"><span class="mai-mail text-primary"></span> Hansmsy129@hotmail.com</a>
							</div>
						</div>
						<div class="col-sm-4 text-right text-sm">
							<div class="social-mini-button">
							</div>
						</div>
					</div>
				</div>
			</div>

			<nav class="navbar navbar-expand-lg navbar-light shadow-sm">
				<div class="container">
					<img src="/img/logo.png" alt="logo" style="width: 75px; height: 70px;">
					<a class="navbar-brand" href="#"><span class="text-primary">Forcecare</span>-皮肤疾病智能检测</a>

					<form action="#">
						<div class="input-group input-navbar">
							
							
							
						</div>
					</form>

					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupport"
						aria-controls="navbarSupport" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>

					<div class="collapse navbar-collapse" id="navbarSupport">
						<ul class="navbar-nav ml-auto">
							<li class="nav-item active">
								<router-link class="nav-link" to="index">主页</router-link>
							</li>
							<li class="nav-item">
								<router-link class="nav-link" to="/detail">关于我们</router-link>
							</li>

						</ul>
					</div>
				</div>
			</nav>

		</header>

		<div>
			<div class="page-hero bg-image overlay-dark" :style="{ backgroundImage: 'url(/img/bg_image_1.jpg)' }">
				<div class="hero-section">
					<div class="container text-center wow zoomIn">
						<img src="/img/logo.png" alt="logo" style="width: 220px; height: 190px;">
						<h3 class="subhead">让我们的生活更健康</h3>
						<h1 class="display-4">Focrecare</h1>
						<a href="#gogo" class="btn btn-primary">测试一下</a>
					</div>
				</div>
			</div>

			<div class="bg-light">
				<div class="page-section py-3 mt-md-n5 custom-index">
					<div class="container">
						<div class="row justify-content-center">
							<div class="col-md-4 py-3 py-md-0">
								<div class="card-service wow fadeInUp">
									<div class="circle-shape bg-secondary text-white">
										<span class="mai-chatbubbles-outline"></span>
									</div>
									<p><span></span>专业级的皮肤检测</p>
								</div>
							</div>
							<div class="col-md-4 py-3 py-md-0">
								<div class="card-service wow fadeInUp">
									<div class="circle-shape bg-primary text-white">
										<span class="mai-shield-checkmark"></span>
									</div>
									<p><span></span>专注于皮肤健康保护</p>
								</div>
							</div>
							<div class="col-md-4 py-3 py-md-0">
								<div class="card-service wow fadeInUp">
									<div class="circle-shape bg-accent text-white">
										<span class="mai-basket"></span>
									</div>
									<p><span></span>即时地疾病反馈</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="page-section pb-0">
				<div class="container">
					<div class="row align-items-center">
						<div class="col-lg-6 py-3 wow fadeInUp">
							<h1>3秒即时检测<br></h1>
							<h5 class="text-grey mb-4">
								1、上传您的皮肤图像<br>
								2、系统自动开始检测<br>
								3、查看您的结果<br>
								
							</h5>
							<p>
								用户条款：<br>
								本网站会严格加密用户图片，不会收集您的其他个人信息。<br>
								本网站检测结果仅代表本网站的立场，无法代表替代任何临床检测与治疗，若存在疾病请立即前往医院治疗。<br>
								禁止使用者上传非皮肤图片或直接或间接从事违反中华人民共和国法律法规，以及社会公德的行为。<br>
								检测结果的最终解释权为本公司所有。<br>
								如果您开始了检测，就代表您同意以上所有条款<br>
							</p>
							<a href="about.html" class="btn btn-primary">更多</a>
						</div>
						<div class="col-lg-6 wow">
							<div id="gogo" class="img-place custom-img-1">
								<img src="/img/bg-doctor.png" alt="">
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>
</template>
<script>
	export default {
		name: "MyHeader",
	};
</script>
<style>
	/* add your styles here */
</style>
