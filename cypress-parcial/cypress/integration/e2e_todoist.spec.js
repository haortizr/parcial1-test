
 //Posibles eventos
      /*    Hacer click en un link al azar
            Llenar un campo de texto al azar
            Seleccionar un combo al azar
            Hacer click en un botón al azar
            */
//const   eventos = ['a', 'input[type="text"]', 'select','button'];
describe('E2E TODOIST', function() {
    
    asLogin();
     it('Create Project on todoist', function() {

        cy.viewport(1850, 949)     
        //cy.visit('https://todoist.com/app?lang=es&r=1569707601285#start')     
        cy.get('.expansion_panel--expanded > .expansion_panel__header > aside > .adder_icon > svg').click()     
        cy.get('#reactist-modal-box-0 > form > .reactist_modal_box__body > .form_field > #edit_project_modal_field_name').type('Proyecto a1')     
        cy.get('div > #reactist-modal-box-0 > form > .reactist_modal_box__actions > .ist_button_red').click()
     
     })

     it('Create Task on todoist', function() {

        cy.viewport(1850, 949) 
        cy.get('.left_menu').get('span').contains('Bandeja de entrada').click()
       // cy.get('div[data-contents=true]').get('br[data-text=true]').click( {force: true})
       // cy.get('#page_background > #app_holder > #content_wrapper > #content > #editor').type('Tarea a1')  
     
        
             
     })

     /*it('Delete Task on todoist', function() {

        cy.viewport(955, 949)
        cy.get('.left_menu').get('span').contains('Bandeja de entrada').click()
        cy.get('table:nth-child(3) > tbody > tr > .menu > .icon').click()     
        cy.get('tbody > .sel_delete_task > .on > .menu_wrapper > .menu_label').click()     
        cy.get('div > div > #reactist-modal-box-13 > .reactist_modal_box__actions > .ist_button_red').click()
     
     })*/
})

/*Cypress.Commands.add('iframe', { prevSubject: 'element' }, $iframe => {
    return new Cypress.Promise(resolve => {
        $iframe.on('load', () => {
            resolve($iframe.contents().find('body'));
        });
    });
});*/

function asLogin() {
    
    it('Visits TodoIst and sign up succesfull', function() {
        cy.visit('https://todoist.com/Users/showRegister?success_page=')
        cy.get('.login_singup_form').find('input[name="full_name"]').click().type("Nelson Hurtado")
        cy.get('.login_singup_form').find('input[name="email"]').click().type("njhurtado@gmail.com")
        cy.get('.login_singup_form').find('input[name="pwd"]').click().type("12345678")
        cy.get('.login_singup_form').find('input[type="checkbox"]').check()
        cy.get('.login_singup_form').contains('Create My Account').click()
    })


    it('Visits TodoIst and succesfull login', function() {
       
        cy.visit('https://todoist.com')   
        cy.wait(1000);    
        cy.visit('https://todoist.com/users/showlogin')
        cy.get('.login_singup_form.content').find('input[name="email"]').click().type("eanunezt@gmail.com")
        cy.get('.login_singup_form.content').find('input[name="password"]').click().type("temporal")
        cy.get('.standalone_page > .standalone_page__content > .login_singup_form > #login_form > .submit_btn').click()
        //cy.visit('https://todoist.com/app?lang=es&r=1569707601285')
 
        //cy.get('.content').contains('Log in').click()
    })


    /*it('Visits todoist and fails at login', function() {
      cy.visit('https://todoist.com/Users/showLogin')
      cy.get('#login_form').find('input[id="email"]').click().type("fake1@fake.com")
      cy.get('#login_form').find('input[id="password"]').click().type("pruebas201902")
      cy.get('#login_form').contains('Log in').click()
      var mensaje=cy.get('.error_msg').find('span').contains("Wrong email or password.")
      mensaje.invoke('text').then((text)=>{
          expect(text).equal('Wrong email or password.')
      })
    })
    it('Visits todoist and register', function() {
      cy.visit('https://todoist.com/Users/showRegister')
      //cy.contains('Iniciar sesión').click()
      cy.get('#sign_up_form').find('input[id="full_name"]').click().type("fakeUser5")
      cy.get('#sign_up_form').find('input[id="email"]').click().type("fakeUser5@fake.com")
      cy.get('#sign_up_form').find('input[id="password"]').click().type("pruebas201902")
      cy.get('input[id="accept_terms"]').check()
      cy.get('#sign_up_form').contains('Create My Account').click()
      cy.url().should('eq','https://todoist.com/setup')
    })
    it('Visits todoist and success at login', function() {
      cy.visit('https://todoist.com/Users/showLogin')
      cy.get('#login_form').find('input[id="email"]').click().type("fakeuser1@fake.com")
      cy.get('#login_form').find('input[id="password"]').click().type("pruebas201902")
      cy.get('#login_form').contains('Log in').click()
      cy.url().should('contain','https://todoist.com/app?r=')
    })
    it('Login at todoist and create a task', function() {
      cy.visit('https://todoist.com/Users/showLogin')
      cy.get('#login_form').find('input[id="email"]').click().type("fakeuser1@fake.com")
      cy.get('#login_form').find('input[id="password"]').click().type("pruebas201902")
      cy.get('#login_form').contains('Log in').click()
      cy.url().should('contain','https://todoist.com/app?r=')
      //cy.contains('Add task').click()
      cy.get('li[class="agenda_add_task"]').click()
      //cy.wait('#agenda_view')
      cy.get('#editor li.manager form').find('div[role="textbox"]').click().type("Tarea pruebas")
      cy.contains('Add Task').click()
      var tarea= cy.get('.task_item .content').find('span').contains("Tarea pruebas")
      tarea.invoke('text').then((text)=>{
          expect(text).equal('Tarea pruebas')
      })
    })*/
    /*it('Login at todoist and delet an overdue task', function() {
      cy.visit('https://todoist.com/Users/showLogin')
      cy.get('#login_form').find('input[id="email"]').click().type("fakeuser1@fake.com")
      cy.get('#login_form').find('input[id="password"]').click().type("pruebas201902")
      cy.get('#login_form').contains('Log in').click()
      cy.url().should('contain','https://todoist.com/app?r=')
      cy.wait(2000);
      cy.get('ul[id="top_filters"]').find('li[data-track="navigation|today"]').click()
      var overdue = cy.get('#agenda_view').find('div[class="section_overdue"]')
      if(overdue.should('exist')){
        overdue.find('.task_item').each(function(te){
          //text.wrap()
          te.each(function(ind){
              console.log("Valor de los objetos",te.get(ind).innerText)
              console.log("Valor de text",te.text())
              var cadena=te.get(ind).innerText.split('\n')
              console.log("Valor de cadena",cadena)
              if(cadena[0] == "	Tarea pruebas 1"){
                console.log("entra al if")
                cy.get('.ist_menu').find('td[data-track="task|more_delete"]').click()
              }
          })
        })
      }*/

    /*it('Login at todoist and edit a today task', function() {
      cy.visit('https://todoist.com/Users/showLogin')
      cy.get('#login_form').find('input[id="email"]').click().type("fakeuser1@fake.com")
      cy.get('#login_form').find('input[id="password"]').click().type("pruebas201902")
      cy.get('#login_form').contains('Log in').click()
      cy.url().should('contain','https://todoist.com/app?r=')
      cy.wait(2000);
      cy.get('ul[id="top_filters"]').find('li[data-track="navigation|today"]').click()
      var overdue = cy.get('#agenda_view').find('div[class="section_day"]')
      if(overdue.should('exist')){
        overdue.find('.task_item').each(function(te){
          te.each(function(ind){
              var cadena=te.get(ind).innerText.split('\n')
              if(cadena[0] == "	Tarea pruebas 3"){
                overdue.get(te).click()
                cy.get('div[role="textbox"]').click().clear().type("Tarea pruebas hoy modificada")
                cy.contains('Save').click()
              }
          })
        })
        overdue = cy.get('#agenda_view').find('div[class="section_day"]')
        overdue.find('.task_item').each(function(te){
          te.each(function(ind){
              var cadena=te.get(ind).innerText.split('\n')
              console.log("cadena nueva: ",cadena)
              expect(cadena[0]).equal("\tTarea pruebas hoy modificada")
          })
        })
      }
  })*/
    /*it('Login at todoist and create a project', function() {
      cy.visit('https://todoist.com/Users/showLogin')
      cy.get('#login_form').find('input[id="email"]').click().type("fakeuser1@fake.com")
      cy.get('#login_form').find('input[id="password"]').click().type("pruebas201902")
      cy.get('#login_form').contains('Log in').click()
      cy.url().should('contain','https://todoist.com/app?r=')
      cy.wait(2000);
      cy.contains("Add Project").click()
      var seccion = cy.get('section[class="reactist_modal_box__body form_fields"]')
      seccion.find('input[name="name"]').click().type("Proyecto pruebas")
      cy.get('footer[class="reactist_modal_box__actions"]').find('button[type="submit"]').click()
      cy.url().should('contain','#project')
    })*/

}