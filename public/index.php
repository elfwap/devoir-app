<?php

require dirname(__DIR__) . DIRECTORY_SEPARATOR . 'vendor' . DIRECTORY_SEPARATOR . 'autoload.php';

use Devoir\Exception\DevoirException;
use DevoirApp\Application;

try{
	$app = new Application(dirname(dirname(__FILE__)) . DIRECTORY_SEPARATOR . 'system');
}
catch (DevoirException $dexcept)
{
	print_r($dexcept->getMessage());
}