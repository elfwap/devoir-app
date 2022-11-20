<?php 
/**
 * @var \Devoir\View $this
 * @var array $error
 */
?>
<div id="container" class="x-theme-d5 w3-round">
	<h2 class="w3-border-red w3-bottombar" id="title"><?= $error['title']; ?></h2>
	<h1 id="code"><?= $error['code']; ?></h1>
	<p id="message" class="w3-panel w3-border-white w3-leftbar w3-rightbar">
		<?= $error['message']; ?><br />
		<?php if ($error['code'] < 400 || $error['code'] > 599): ?>
		On Line: [<?= $error['line']; ?>]<br />
		In File: [<?= $error['file']; ?>]
		<?php endif; ?>
	</p>
</div>