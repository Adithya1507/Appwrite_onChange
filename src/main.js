//import * as functions from '@appwrite/functions';
import * as sdk from 'node-appwrite';

// Initialize Appwrite SDK
const client = new sdk.Client();
client.setEndpoint("https://cloud.appwrite.io/v1"); // Set your Appwrite endpoint
client.setProject('65aa01cb9e240bfad45d'); // Set your Appwrite project ID
client.setKey('00e06217789ec3ac74a1a426ac2d10858ae676ad0c223ad43177ca9f7336d16ecf21e4637c0a205b82275f1b8725e6134321d661da30b706f50d642242c6a66b39d39c2aa74bb01a0f4a2ff81646856d000149e80eb499e3fbbfc5750322bf2787d40d059148de25095135cbdcc7471ea459f190dc476ddfc467bc6ba03385be'); // Set your Appwrite API key

export async function onDocumentUpdate(event) {
  try {
    console.log("Function triggered: Document updated",event);
    return "document changed";
    // const collectionId = event.$collection;
    // const documentId = event.$id;

    // // Check if the event is for the specified collection
    // if (collectionId === '65c9a8d2705210df628f') { // Replace with your collection ID
    //   // Access the updated document data
    //   const updatedDocument = await client.databases.getDocument(collectionId, documentId);

    //   // Check if "name" field exists
    //   if (updatedDocument.hasOwnProperty('name')) {
    //     // Update the "name" field
    //     updatedDocument.name = 'adiupdated';

    //     // Save the updated document
    //     await client.databases.updateDocument(collectionId, documentId, updatedDocument);

    //     console.log(`Document "${documentId}" in collection "${collectionId}" updated to "adiupdated".`);
    //   } else {
    //     console.log(`Document "${documentId}" in collection "${collectionId}" doesn't have "name" field. Skipping update.`);
    //   }
    // }
  } catch (error) {
    console.error('Error123:', error);
    return error; 
  }
}

// Subscribe to the event
//functions.event.subscribe('database.*.documents.update', onDocumentUpdate);
functions.event.subscribe('databases.*.collections.*', onDocumentUpdate);

