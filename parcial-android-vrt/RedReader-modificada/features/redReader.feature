Feature: Validar banner


  Scenario: Como un usuario quiero ver la opcion cuentas en el  menu de la aplicacion
    Given I press "Be anonymous"
    And I press "More options"
    And I press "Accounts"
    Then I take a screenshot
    Then I should see "Reddit Accounts"

  Scenario: Como un usuario quiero ver el banner de la aplicacion
#    Given I press "Be anonymous"
    Then I take a screenshot
    Then I should see "RedReader"


  Scenario: Como un usuario quiero ver la opcion de Todos los subreddits
#    Given I press "Be anonymous"
    And I press "All Subreddits"
    Then I wait for 3 seconds
    Then I take a screenshot
    Then I should see "All Subreddits"

  Scenario: Como un usuario quiero ver localizaciones de usuario

    And I press "Custom Location"
    Then I take a screenshot
    Then I should see "Subreddit"

  Scenario: Como un usuario quiero ver la opcion Temas en el menu de la aplicacion

 #    Given I press "Be anonymous"

    And I press "More options"
    And I press "Themes"
    Then I take a screenshot
    Then I should see "Theme"

  Scenario: Como un usuario quiero ver la opcion de pagina principal
 #    Given I press "Be anonymous"
    Then I press "Front Page"
    Then I wait for 3 seconds
    Then I take a screenshot
    Then I should see "Front Page"