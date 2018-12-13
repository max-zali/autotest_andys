const actions = require('./actions.js');

Feature( 'Testing Andys.MD' );

Scenario( 'Case 1', async( I ) => {
    actions.testScript( I, 'Pizza' );
} );
