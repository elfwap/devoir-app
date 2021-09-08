<?php
namespace DevoirApp;

use Devoir\Application as CoreApplication;
/**
 *
 * @namespace DevoirApp
 * @author Muhammad Tahir Abdullahi
 * @copyright Copyright (c) Elftech Inc.
 * @package elfwap/devoir-app
 * @license https://opensource.org/licenses/mit-license.php MIT License
 *        
 */
class Application extends CoreApplication
{
	public function __construct($systemDir = null) {
		parent::__construct($systemDir);
	}
	
}

