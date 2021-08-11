<?php

declare(strict_types=1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class MiniGameController extends AbstractController
    /**
     * @Route("{_locale}/mini-game", name="mini_game")
     */
{
    /**
     * @Route("/", name="index", methods={"GET"})
     */
    public function startMiniGameAction(Request $request)
    {
        return $this->render(
            'game.html.twig',
            [
                '_locale' => $request->getLocale()
            ]
        );
    }
}