import SignIn from '@/app/sign-in';
import { Account, Avatars, Client, Databases, ID, Query } from 'react-native-appwrite';
export const  config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform:'com.kas.trello',
    projectId: '6741d09e000c101702dc',
    databaseId: '6741d744001eee82172f',
    userCollectionId:'6741d821001b3f50c685',
    todoCollectionId:'6741d8e30036b1ab7ecc',
    storageId: '6741e94f001ea009c06e'
} 




// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.
;

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client)

export const createUser = async (email: string, password: string, username: string) =>
    {
try{
    const newAccount = await account.create(
        ID.unique(),
        email,
        password,
        username
    )
    if(!newAccount) throw Error;
    const avatarUrl = avatars.getInitials(username)
    await signIn(email,password);

    const newUser = await databases.createDocument(
        config.databaseId,
        config.userCollectionId,
        ID.unique(),
        {
            accountId:newAccount.$id,
            email,
            username,
            avatar: avatarUrl
        }
    )

    return newUser;
} catch (error) {
    console.log(error);
    throw new Error(error);
}

}
export const signIn = async (email: string, password: string) => {
    try{
        const session = await account.createSession(email, password)
        return session;


    } catch (error){
        throw new Error(error);
    
        
    } 
}

export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get();
        if(!currentAccount) throw Error;
        const currentUser = await databases.listDocuments(
            config.databaseId,
            config.userCollectionId,
            [Query.equal('accountId', currentAccount.$id)]
        )
        if(!currentUser) throw Error;

        return currentUser.documents[0];
    }catch(error) {
        console.log(error);
    }
} 

     

    