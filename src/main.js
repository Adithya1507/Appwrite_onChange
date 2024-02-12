const functions = require('@appwrite/functions');
const sdk = require('node-appwrite');

// Initialize Appwrite SDK
const client = new sdk.Client();
client.setEndpoint("https://cloud.appwrite.io/v1"); // Replace 'YOUR_ENDPOINT' with your Appwrite endpoint
client.setProject('65aa01cb9e240bfad45d'); // Replace 'YOUR_PROJECT_ID' with your Appwrite project ID
client.setKey('00e06217789ec3ac74a1a426ac2d10858ae676ad0c223ad43177ca9f7336d16ecf21e4637c0a205b82275f1b8725e6134321d661da30b706f50d642242c6a66b39d39c2aa74bb01a0f4a2ff81646856d000149e80eb499e3fbbfc5750322bf2787d40d059148de25095135cbdcc7471ea459f190dc476ddfc467bc6ba03385be'); // Replace 'YOUR_API_KEY' with your Appwrite API key


exports.onDocumentUpdate = functions.event.subscribe('database.*.documents.update', async (event) => {
  try {
    console.log("iiiiiiiiiiiii21434354");
    //context.log("ypoooooooo");
    const collectionId = event.$collection;
    const documentId = event.$id;

    // Check if the event is for "collection1"
    if (collectionId === '65c9a8d2705210df628f') {
      // Access the updated document data
      const updatedDocument = await client.database.getDocument(collectionId, documentId);

      // Check if "name" field exists
      if (updatedDocument.hasOwnProperty('name')) {
        // Update the "name" field
        updatedDocument.name = 'adi';

        // Save the updated document
        await client.database.updateDocument(collectionId, documentId, updatedDocument);

        console.log(`Document "${documentId}" in collection "${collectionId}" updated to "adi".`);
      } else {
        console.log(`Document "${documentId}" in collection "${collectionId}" doesn't have "name" field. Skipping update.`);
      }
    }
  } catch (error) {
    console.error(error);
  }
});


