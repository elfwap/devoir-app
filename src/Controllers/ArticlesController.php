<?php
namespace DevoirApp\Controllers;

use Devoir\Controller;
use Devoir\Interfaces\{DevoirEventInterface, ControllerEventInterface};

/**
 *
 * @author User
 *        
 */
class ArticlesController extends Controller
{
	public function index(...$a){
		$this->setViewVar('admin', "hello")->setViewVar(compact('a'));
		$this->setView("ignore", "ignore", "App");
		return $this;
	}
	public function onInitialize(DevoirEventInterface $event)
	{
	}
	public function beforeRunUp(ControllerEventInterface $event)
	{ 
	}
	public function afterRunUp(ControllerEventInterface $event)
	{
	}
	public function beforeDispatch(ControllerEventInterface $event)
	{
	}
	public function afterDispatch(ControllerEventInterface $event)
	{
	}
	public function beforeManifest(ControllerEventInterface $event)
	{
	}
	public function afterManifest(ControllerEventInterface $event)
	{
	}
	public function onTerminate(DevoirEventInterface $event)
	{
	}
}
