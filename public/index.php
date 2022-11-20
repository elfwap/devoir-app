<?php

require dirname(__DIR__) . DIRECTORY_SEPARATOR . 'vendor' . DIRECTORY_SEPARATOR . 'autoload.php';

use Devoir\Exception\{DevoirException, Client4XXException, Server5XXException, BadRequestException, ForbiddenException, NotFoundException};
use Devoir\{Controller, Configuration};
use DevoirApp\Application;

if (!isset($ht_accessed)) {
	if (strpos(PHP_SAPI, 'cli') === 0) {
		$ht_accessed = false;
	}
	elseif (strpos(PHP_SAPI, 'apache') === 0) {
		$ht_accessed = true;
	}
}
try {
	$app = new Application(dirname(dirname(__FILE__)) . DIRECTORY_SEPARATOR . 'system');
} catch (BadRequestException $badexp) {
	$ctrl = new Controller('errors', 'fours', [$badexp->getCode(), $badexp->getMessage(), $badexp->getLine(), $badexp->getFile()], dirname(dirname(__FILE__)) . DIRECTORY_SEPARATOR . 'system');
	$ctrl->run();
} catch (ForbiddenException $forexp) {
	$ctrl = new Controller('errors', 'fours', [$forexp->getCode(), $forexp->getMessage(), $forexp->getLine(), $forexp->getFile()], dirname(dirname(__FILE__)) . DIRECTORY_SEPARATOR . 'system');
	$ctrl->run();
} catch (NotFoundException $notexp) {
	$ctrl = new Controller('errors', 'fours', [$notexp->getCode(), $notexp->getMessage(), $notexp->getLine(), $notexp->getFile()], dirname(dirname(__FILE__)) . DIRECTORY_SEPARATOR . 'system');
	$ctrl->run();
} catch (Client4XXException $c400exp) {
	$ctrl = new Controller('errors', 'fours', [$c400exp->getCode(), $c400exp->getMessage(), $c400exp->getLine(), $c400exp->getFile()], dirname(dirname(__FILE__)) . DIRECTORY_SEPARATOR . 'system');
	$ctrl->run();
} catch (Server5XXException $s500exp) {
	$ctrl = new Controller('errors', 'fives', [$s500exp->getCode(), $s500exp->getMessage(), $s500exp->getLine(), $s500exp->getFile()], dirname(dirname(__FILE__)) . DIRECTORY_SEPARATOR . 'system');
	$ctrl->run();
} catch (DevoirException $dexcept) {
	$ctrl = new Controller('errors', 'gens', [$dexcept->getCode(), 'Devoir Exception', $dexcept->getMessage(), $dexcept->getLine(), $dexcept->getFile()], dirname(dirname(__FILE__)) . DIRECTORY_SEPARATOR . 'system');
	$ctrl->run();
} catch (\Exception $except) {
	$ctrl = new Controller('errors', 'gens', [$except->getCode(), 'Exception', $except->getMessage(), $except->getLine(), $except->getFile()], dirname(dirname(__FILE__)) . DIRECTORY_SEPARATOR . 'system');
	$ctrl->run();
} catch (\Error $err) {
	$ctrl = new Controller('errors', 'gens', [$err->getCode(), 'Error', $err->getMessage(), $err->getLine(), $err->getFile()], dirname(dirname(__FILE__)) . DIRECTORY_SEPARATOR . 'system');
	$ctrl->run();
} catch (\ErrorException $errexp) {
	$ctrl = new Controller('errors', 'gens', [$errexp->getCode(), 'ErrorException', $errexp->getMessage(), $errexp->getLine(), $errexp->getFile()], dirname(dirname(__FILE__)) . DIRECTORY_SEPARATOR . 'system');
	$ctrl->run();
}
