<?php

require_once __DIR__.'/../vendor/autoload.php';

$app = new Silex\Application();
$app['debug'] = true;

$app->register(new Silex\Provider\TwigServiceProvider(), array(
    'twig.path' => __DIR__.'/../views',
));

$app->get('/', function() use ($app) {
    return $app['twig']->render('home.html.twig', array(
        'page' => 'home',
    ));
});

$app->get('/team', function() use ($app) {
    return $app['twig']->render('team.html.twig', array(
        'page' => 'team',
    ));
});

$app->get('/agilite', function() use ($app) {
    return $app['twig']->render('agilite.html.twig', array(
        'page' => 'agilite',
    ));
});

$app->get('/contact', function() use ($app) {
    return $app['twig']->render('contact.html.twig', array(
        'page' => 'contact',
    ));
});

// MODE DEBUG : Route for animation developpement, to delete when release come
$app->get('/anim', function() use ($app) {
    return $app['twig']->render('animation.html.twig', array(
        'page' => '',
    ));
});

$app->get('/anim2', function() use ($app) {
    return $app['twig']->render('animation2.html.twig', array(
        'page' => '',
    ));
});


$app->run();
