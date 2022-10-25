import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyD0uWF71PutFJfNPsiZCYoT3MecUhzZZ5M",
    authDomain: "learn-with-programming.firebaseapp.com",
    projectId: "learn-with-programming",
    storageBucket: "learn-with-programming.appspot.com",
    messagingSenderId: "149837027661",
    appId: "1:149837027661:web:979e3797d2843ac759bf04"
};
const app = initializeApp(firebaseConfig);

export default app;