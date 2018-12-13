const actions = require('./actions.js');

Feature( 'Testing Andys.MD' );

Scenario( 'Case 2', async( I ) => {
    actions.testScript( I, 'Pizza', "register" );
} );
