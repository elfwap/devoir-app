<?php

?>
<header class="navbar navbar-dark sticky-top x-theme-dark flex-md-nowrap p-0 shadow">
	<a id="title" class="navbar-brand col-md-3 col-lg-2 me-0 px-1 x-hover-theme-l3 w3-btn" href="#" title="Information about">Devoir App</a>
	<button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	</button>
	<form id="tnb_search" class="form w-100">
		<input id="tnb_query" class="form-control w-100 x-theme-l2 x-hover-theme-l3 w3-hover-shadow x-focus-theme-l4 x-text-theme" type="search" name="q" placeholder="Search..." />
	</form>
	<a href="#" id="btn-signout" class="btn x-theme-d3 text-nowrap mx-2 px-1 w3-hover-shadow x-hover-theme">Login</a>
	<div class="dropdown mx-2">
		<button class="btn x-border-theme x-theme-dark x-hover-theme dropdown-toggle" type="button" id="dropdownActionsButton" data-bs-toggle="dropdown" aria-expanded="false">
			Actions
		</button>
		<ul class="x-theme-d4 dropdown-menu dropdown-menu-end" aria-labelledby="dropdownActionsButton">
			<li><h6 class="dropdown-header x-text-theme">Action links</h6></li>
			<li><a class="dropdown-item w3-text-white x-hover-text-theme" href="#">Option</a></li>
			<li><hr class="dropdown-divider"></li>
			<li><a class="dropdown-item w3-text-white x-hover-text-theme" href="#">Generate Option</a></li>
		</ul>
	</div>
</header>
<div class="container-fluid">
	<div class="row">
		<nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse x-theme-l3">
			<div id="sidebarX" class="position-sticky pt-3">
				<ul class="nav flex-column">
					<li class="nav-item">
						<a class="nav-link x-hover-theme-d4 w3-hover-shadow" aria-current="page" href="#" title="Item">
							Item
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link x-hover-theme-d4 w3-hover-shadow" aria-current="page" href="#" title="Item">
							Item2
						</a>
					</li>
				</ul>
				<h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
					<span>Saved reports</span>
					<a class="link-secondary x-hover-theme-l5 w3-circle" href="#" aria-label="Add a new report">
						<span>Itemx</span>
					</a>
        		</h6>
        		<ul class="nav flex-column mb-2">
			<li class="nav-item">
				<a class="nav-link" href="#">
					<span data-feather="file-text"></span>
              		Current month
				</a>
			</li>
		</ul>
			</div>
			
		</nav>
	</div>
</div>