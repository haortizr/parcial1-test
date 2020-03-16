Feature: Login scenario

  Scenario Outline:  Multiple authentication
    Given I write the url of portal <accountsUrl> in  the browser
    When I write my credentials, login : <userName>  and password: <userPassword> and click in login button
    Then I should view the redirection page with content: <resultContent>

    Examples:
      | accountsUrl                                    | userName                  | userPassword        | resultContent               |
      | 'https://todoist.com/Users/showLogin?mini=1'   | 'holmangarcia@gmail.com'  |'pruebatodist'       | 'Todoist'                   |
      | 'https://todoist.com/Users/showLogin?mini=1'   | 'holmangarcia@gmail.com'  |'wrongPassword'      | 'Email o contraseña incorrectos' |