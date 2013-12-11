<?php

require_once __DIR__.'/../vendor/autoload.php';

$app = new Silex\Application();
$app['debug'] = true;

$app->register(new Silex\Provider\TwigServiceProvider(), array(
    'twig.path' => __DIR__.'/../views',
));

$app->get('/', function() use ($app) {
    return $app['twig']->render('home.html.twig', array(
    ));
});

$app->get('/team', function() use ($app) {
    return $app['twig']->render('team.html.twig', array(
    ));
});

$app->get('/agilite', function() use ($app) {
    return $app['twig']->render('agilite.html.twig', array(
    ));
});

$app->get('/contact', function() use ($app) {
    return $app['twig']->render('contact.html.twig', array(
    ));
});

$app->run();
