describe('check the max number of characters',()=>{
    beforeEach(()=>{
        cy.visit('/example-3');
        //start of alias initialization 
        cy.get('[data-cy="first-name-chars-left-count"]')
        .as('firstnamecount');
        
        cy.get('[data-cy="input-first-name"]')
        .as('firstnameInput');
        
        cy.get('[data-cy="last-name-chars-left-count"]')
        .as('lastnamecount');
        
        cy.get('[data-cy="input-last-name"]')
        .as('lastnameInput');
    });
it('displays the appopriate characters remaining count',()=>{

cy.get('@firstnamecount')
.then($charscount=>{
expect($charscount.text()).to.equal('15');
});
//end of demonstration 

cy.get('@firstnameInput').type('moise');

cy.get('@lastnamecount')
.then($charscount=>{
expect($charscount.text()).to.equal('15');
});
cy.get('@lastnameInput').type('ingabire');

});
});