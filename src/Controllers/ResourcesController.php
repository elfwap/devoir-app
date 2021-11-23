<?php
namespace DevoirApp\Controllers;

use Devoir\Controller;
use Devoir\Exception\ForbiddenException;

class ResourcesController extends Controller
{
	public function index(...$args){
		throw new ForbiddenException(['Cannot access `root` of resources.']);
	}
}
