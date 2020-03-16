Feature: Filter Task scenario

  Background:
    Given I am authenticated on the site 'https://todoist.com/Users/showLogin?mini=1' with my credentials,  login : 'holmangarcia@gmail.com'  and password: 'pruebatodoist'

  Scenario:  Multiple filters
    Given I am in dashboard
    When I click in text 'Bandeja de entrada'
    Then I should view 'Bandeja de entrada' as dashboard title
    When I click in text 'Próximos 7 días'
    Then I should view 'Próximos 7 días' as dashboard title
    When I click in text 'Hoy'
    Then I should view 'Hoy' as dashboard title
    When I click in text 'Asignado a mí'
    Then I should view 'assigned to: me' as dashboard title
    When I click in text 'Asignado a otros'
    Then I should view 'assigned to: others' as dashboard title
    When I click in text 'Prioridad 1'
    Then I should view 'Prioridad 1' as dashboard title
    When I click in text 'Prioridad 2'
    Then I should view 'Prioridad 2' as dashboard title
    When I click in text 'Prioridad 3'
    Then I should view 'Prioridad 3' as dashboard title
    When I click in text 'Prioridad 4'
    Then I should view 'Prioridad 4' as dashboard title
    #When I click in text 'Ver Todos'
    #Then I should view 'Todas las tareas' as dashboard title
    When I click in text 'Sin fecha de vencimiento'
    Then I should view 'Sin fecha de vencimiento' as dashboard title
    Then I close the browser

 #Scenario Outline:  Multiple filters
 #  Given I am in dashboard
 #  When I click in text <textToClick>
 #  Then I should view <titleToView> as dashboard title

 #  Examples:
 #    | textToClick          | titleToView          |
 #    | 'Bandeja de entrada' | 'Bandeja de entrada' |
 #    | 'Próximos 7 días'    | 'Próximos 7 días'    |
 #    | 'Hoy'                | 'Hoy'                |


 #Scenario Outline:   Filter List Item Sortable
 #  Given I am in dashboard
 #  When I click in text 'Filtros'
 #  When I click in text <itemFilter>
 #  Then I should view <titleToView> as dashboard title

 #  Examples:
 #    | itemFilter                 | titleToView                |
 #    | 'Asignado a mí'            | 'assigned to: me'          |
 #    | 'Asignado a otros'         | 'assigned to: others'      |
 #    | 'Prioridad 1'              | 'Prioridad 1'              |
 #    | 'Prioridad 2'              | 'Prioridad 2'              |
 #    | 'Prioridad 3'              | 'Prioridad 3'              |
 #    | 'Prioridad 4'              | 'Prioridad 4'              |
 #    | 'Ver Todos'                | 'Todas las tareas'         |
 #    | 'Sin fecha de vencimiento' | 'Sin fecha de vencimiento' |