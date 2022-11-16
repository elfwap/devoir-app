<?php
namespace DevoirApp\Controllers;

use Devoir\Controller;
use Devoir\Exception\{ForbiddenException, NotFoundException};
/**
 * Resources Controller, Controller for data files that aren't `php`
 * @namespace DevoirApp\Controllers
 * @author Muhammad Tahir Abdullahi <muhammedtahirabdullahi@gmail.com>
 * @copyright Elftech Inc. <https://github.com/elfwap/devoir-app>
 * @package elfwap/devoir-app
 * @license https://opensource.org/licenses/mit-license.php MIT License
 */
class ResourcesController extends Controller
{
	public function index(){
		throw new ForbiddenException(['Cannot access `root` of resources..']);
	}
	public function css(...$filename){
		$cssDir = APP_CSS_PATH;
		$fnarr = $filename;
		$filename = $cssDir . DS . implode(DS, $filename);
		$fnexp = explode('/', $this->basic_request->getPath());
		if (count($fnarr) > 0) $fnarr[count($fnarr) - 1] = $fnexp[count($fnexp) - 1];
		$filename = urldecode($filename);
		$filename2 = $cssDir . DS . implode(DS, $fnarr);
		$filename2 = urldecode($filename2);
		if (file_exists($filename)) {
			header('Accept-Ranges: bytes');
			header('Content-Type: text/css');
			require $filename;
		} elseif (file_exists($filename2)) {
			header('Accept-Ranges: bytes');
			header('Content-Type: text/css');
			require $filename2;
		} else {
			throw new NotFoundException('CSS file not found');
		}
	}
	public function js(...$filename){
		$jsDir = APP_JS_PATH;
		$fnarr = $filename;
		$filename = $jsDir . DS . implode(DS, $filename);
		$fnexp = explode('/', $this->basic_request->getPath());
		if (count($fnarr) > 0) $fnarr[count($fnarr) - 1] = $fnexp[count($fnexp) - 1];
		$filename = urldecode($filename);
		$filename2 = $jsDir . DS . implode(DS, $fnarr);
		$filename2 = urldecode($filename2);
		if (file_exists($filename)) {
			header('Accept-Ranges: bytes');
			header('Content-Type: application/javascript');
			echo file_get_contents($filename);
		} elseif (file_exists($filename2)) {
			header('Accept-Ranges: bytes');
			header('Content-Type: application/javascript');
			echo file_get_contents($filename2);
		} else {
			throw new NotFoundException('Javascript file not found');
		}
	}
	public function img(...$filename){
		$imgDir = APP_IMG_PATH;
		$fnarr = $filename;
		$filename = $imgDir . DS . implode(DS, $filename);
		$fnexp = explode('/', $this->basic_request->getPath());
		if (count($fnarr) > 0) $fnarr[count($fnarr) - 1] = $fnexp[count($fnexp) - 1];
		$filename = urldecode($filename);
		$filename2 = $imgDir . DS . implode(DS, $fnarr);
		$filename2 = urldecode($filename2);
		if (file_exists($filename)) {
			header('Accept-Ranges: bytes');
			header('Content-Type: ' . mime_content_type($filename));
			echo file_get_contents($filename);
		} elseif (file_exists($filename2)) {
			header('Accept-Ranges: bytes');
			header('Content-Type: ' . mime_content_type($filename2));
			echo file_get_contents($filename2);
		} else {
			throw new NotFoundException('Image file not found');
		}
	}
}
