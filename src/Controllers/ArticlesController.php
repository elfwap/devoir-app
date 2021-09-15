<?php
namespace DevoirApp\Controllers;

use Devoir\Controller;
use Devoir\Interfaces\DevoirEventInterface;

/**
 *
 * @author User
 *        
 */
class ArticlesController extends Controller
{
	public function index($a, $b){
		echo $a . '<br />';
		echo $b . '<br />';
		return $this->redirectToAction('web');
	}
	public function onInitialize(DevoirEventInterface $event){
		echo 'init <br />';
	}

	/**
	 */
	function __destruct()
	{

		// TODO - Insert your code here
	}
}

