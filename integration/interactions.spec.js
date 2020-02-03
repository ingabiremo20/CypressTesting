describe('test interactions on our page',()=>{
    beforeEach(()=>{
cy.visit('/example-4');

    });
it('set the header item text to the item  name when is double clicked',()=>{
cy.get('[ data-cy="box-1-items-list"]> :nth-child(2)')
.dblclick();
 
cy.get('[data-cy="box-1-selected-name"]')
.invoke('text')
.should('equal','Option Two');
});
})