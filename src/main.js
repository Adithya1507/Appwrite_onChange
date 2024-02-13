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

import { Databases,Client } from 'node-appwrite';

export default async ({ req, res, log, error }) => {
 

  // You can log messages to the console
  //log('Hello, Logs123! ' + JSON.stringify(req.body.$collectionId));
  const collectionModified= req.body.$collectionId
  const documentModified=req.body.$id
  //log("document modified"+ documentModified)
  //log("collectionModified:"+ collectionModified)
   if(collectionModified === "65c9a8d2705210df628f")
   {
     log("inside1")
      if(parseInt(req.body.id) >5 ){

        try {
          const client = new Client();
          client.setEndpoint('https://cloud.appwrite.io/v1').setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID);
          const databases = new Databases(client);

          // Get the document by its id
      
          const document = await databases.getDocument(collectionModified,documentModified);
          log("documentis"+document.toString())
          // Update the 'name' field to 'Modified'
          document.name = 'Modified';

          // Save the updated document
          await databases.updateDocument(collectionModified, documentModified, document);

          
        } catch (error1) {
          
          error('Error updating document:', error1);
        }
       


      }
    }
  
  
 

  
  return res.send("triggered")
};



//const a={"bodyRaw":"{\"name\":\"adi\",\"id\":\"5\",\"$id\":\"65c9ec18df6bab778571\",\"$createdAt\":\"2024-02-12T09:59:52.915+00:00\",\"$updatedAt\":\"2024-02-12T13:36:49.904+00:00\",\"$permissions\":[],\"$databaseId\":\"65c9a8c8d176e568ab13\",\"$collectionId\":\"65c9a8d2705210df628f\"}","body":{"name":"adi","id":"5","$id":"65c9ec18df6bab778571","$createdAt":"2024-02-12T09:59:52.915+00:00","$updatedAt":"2024-02-12T13:36:49.904+00:00","$permissions":[],"$databaseId":"65c9a8c8d176e568ab13","$collectionId":"65c9a8d2705210df628f"},"headers":{"host":"65ca1ef26d042:3000","user-agent":"Appwrite/1.4.13","content-type":"application/json","x-appwrite-trigger":"event","x-appwrite-event":"databases.65c9a8c8d176e568ab13.collections.65c9a8d2705210df628f.documents.65c9ec18df6bab778571.update","x-appwrite-user-id":"65aa018c5f5246e23ffb","connection":"keep-alive","content-length":"236"},"method":"POST","host":"65ca1ef26d042","scheme":"http","query":{},"queryString":"","port":3000,"url":"http://65ca1ef26d042:3000/","path":"/"}