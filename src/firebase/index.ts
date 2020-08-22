const admin = require('firebase-admin');
import { serviceAccount } from "./serviceAccount";

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://bot-typescript.firebaseio.com"
});

export default admin.firestore();