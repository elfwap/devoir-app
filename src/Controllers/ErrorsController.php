<?php
namespace DevoirApp\Controllers;

use Devoir\Controller;
use Devoir\Interfaces\{DevoirEventInterface, ControllerEventInterface};

/**
* 
*/

class ErrorsController extends Controller
{
	public function index(...$args)
	{
		$this->setView('error', 'error', 'error');
	}
	public function fours($code, $message, $line, $file)
	{
		$this->setView('error', 'error', 'error');
		$title = "Client Error";
		$code -= 1000;
		$this->setTitle("$code: $title");
		$error = [
			'title' => $title,
			'code' => $code,
			'message' => $message,
			'line' => '',
			'file' => ''
		];
		$this->setViewVar(compact('error'));
		return $this;
	}
	public function fives($code, $message, $line, $file)
	{
		$this->setView('error', 'error', 'error');
		$title = "Server Error";
		$code -= 1000;
		$this->setTitle("$code : $title");
		$error = [
			'title' => $title,
			'code' => $code,
			'message' => $message,
			'line' => '',
			'file' => ''
		];
		$this->setViewVar(compact('error'));
		return $this;
	}
	public function gens($code, $title, $message, $line, $file)
	{
		$this->setView('error', 'error', 'error');
		$this->setTitle($code . ": " . $title);
		$error = [
			'title' => $title,
			'code' => $code,
			'message' => $message,
			'line' => $line,
			'file' => $file
		];
		$this->setViewVar(compact('error'));
		return $this;
	}
}