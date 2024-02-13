// //import * as functions from '@appwrite/functions';
// // import { Client } from 'node-appwrite';
// // import * as sdk from 'node-appwrite';

// // // Initialize Appwrite SDK
// // const client = new sdk.Client();
// // client.setEndpoint("https://cloud.appwrite.io/v1"); // Set your Appwrite endpoint
// // client.setProject('65aa01cb9e240bfad45d'); // Set your Appwrite project ID
// // client.setKey('00e06217789ec3ac74a1a426ac2d10858ae676ad0c223ad43177ca9f7336d16ecf21e4637c0a205b82275f1b8725e6134321d661da30b706f50d642242c6a66b39d39c2aa74bb01a0f4a2ff81646856d000149e80eb499e3fbbfc5750322bf2787d40d059148de25095135cbdcc7471ea459f190dc476ddfc467bc6ba03385be'); // Set your Appwrite API key

// export async function onDocumentUpdate(event) {
//   try {
//     console.log("Function triggered: Document updated",event);
//     return "document changed";
//     // const collectionId = event.$collection;
//     // const documentId = event.$id;

//     // // Check if the event is for the specified collection
//     // if (collectionId === '65c9a8d2705210df628f') { // Replace with your collection ID
//     //   // Access the updated document data
//     //   const updatedDocument = await client.databases.getDocument(collectionId, documentId);

//     //   // Check if "name" field exists
//     //   if (updatedDocument.hasOwnProperty('name')) {
//     //     // Update the "name" field
//     //     updatedDocument.name = 'adiupdated';

//     //     // Save the updated document
//     //     await client.databases.updateDocument(collectionId, documentId, updatedDocument);

//     //     console.log(`Document "${documentId}" in collection "${collectionId}" updated to "adiupdated".`);
//     //   } else {
//     //     console.log(`Document "${documentId}" in collection "${collectionId}" doesn't have "name" field. Skipping update.`);
//     //   }
//     // }
//   } catch (error) {
//     console.error('Error123:', error);
//     return error; 
//   }
// }

// // Subscribe to the event
// //functions.event.subscribe('database.*.documents.update', onDocumentUpdate);
// //functions.event.subscribe('databases.*.collections.*', onDocumentUpdate);
// export default async ({ req, res, log, error }) => {

import { Databases,Client,Functions } from 'node-appwrite';
// import pkg from 'node-appwrite'; // Import the entire package
// const functions = pkg.functions;
export default async ({ req, res, log, error }) => {
 


  const collectionModified= req.body.$collectionId
  const documentModified=req.body.$id
  const databaseId=req.body.$databaseId

   if(collectionModified === "65c9a8d2705210df628f")
   {
    
      if(parseInt(req.body.id) >5 ){
         
        try {
          const client = new Client();
          client.setEndpoint('https://cloud.appwrite.io/v1')
          client.setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID);
        
          const databases = new Databases(client);
          
      
          const document = await databases.getDocument(databaseId,collectionModified,documentModified)
          //log("documentis"+JSON.stringify(document));
          //if(document.name != "modified"){
        
          //const data={name:"modified"}
         
          //await databases.updateDocument(databaseId,collectionModified, documentModified, data);
         // }
          
//----------
const functions = new Functions(client)
const execution = await functions.createExecution(
  '65c30374d86c4e6c4991',
  JSON.stringify({ 'foo': 'bar' }),
  false,
  '/',
  'GET',
  { 'X-Custom-Header': '123' }
)
log("execution"+execution)
//-------

        } catch (error1) {
          
          error('Error updating document:'+ error1);
        }
       


      }
    }
  
  
 

  
  return res.send("triggered")
};


