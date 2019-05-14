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

 // Start a call
 xapi.command('Dial', { Number: 'roomkit@sparkdemos.com' })
     .then((call) => {
         console.log(`Started call with status: ${call.status}, id: ${call.CallId}`);

         // Stop call after delay
         const delay = 20;
         setTimeout(() => {
             console.log('Disconnecting call, and exiting.');

             xapi.command('Call Disconnect', { CallId: call.CallId })
                 .then(process.exit);
         }, delay * 1000);
         console.log(`Call will be disconnected in ${delay} seconds...`);

     })
     .catch((err) => {
         // Frequent error here is to have several on-going calls
         // reason: "Maximum limit of active calls reached"
         console.error(`Error making call: ${err.message}`)
     });
 });