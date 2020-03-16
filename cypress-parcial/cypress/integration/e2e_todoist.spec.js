describe('E2E TODOIST', function() {
  it('Visits TodoIst and sign up succesfull', function() {
      cy.visit('https://todoist.com/')
      cy.get('._2nAJZ').contains('Signup')
      .should('have.attr', 'href')
      .then((href) => {
          cy.visit('https://todoist.com'+href)
      })
      cy.on('uncaught:exception', (err, runnable) => {
        expect(err.message).to.include('something about the error')
    
        // using mocha's async done callback to finish
        // this test so we prove that an uncaught exception
        // was thrown
        done()
    
        // return false to prevent the error from
        // failing this test
        return false
      })
      cy.get('.login_singup_form').find('input[name="full_name"]').click().type("Holman Garcia ")
      cy.get('.login_singup_form').find('input[name="email"]').click().type("ha.garcia@uniandes.edu.co")
      cy.get('.login_singup_form').find('input[name="pwd"]').click().type("pruebatodoist")
      cy.get('.login_singup_form').find('input[type="checkbox"]').check()
      cy.get('.login_singup_form').contains('Sign up now').click()
  })


  it('Visits TodoIst and succesfull login', function() {       
      cy.visit('https://todoist.com')   
      cy.get('._2nAJZ').contains('Login')
      .should('have.attr', 'href')
      .then((href) => {
          cy.visit('https://todoist.com'+href)
      })
      cy.get('.login_singup_form.content').find('input[name="email"]').click().type("holmangarcia@gmail.com")
      cy.get('.login_singup_form.content').find('input[name="password"]').click().type("pruebatodoist")
      cy.get('.login_singup_form').contains('Log in').click()

  })

  it('Create Project on todoist', function() {

      cy.visit('https://todoist.com')   
      cy.get('._2nAJZ').contains('Login')
      .should('have.attr', 'href')
      .then((href) => {
          cy.visit('https://todoist.com'+href)
      })
      cy.get('.login_singup_form.content').find('input[name="email"]').click().type("holmangarcia@gmail.com")
      cy.get('.login_singup_form.content').find('input[name="password"]').click().type("pruebatodoist")
      cy.get('.login_singup_form').contains('Log in').click()
      cy.wait(3000);  
      cy.visit('https://todoist.com/app?r=1584302204262#start')
      //cy.get('.expansion_panel--expanded > .expansion_panel__header > aside > .adder_icon > svg').click()     
      //cy.get('#reactist-modal-box-0 > form > .reactist_modal_box__body > .form_field > #edit_project_modal_field_name').type('Project 1')     
      //cy.get('div > #reactist-modal-box-0 > form > .reactist_modal_box__actions > .ist_button_red').click()
   
   })

   it('Create Task on todoist', function() {
      cy.visit('https://todoist.com')   
      cy.get('._2nAJZ').contains('Login')
      .should('have.attr', 'href')
      .then((href) => {
          cy.visit('https://todoist.com'+href)
      })
      cy.get('.login_singup_form.content').find('input[name="email"]').click().type("holmangarcia@gmail.com")
      cy.get('.login_singup_form.content').find('input[name="password"]').click().type("pruebatodoist")
      cy.get('.login_singup_form').contains('Log in').click()
      cy.wait(3000);  
      cy.visit('https://todoist.com/app?r=1584302204262#start')
      //https://todoist.com/app?r=1584301403267
      //cy.get('.left_menu').get('span').contains('Bandeja de entrada').click()
     // cy.get('div[data-contents=true]').get('br[data-text=true]').click( {force: true})
     // cy.get('#page_background > #app_holder > #content_wrapper > #content > #editor').type('Tarea1')  
   
      
           
   })

})