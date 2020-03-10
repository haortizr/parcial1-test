Feature: Open start page as anonymous

  Scenario: As a user anonymous I want apen start page on the application .
   Given I press the "MANTENERSE ANÓNIMO" button
   Then I wait for 2 seconds
   Then I touch the "Página principal" text
   Then I wait for 10 seconds
   Then I should see "reddit.com/hot"