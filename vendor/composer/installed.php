<?php return array(
    'root' => array(
        'pretty_version' => '1.0.0+no-version-set',
        'version' => '1.0.0.0',
        'type' => 'project',
        'install_path' => __DIR__ . '/../../',
        'aliases' => array(),
        'reference' => NULL,
        'name' => 'elfwap/devoir-app',
        'dev' => true,
    ),
    'versions' => array(
        'elfwap/devoir' => array(
            'pretty_version' => 'dev-master',
            'version' => 'dev-master',
            'type' => 'library',
            'install_path' => __DIR__ . '/../elfwap/devoir',
            'aliases' => array(
                0 => '9999999-dev',
            ),
            'reference' => '590465a29cd0c47d830a0e49398d751fdb663fcb',
            'dev_requirement' => false,
        ),
        'elfwap/devoir-app' => array(
            'pretty_version' => '1.0.0+no-version-set',
            'version' => '1.0.0.0',
            'type' => 'project',
            'install_path' => __DIR__ . '/../../',
            'aliases' => array(),
            'reference' => NULL,
            'dev_requirement' => false,
        ),
    ),
);
