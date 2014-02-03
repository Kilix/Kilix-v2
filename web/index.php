<?php

require_once __DIR__.'/../vendor/autoload.php';

use Silex\Application;
use Binfo\Silex\MobileDetectServiceProvider;
use Symfony\Component\HttpFoundation\Response;


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

$app->get('/contact', function() use ($app) {
    return $app['twig']->render('contact.html.twig', array(
        'page'    => 'contact',
        'ress'    => $app["mobile_detect"],
        'browser' =>  get_browser(null, true)
    ));
});

$app->error(function (\Exception $e, $code) use ($app){
    switch ($code) {
        case 404:
            return $app['twig']->render('404.html.twig', array(
                ));
            break;
    }

    return new Response($message);
});


$app->run();
