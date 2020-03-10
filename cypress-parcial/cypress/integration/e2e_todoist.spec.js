
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

}