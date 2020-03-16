Feature: Register scenario

  Scenario: Basic register error, email is already exists
    Given I go to the url of register 'https://todoist.com/Users/showRegister'
    When I write my register data, userName: 'Holman Garcia', email: 'ha.garcia@uniandes.edu.co' and  password: 'pruebatodoist'
    When I accept terms of service
    When I click in submit button
    Then I should view the result page with content: 'Email is already found in our database'

  Scenario: Basic register error, pending to accept terms
    Given I go to the url of register 'https://todoist.com/Users/showRegister'
    When I write my register data, userName: 'pedro', email: 'pedro@gmail.com' and  password: 'pruebatodoist'
    When I click in submit button
    Then I should view the result page with content: 'Acepta los Términos de servicio y la Política de privacidad.'

 Scenario Outline:  Multiple attempt to register
   Given I go to the url of register <registerUrl>
   When I write my register data, userName: <userName>, email: <email> and  password: <password>
   When I accept terms of service
   When I click in submit button
   Then I should view the result page with content: <resultContent>

   Examples:
     | registerUrl                              | userName             | email                             | password           | resultContent                                   |
     | 'https://todoist.com/Users/showRegister' | 'Holman Garcia'      | 'ha.garcia@uniandes.edu.co'       | 'pruebatodoist'    | 'Email is already found in our database'        |
     | 'https://todoist.com/Users/showRegister' | 'Holman'             | 'holman@gmail.com'                | 'pruebatodoist'    | 'Email is already found in our database'        |
     | 'https://todoist.com/Users/showRegister' | ''                   | 'holman@gmail.com'                | 'pruebatodoist'    | 'El nombre no puede estar vacío'                |
     | 'https://todoist.com/Users/showRegister' | 'Holman'             | ''                                | 'pruebatodoist'    | 'Email no es válido'                            |
     | 'https://todoist.com/Users/showRegister' | 'Holman'             | 'holman@gmail.com'                | ''                 | 'La contraseña debe tener al menos 8 caracteres'|