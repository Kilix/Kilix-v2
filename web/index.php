<?php

require_once __DIR__.'/../vendor/autoload.php';

use Silex\Application;
use Binfo\Silex\MobileDetectServiceProvider;
use Symfony\Component\HttpFoundation\Response;

$app = new Application();
$app['debug'] = true;

$app['browser'] get_browser(null, true);
// $app['browser'] = ['browser' => null, 'majorver' => null];

$app->register(new Silex\Provider\TwigServiceProvider(), array(
    'twig.path' => __DIR__.'/../views',
));
$app->register(new MobileDetectServiceProvider());

$titles = array('home'    => "Kilix - L'agence digitale by EXTIA",
                'team' => "L'équipe de Kilix - L'agence digitale by EXTIA",
                'agilite'    => "L'agilité chez Kilix - L'agence digitale by EXTIA");

$app->get('/', function() use ($app, $titles) {
    return $app['twig']->render('home.html.twig', array(
        'page' => 'home',
        'ress' => $app["mobile_detect"],
        'browser' =>  $app['browser'],
        'titles' => $titles,
        'title' => "Kilix - L'agence digitale by EXTIA",
        'description' => "Kilix est une agence digitale fondée sur l'Agilité. Elle réalise des projets au forfait, du site vitrine à l'ERP sur mesure en passant par les middlewares."
    ));
});

$app->get('/team', function() use ($app, $titles) {
    return $app['twig']->render('team.html.twig', array(
        'page' => 'team',
        'ress' => $app["mobile_detect"],
        'browser' =>  $app['browser'],
        'titles' => $titles,
        'title' => "L'équipe de Kilix - L'agence digitale by EXTIA",
        'description' => "L’équipe Kilix est composée d’experts reconnus qui interviennent avec VOUS sur l’ensemble du projet."
    ));
});

$app->get('/agilite', function() use ($app, $titles) {
    return $app['twig']->render('agilite.html.twig', array(
        'page' => 'agilite',
        'ress' => $app["mobile_detect"],
        'browser' =>  $app['browser'],
        'titles' => $titles,
        'title' => "L'agilité chez Kilix - L'agence digitale by EXTIA",
        'description' => "Notre ADN : la culture Agile, pour nous, elle ne se limite pas à une méthodologie de gestion de projet. C’est notre philosophie."
    ));
});

// $app->get('/contact', function() use ($app) {
//     return $app['twig']->render('contact.html.twig', array(
//         'page'    => 'contact',
//         'ress'    => $app["mobile_detect"],
//         'browser' =>  $app['browser']
//     ));
// });

$app->error(function (\Exception $e, $code) use ($app){
    switch ($code) {
        case 404:
            return $app['twig']->render('404.html.twig', array(
                ));
            break;
    }

    return new Response($e->getMessage());
});

$app->get('/how-about-no', function() use ($app) {
    return $app['twig']->render('how-about-no.html.twig', array(
        'page' => '',
    ));
});



$app->run();
