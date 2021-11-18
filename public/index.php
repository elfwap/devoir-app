<?php

require dirname(__DIR__) . DIRECTORY_SEPARATOR . 'vendor' . DIRECTORY_SEPARATOR . 'autoload.php';

use Devoir\Exception\DevoirException;
use DevoirApp\Application;

if (!isset($ht_accessed)) {
	if (strpos(PHP_SAPI, 'cli') === 0) {
		$ht_accessed = false;
	}
	elseif (strpos(PHP_SAPI, 'apache') === 0) {
		$ht_accessed = true;
	}
}
try{
	$app = new Application(dirname(dirname(__FILE__)) . DIRECTORY_SEPARATOR . 'system');
}
catch (DevoirException $dexcept)
{
	print_r($dexcept->getMessage());
}
