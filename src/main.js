const functions = require('@appwrite/functions');

// Initialize Appwrite SDK
const client = new functions.Client();

exports.onDocumentChange = functions.event.subscribe('database.*.documents.*', async (event) => {
  try {
    // Extract collection and document IDs from event data
    const collectionId = event.$collection;
    const documentId = event.$id;

    // Check if the event is for "Collection1" and valid for create/update
    if (collectionId === '65c9a8d2705210df628f' && (event.$eventType === 'document.create' || event.$eventType === 'document.update')) {
      // Get the document
      const document = await client.database.getDocument(collectionId, documentId);

      // Update the "name" field
      document.data.name = 'adithyatest';
      console.log('Function execution completed1234');
      // Save the updated document
      await client.database.updateDocument(collectionId, documentId, document.data);
    }
  } catch (error) {
    console.error(error);
  }
});


