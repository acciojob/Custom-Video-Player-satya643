cy.get('video').first().should('have.attr', 'src').should('include', 'download.mp4');
