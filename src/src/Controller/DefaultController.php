<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    /** @Route("/{_locale}", name="index", methods={"GET"}) */
    public function indexAction(): Response
    {
        return $this->render('base.html.twig');
    }
}