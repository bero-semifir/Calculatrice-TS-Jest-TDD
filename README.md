# Jest Calculatrice

Projet simple pour découvrir Jest, les tests unitaire et la méthodologie TDD.

## Installer le projet

`npm install`

## Lancer le projet

`npm start`

## Lancer les tests

`npm test` ou `npx jest`

Avec Coverage : `npm test -- --coverage` ou `npx jest --coverage`

## Méthodologie TDD

Test Driven Design: Développement piloté par les tests

1. On déclare la fonction, **sans l'implémenter** (pas de logique)
2. On rédige le test en fonction des attentes du programme
3. On lance le test, il échoue, tout va bien! (si il réussi il y a un problème)
4. On écrit le minimum de code pour faire réussir le test (KISS)
5. Le test passe au vert
6. On peut refactoriser / implémenter d'autres tests

L'avantage est de construire une base de tests en même temps que le code.
