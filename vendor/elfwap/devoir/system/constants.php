<?php

//MISC CONSTANTS
if (!defined('YES')) define('YES', true);
if (!defined('Yes')) define('Yes', true);
if (!defined('yes')) define('yes', true);
if (!defined('NO')) define('NO', false);
if (!defined('No')) define('No', false);
if (!defined('no')) define('no', false);
#TIME
if (!defined('SEC_SECOND')) define('SEC_SECOND', 1);
if (!defined('SEC_MINUTE')) define('SEC_MINUTE', 60);
if (!defined('SEC_HOUR')) define('SEC_HOUR', 3600);
if (!defined('SEC_DAY')) define('SEC_DAY', 86400);
if (!defined('SEC_WEEK')) define('SEC_WEEK', 604800);
if (!defined('SEC_MONTH')) define('SEC_MONTH', 2592000);
if (!defined('SEC_YEAR')) define('SEC_YEAR', 31536000);
if (!defined('MIL_SECOND')) define('MIL_SECOND', 1000);
if (!defined('MIL_MINUTE')) define('MIL_MINUTE', 60000);
if (!defined('MIL_HOUR')) define('MIL_HOUR', 3600000);
if (!defined('MIL_DAY')) define('MIL_DAY', 86400000);
if (!defined('MIL_WEEK')) define('MIL_WEEK', 604800000);
if (!defined('MIL_MONTH')) define('MIL_MONTH', 2592000000);
if (!defined('MIL_YEAR')) define('MIL_YEAR', 31536000000);
//APPLICATION PROPERTIES
if (!defined('APPLICATION_NAMESPACE')) {
	define('APPLICATION_NAMESPACE', 'App\\');
}
if (!defined('CONTROLLERS_NAMESPACE')) {
	define('CONTROLLERS_NAMESPACE', APPLICATION_NAMESPACE . 'Controllers\\');
}
if (!defined('MODELS_NAMESPACE')) {
	define('MODELS_NAMESPACE', APPLICATION_NAMESPACE . 'Models\\');
}
if (!defined('VIEWS_NAMESPACE')) {
	define('VIEWS_NAMESPACE', APPLICATION_NAMESPACE . 'Views\\');
}
if (!defined('IS_DEBUG')) {
	define('IS_DEBUG', true);
}
if (!defined('DEFAULT_CONTROLLER')) {
	define('DEFAULT_CONTROLLER', 'AppController');
}
if (!defined('DEFAULT_ACTION')) {
	define('DEFAULT_ACTION', 'index');
}
//EXCEPTION CODES
define('DEVOIR_EXCEPTION_CODE', 1001);
define('MISSING_CONTROLLER_EXCEPTION_CODE', 1002);
define('MISSING_ACTION_EXCEPTION_CODE', 1003);
define('EVENT_LISTENER_EXCEPTION_CODE', 1004);
define('MISSING_INHERITANCE_EXCEPTION_CODE', 1005);
#FOR CLIENT REQUESTS
define('BAD_REQUEST_EXCEPTION_CODE', 1400);
define('UNAUTHORIZED_EXCEPTION_CODE', 1401);
define('PAYMENT_REQUIRED_EXCEPTION_CODE', 1402);
define('FORBIDDEN_EXCEPTION_CODE', 1403);
define('NOT_FOUND_EXCEPTION_CODE', 1404);
define('METHOD_NOT_ALLOWED_EXCEPTION_CODE', 1405);
define('NOT_ACCEPTABLE_EXCEPTION_CODE', 1406);
define('PROXY_AUTHENTICATION_REQUIRED_EXCEPTION_CODE', 1407);
define('REQUEST_TIMEOUT_EXCEPTION_CODE', 1408);
define('CONFLICT_EXCEPTION_CODE', 1409);
define('GONE_EXCEPTION_CODE', 1410);
define('LENGTH_REQUIRED_EXCEPTION_CODE', 1411);
define('PRECONDITION_FAILED_EXCEPTION_CODE', 1412);
define('PAYLOAD_TOO_LARGE_EXCEPTION_CODE', 1413);
define('URI_TOO_LONG_EXCEPTION_CODE', 1414);
define('UNSUPPORTED_MEDIA_TYPE_EXCEPTION_CODE', 1415);
define('RANGE_NOT_SATISFIABLE_EXCEPTION_CODE', 1416);
define('EXPECTATION_FAILED_EXCEPTION_CODE', 1417);
define('TEAPOT_EXCEPTION_CODE', 1418);
define('MISDIRECTED_REQUEST_EXCEPTION_CODE', 1421);
define('UNPROCESSABLE_ENTITY_EXCEPTION_CODE', 1422);
define('LOCKED_EXCEPTION_CODE', 1423);
define('FAILED_DEPENDENCY_EXCEPTION_CODE', 1424);
define('TOO_EARLY_EXCEPTION_CODE', 1425);
define('UPGRADE_REQUIRED_EXCEPTION_CODE', 1426);
define('PRECONDITION_REQUIRED_EXCEPTION_CODE', 1428);
define('TOO_MANY_REQUESTS_EXCEPTION_CODE', 1429);
define('REQUEST_HEADER_FIELDS_TOO_LARGE_EXCEPTION_CODE', 1431);
define('UNAVAILABLE_FOR_LEGAL_REASONS_EXCEPTION_CODE', 1451);
# FOR SERVER RESPONSE
define('INTERNAL_SERVER_ERROR_EXCEPTION_CODE', 1500);
define('NOT_IMPLEMENTED_EXCEPTION_CODE', 1501);
define('BAD_GATEWAY_EXCEPTION_CODE', 1502);
define('SERVICE_UNAVAILABLE_EXCEPTION_CODE', 1503);
define('GATEWAY_TIMEOUT_EXCEPTION_CODE', 1504);
define('HTTP_VERSION_NOT_SUPPORTED_EXCEPTION_CODE', 1505);
define('VARIANT_ALSO_NEGOTIATES_EXCEPTION_CODE', 1506);
define('INSUFFICIENT_STORAGE_EXCEPTION_CODE', 1507);
define('LOOP_DETECTED_EXCEPTION_CODE', 1508);
define('NOT_EXTENDED_EXCEPTION_CODE', 1510);
define('NETWORK_AUTHENTICATION_REQUIRED_EXCEPTION_CODE', 1511);
# FOR REDIRECT RESPONSE
define('MULTIPLE_CHOICE_EXCEPTION_CODE', 1300);
define('MOVED_PERMANENTLY_EXCEPTION_CODE', 1301);
define('MOVED_TEMPORARILY_EXCEPTION_CODE', 1302);
define('SEE_OTHER_EXCEPTION_CODE', 1303);
define('NOT_MODIFIED_EXCEPTION_CODE', 1304);
define('USE_PROXY_EXCEPTION_CODE', 1305);
define('SWITCH_PROXY_EXCEPTION_CODE', 1306);
define('TEMPORARY_REDIRECT_EXCEPTION_CODE', 1307);
define('PERMANENT_REDIRECT_EXCEPTION_CODE', 1308);
//PATHS
define('DS', DIRECTORY_SEPARATOR);
define('ROOT_PATH', $_SERVER['DOCUMENT_ROOT']);
if (!defined('BASE_PATH') || !defined('BASE_SOURCE_PATH')) {
	$a = str_replace(ROOT_PATH, "", dirname(__FILE__));
	$a = str_replace('\/', DS, $a);
	$a = trim($a, DS);
	$b = 0;
	$a = str_replace(DS . 'vendor' . DS . 'elfwap' . DS . 'devoir' . DS . 'system', "", $a, $b);
	if ($b < 1) {
		if (!defined('BASE_PATH')) define('BASE_PATH', ROOT_PATH);
		if (!defined('BASE_SOURCE_PATH')) define('BASE_SOURCE_PATH', ROOT_PATH . DS . 'src');
	} else {
		if (!defined('BASE_PATH')) define('BASE_PATH', $a);
		if (strlen($a) < 1) {
			if (!defined('BASE_SOURCE_PATH')) define('BASE_SOURCE_PATH', ROOT_PATH . DS . 'src');
		} elseif (strlen($a) > 0) {
			if (!defined('BASE_SOURCE_PATH')) define('BASE_SOURCE_PATH', ROOT_PATH . DS . $a . DS . 'src');
		}
	}
}
if (!defined('CONTROLLERS_PATH')) {
	define('CONTROLLERS_PATH', (empty(BASE_SOURCE_PATH) ? BASE_SOURCE_PATH : (BASE_SOURCE_PATH . DS)) . "Controllers" . DS);
}

if (!defined('MODELS_PATH')) {
	define('MODELS_PATH', (empty(BASE_SOURCE_PATH) ? BASE_SOURCE_PATH : (BASE_SOURCE_PATH . DS)) . "Models" . DS);
}
if (!defined('VIEWS_PATH')) {
	define('VIEWS_PATH', (empty(BASE_SOURCE_PATH) ? BASE_SOURCE_PATH : (BASE_SOURCE_PATH . DS)) . "Views" . DS);
}
//URL CONFIG
define('URL_TYPE_QUERY', 2000);
define('URL_TYPE_SLASH', 2001);
//CONFIG TYPES
define('CONFIG_AS_ARRAY', 2100);
define('CONFIG_AS_OBJECT', 2101);
define('CONFIG_AS_JSON', 2102);
//RESPONSE CODES
#1XX
define('RESPONSE_CODE_CONTINUE', 100);
define('RESPONSE_CODE_SWITCHING_PROTOCOLS', 101);
define('RESPONSE_CODE_PROCESSING', 102);
define('RESPONSE_CODE_EARLY_HINTS', 103);
//Caching Warning Codes
define('RESPONSE_CODE_STALE', 110);
define('RESPONSE_CODE_REVALIDATION_FAILED', 111);
define('RESPONSE_CODE_DISCONNECTED_OPERATION', 112);
define('RESPONSE_CODE_MISC_WARNING', 199);
#2XX
define('RESPONSE_CODE_OK', 200);
define('RESPONSE_CODE_CREATED', 201);
define('RESPONSE_CODE_ACCEPTED', 202);
define('RESPONSE_CODE_NON_AUTHORITATIVE_INFO', 203);
define('RESPONSE_CODE_NO_CONTENT', 204);
define('RESPONSE_CODE_RESET_CONTENT', 205);
define('RESPONSE_CODE_PARTIAL_CONTENT', 206);
define('RESPONSE_CODE_MULTI_STATUS', 207);
define('RESPONSE_CODE_ALREADY_REPORTED', 208);
//Caching Warning Codes
define('RESPONSE_CODE_TRANSFORMATION_APPLIED', 214);
define('RESPONSE_CODE_MISC_PERSISTENT_WARNING', 299);
define('RESPONSE_CODE_INSTANCE_MANIPULATIONS_USED', 226);
#3XX
define('RESPONSE_CODE_MULTIPLE_CHOICES', 300);
define('RESPONSE_CODE_MOVED_PERMANENTLY', 301);
define('RESPONSE_CODE_MOVED_TEMPORARILY', 302);
define('RESPONSE_CODE_SEE_OTHER', 303);
define('RESPONSE_CODE_NOT_MODIFIED', 304);
define('RESPONSE_CODE_USE_PROXY', 305);
define('RESPONSE_CODE_SWITCH_PROXY', 306);
define('RESPONSE_CODE_TEMPORARY_REDIRECT', 307);
define('RESPONSE_CODE_PERMANENT_REDIRECT', 308);
#4XX
define('RESPONSE_CODE_BAD_REQUEST', 400);
define('RESPONSE_CODE_UNAUTHORIZED', 401);
define('RESPONSE_CODE_PAYMENT_REQUIRED', 402);
define('RESPONSE_CODE_FORBIDDEN', 403);
define('RESPONSE_CODE_NOT_FOUND', 404);
define('RESPONSE_CODE_METHOD_NOT_ALLOWED', 405);
define('RESPONSE_CODE_NOT_ACCEPTABLE', 406);
define('RESPONSE_CODE_PROXY_AUTHENTICATION_REQUIRED', 407);
define('RESPONSE_CODE_REQUEST_TIMEOUT', 408);
define('RESPONSE_CODE_CONFLICT', 409);
define('RESPONSE_CODE_GONE', 410);
define('RESPONSE_CODE_LENGTH_REQUIRED', 411);
define('RESPONSE_CODE_PRECONDITION_FAILED', 412);
define('RESPONSE_CODE_PAYLOAD_TOO_LARGE', 413);
define('RESPONSE_CODE_URI_TOO_LONG', 414);
define('RESPONSE_CODE_UNSUPPORTED_MEDIA_TYPE', 415);
define('RESPONSE_CODE_RANGE_NOT_SATISFIABLE', 416);
define('RESPONSE_CODE_EXPECTATION_FAILED', 417);
define('RESPONSE_CODE_TEAPOT', 418);
define('RESPONSE_CODE_MISDIRECTED_REQUEST', 421);
define('RESPONSE_CODE_UNPROCESSABLE_ENTITY', 422);
define('RESPONSE_CODE_LOCKED', 423);
define('RESPONSE_CODE_FAILED_DEPENDENCY', 424);
define('RESPONSE_CODE_TOO_EARLY', 425);
define('RESPONSE_CODE_UPGRADE_REQUIRED', 426);
define('RESPONSE_CODE_PRECONDITION_REQUIRED', 428);
define('RESPONSE_CODE_TOO_MANY_REQUESTS', 429);
define('RESPONSE_CODE_REQUEST_HEADER_FIELDS_TOO_LARGE', 431);
define('RESPONSE_CODE_UNAVAILABLE_FOR_LEGAL_REASONS', 451);
#5XX
define('RESPONSE_CODE_INTERNAL_SERVER_ERROR', 500);
define('RESPONSE_CODE_NOT_IMPLEMENTED', 501);
define('RESPONSE_CODE_BAD_GATEWAY', 502);
define('RESPONSE_CODE_SERVICE_UNAVAILABLE', 503);
define('RESPONSE_CODE_GATEWAY_TIMEOUT', 504);
define('RESPONSE_CODE_HTTP_VERSION_NOT_SUPPORTED', 505);
define('RESPONSE_CODE_VARIANT_ALSO_NEGOTIATES', 506);
define('RESPONSE_CODE_INSUFFICIENT_STORAGE', 507);
define('RESPONSE_CODE_LOOP_DETECTED', 508);
define('RESPONSE_CODE_NOT_EXTENDED', 510);
define('RESPONSE_CODE_NETWORK_AUTHENTICATION_REQUIRED', 511);
#UN-OFFICIAL CODES
/**
 * 
 * Resumable requests proposal to resume aborted PUT or POST requests
 * @var int
 */
define('RESPONSE_CODE_CHECKPOINT', 103);
# Apache Web Server
define('RESPONSE_CODE_THIS_IS_FINE', 218);
#IIS
define('RESPONSE_CODE_LOGIN_TIMEOUT', 440);
define('RESPONSE_CODE_RETRY_WITH', 449);
define('RESPONSE_CODE_REDIRECT', 451);
#NGINX
define('RESPONSE_CODE_NO_RESPONSE', 444);
define('RESPONSE_CODE_REQUEST_HEADER_TOO_LARGE', 494);
define('RESPONSE_CODE_SSL_CERTIFICATE_ERROR', 495);
define('RESPONSE_CODE_SSL_CERTIFICATE_REQUIRED', 496);
define('RESPONSE_CODE_HTTP_REQUEST_SENT_TO_HTTPS_PORT', 497);
define('RESPONSE_CODE_CLIENT_CLOSED_REQUEST', 499);
//EVENTS CONSTANTS
define('EVENT_ON_INITIALIZE', 'onInitialize');
define('EVENT_ON_TERMINATE', 'onTerminate');
define('EVENT_CONTROLLER_BEFORE_RUNUP', 'beforeRunUp');
define('EVENT_CONTROLLER_AFTER_RUNUP', 'afterRunUp');
define('EVENT_CONTROLLER_BEFORE_DISPATCH', 'beforeDispatch');
define('EVENT_CONTROLLER_AFTER_DISPATCH', 'afterDispatch');
define('EVENT_CONTROLLER_BEFORE_MANIFEST', 'beforeManifest');
define('EVENT_CONTROLLER_AFTER_MANIFEST', 'afterManifest');
