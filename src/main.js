//const sdk = require('node-appwrite');
import * as sdk from 'node-appwrite';
// Initialize the Appwrite SDK
const client = new sdk.Client();
client.setEndpoint("https://cloud.appwrite.io/v1"); // Replace 'YOUR_ENDPOINT' with your Appwrite endpoint
client.setProject('65aa01cb9e240bfad45d'); // Replace 'YOUR_PROJECT_ID' with your Appwrite project ID
client.setKey('00e06217789ec3ac74a1a426ac2d10858ae676ad0c223ad43177ca9f7336d16ecf21e4637c0a205b82275f1b8725e6134321d661da30b706f50d642242c6a66b39d39c2aa74bb01a0f4a2ff81646856d000149e80eb499e3fbbfc5750322bf2787d40d059148de25095135cbdcc7471ea459f190dc476ddfc467bc6ba03385be'); // Replace 'YOUR_API_KEY' with your Appwrite API key

// Create a new function
async function handleDocumentChange(payload) {
    try {
        // Get the document ID and collection ID from the payload
        const documentId = payload.$id;
        const collectionId = payload.$collection;

        // Update the document with the new field value
        const updatePayload = {
            name: 'NameforTest' // Set the new value for the 'name' field
            // Add more fields to update if needed
        };

        await client.database.updateDocument(collectionId, documentId, updatePayload);

        console.log(`Document ${documentId} updated successfully with field 'name' set to 'NameforTest'.`);
    } catch (error) {
        console.error('Error handling document change:', error);
        throw error;
    }
}

// Register the function to listen for changes in the specified collection (e.g., "Collection1")
client.functions.create('handleDocumentChange', ['document.create', 'document.update'], handleDocumentChange, 'Collection1');

