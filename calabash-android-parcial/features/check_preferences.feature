Feature: Preferences
  An As a user I want change aparence on the application.

  Scenario: Enter the main page as an anonymous user.
   When I press the "MANTENERSE ANÓNIMO" button
   #Then I press the "CERRAR" button
   Then I should see "principal"

  Scenario Outline: Change aparence on the application.
   Then I should see "principal"
   #Then Is background color on "RedReader" text
   Then I press on exists button <pressBtn>
   Then I press the menu key 
   Then I touch the "Preferencias" text
   Then I touch the "Apariencia" text
   Then I touch the <colorOld> text
   Then I touch the <colorNew> text
   Then I go back
   
   Then I go back
   #Then I press the "CERRAR" button
   #Then I wait for 5 seconds  

   Examples:
      |colorOld |colorNew  | pressBtn|
      |"Rojo"   |"Verde"   | "CERRAR"|
      |"Verde"  |"Noche"   |""|
      |"Noche"  |"Azul"   |""|
      |"Azul"  |"Naranja"   |""|
      |"Naranja"  |"Gris"   |""|
      |"Gris"  |"Noche (bajo contraste)"   |""|