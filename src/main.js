import { Databases,Client,Functions } from 'node-appwrite';

export default async ({ req, res, log, error }) => {
  log("req"+req.body)
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
            JSON.stringify({ 'collectionId': collectionModified }),
            false,
            '/',
            'GET',
            { 'X-Custom-Header': '123' }
          )
          log("execution"+JSON.stringify(execution));
//-------

        } catch (error1) {
          
          error('Error updating document:'+ error1);
        }
       


      }
    }
  
  
 

  
  return res.send("triggered")
};


