<?php

require_once __DIR__.'/../vendor/autoload.php';

use Silex\Application;
use Binfo\Silex\MobileDetectServiceProvider;

$app = new Application();
$app['debug'] = true;

$app->register(new Silex\Provider\TwigServiceProvider(), array(
    'twig.path' => __DIR__.'/../views',
));
$app->register(new MobileDetectServiceProvider());


$app->get('/', function() use ($app) {
    return $app['twig']->render('home.html.twig', array(
        'page' => 'home',
        'ress' => $app["mobile_detect"],
        'browser' =>  get_browser(null, true),
        'title' => "Kilix - L'Usine digitale"
    ));
});

$app->get('/team', function() use ($app) {
    return $app['twig']->render('team.html.twig', array(
        'page' => 'team',
        'ress' => $app["mobile_detect"],
        'browser' =>  get_browser(null, true),
        'title' => "Kilix | Team"
    ));
});

$app->get('/agilite', function() use ($app) {
    return $app['twig']->render('agilite.html.twig', array(
        'page' => 'agilite',
        'ress' => $app["mobile_detect"],
        'browser' =>  get_browser(null, true),
        'title' => "Kilix | Agilité"
    ));
});

// $app->get('/contact', function() use ($app) {
//     return $app['twig']->render('contact.html.twig', array(
//         'page'    => 'contact',
//         'ress'    => $app["mobile_detect"],
//         'browser' =>  get_browser(null, true)
//     ));
// });

$app->get('/how-about-no', function() use ($app) {
    return $app['twig']->render('how-about-no.html.twig', array(
        'page' => '',
    ));
});

// MODE DEBUG : Route for animation developpement, to delete when release come
// $app->get('/anim', function() use ($app) {
//     return $app['twig']->render('animation.html.twig', array(
//         'page' => '',
//     ));
// });

// $app->get('/anim2', function() use ($app) {
//     return $app['twig']->render('animation2.html.twig', array(
//         'page' => '',
//     ));
// });
// $app->get('/anim2', function() use ($app) {
//     return $app['twig']->render('animation2.html.twig', array(
//     ));
// });


$app->run();
