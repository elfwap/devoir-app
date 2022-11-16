<?php

define('APPLICATION_NAMESPACE', 'DevoirApp\\');
# Uncomment the next 'define' line to set the base path, to the defined path, which can be changed from default.
# The framework normarly does that automatically.
//define('BASE_PATH', dirname(dirname(__FILE__)));
//define('BASE_SOURCE_PATH', dirname(dirname(__FILE__)) . DIRECTORY_SEPARATOR . 'src');
define('APP_SYSTEM_PATH', dirname(__FILE__));
# Same things as 'BASE_SOURCE_PATH'
define('APP_SOURCE_PATH', dirname(dirname(__FILE__)) . DIRECTORY_SEPARATOR . 'src');

define('APP_PUBLIC_PATH', dirname(dirname(__FILE__)) . DIRECTORY_SEPARATOR . 'public');

define('APP_CSS_PATH', APP_PUBLIC_PATH . DIRECTORY_SEPARATOR . 'css');

define('APP_JS_PATH', APP_PUBLIC_PATH . DIRECTORY_SEPARATOR . 'js');

define('APP_IMG_PATH', APP_PUBLIC_PATH . DIRECTORY_SEPARATOR . 'img');
