import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import {
  getFirestore,
  collection,
  addDoc,
  orderBy,
  query,
  limit,
  onSnapshot,
  serverTimestamp
} from 'firebase/firestore';
import 'firebase/firestore';
import { unmounted } from 'vue';
import Filter from 'bad-words';
import { mapState } from 'vuex';

const firebaseConfig = {
  apiKey: "AIzaSyDrY_4y_9yIFFDSvfSOzRGGvAclKn_EyDc",
  authDomain: "croxxtalent-c1019.firebaseapp.com",
  projectId: "croxxtalent-c1019",
  storageBucket: "croxxtalent-c1019.appspot.com",
  messagingSenderId: "242398748305",
  appId: "1:242398748305:web:c7d9f3a03c5e42a9e6e930"
}

const app = initializeApp(firebaseConfig);
const chat = getFirestore(app);

const messagesCollection = collection(chat,'messages');
const messagesQuery = query(
  messagesCollection,
  orderBy('createdAt', 'desc'),
  limit(100)
);
const filter = new Filter();


mapState('auth', ['user']); // Change the mapState to an array with 'user' property

export function useChat() {
  const messages = [];
  const unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
    messages.value = snapshot.docs
      .map((doc) => ({ id: doc.id, ...doc.data() }))
      .reverse();
  });

  const sendMessage = async (text) => {

    // console.log(this.user);
    // if (!this.user){
    //   return
    // }
  
    try {
      const docRef = await addDoc(collection(chat, 'messages'), {
        userName: 'ben',
        userId: 1,
        userPhotoURL: '',
        text: filter.clean(text),
        createdAt: serverTimestamp()
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }

  };
  return { messages, sendMessage, unsubscribe };
}

export { auth, chat };
const auth = getAuth(app)




































// const app = initializeApp(firebaseConfig)
// const chat = getFirestore(app);

// const firestore = app.firestore();
// const messagesCollection = firestore.collection('messages');
// const messagesQuery = messagesCollection
//   .orderBy('createdAt', 'desc')
//   .limit(100);
// const filter = new Filter();

// export function useChat() {
//   const messages = ref([]);
//   const unsubscribe = messagesQuery.onSnapshot((snapshot) => {
//     messages.value = snapshot.docs
//       .map((doc) => ({ id: doc.id, ...doc.data() }))
//       .reverse();
//   });
//   onUnmounted(unsubscribe);

//   // const { user, isLogin } = useAuth();
//   const sendMessage = (text) => {
//     // if (!isLogin.value) return;
//     const { photoURL, uid, displayName } = user.value;
//     messagesCollection.add({
//       userName: displayName,
//       userId: uid,
//       userPhotoURL: photoURL,
//       text: filter.clean(text),
//       createdAt: firebase.firestore.FieldValue.serverTimestamp()
//     });
//   };

//   return { messages, sendMessage };
// }

// const auth = getAuth(app)

// export { auth, chat };