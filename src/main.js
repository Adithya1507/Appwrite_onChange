const functions = require('@appwrite/functions');
const sdk = require('node-appwrite');

// Initialize Appwrite SDK
const client = new sdk.Client();
client.setEndpoint("https://cloud.appwrite.io/v1"); // Set your Appwrite endpoint
client.setProject('65aa01cb9e240bfad45d'); // Set your Appwrite project ID
client.setKey(''); // Set your Appwrite API key

exports.onDocumentUpdate = functions.event.subscribe('database.*.documents.update', async (event) => {
  try {
    console.log("Function triggered: Document updated");
    const collectionId = event.$collection;
    const documentId = event.$id;

    // Check if the event is for the specified collection
    if (collectionId === '65c9a8d2705210df628f') { // Replace with your collection ID
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
    console.error('Error:', error);
  }
});

