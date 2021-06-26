<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    /** @Route("/{_locale}", name="index", methods={"GET"}) */
    public function indexAction(Request $request): Response
    {
        $locale = $request->getLocale();

        return $this->render(
            'base.html.twig',
            [
                '_locale' => $locale
            ]
        );
    }
}