import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDrY_4y_9yIFFDSvfSOzRGGvAclKn_EyDc",
  authDomain: "croxxtalent-c1019.firebaseapp.com",
  projectId: "croxxtalent-c1019",
  storageBucket: "croxxtalent-c1019.appspot.com",
  messagingSenderId: "242398748305",
  appId: "1:242398748305:web:c7d9f3a03c5e42a9e6e930"
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export { auth }