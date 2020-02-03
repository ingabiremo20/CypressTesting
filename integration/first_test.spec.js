describe('find the header of the page',() =>{
it('contains the correct title', ()=>{
    cy.visit('http://localhost:3000/example-1');

    cy.get('h1')
    .invoke('text')
    .should('equal','My Awesome Web Application');
});

// it('the title is available',()=>{
// cy.visit('http://localhost:3000/example-1');
// cy.get('React App')
// .should('equal','React App');
// });
});