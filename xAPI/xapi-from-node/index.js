const jsxapi = require('jsxapi');

 //create the jsxapi connection object
 const xapi = jsxapi.connect("ssh://10.10.20.154", {
     username: 'integrator',
     password: 'integrator'
 });

 xapi.on('error', (err) => {  //handler for any errors encountered with jsxapi
     console.error(`connection failed: ${err}, exiting`);
     process.exit(1); //just exit the app
 });

 //when the jsxapi connection is ready...
 xapi.on('ready', () => {
     console.log("connection successful");

     // Retrieve and display the current Standby status
     xapi.status
         .get('Standby')
         .then((status) => {
             console.log(`Current Standby status: ${status.State}`);

             // shutdown the jsxapi connection/object
             xapi.close();
         });
 });