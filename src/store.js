import { createStore, combineReducers, compose } from 'redux';
import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
//Reducers
//@todo

const firebaseConfig = {
    apiKey: "AIzaSyBwPJfFzwN0By7eBX8BT24wT09u3vebhls",
    authDomain: "aniemmanuel-client-panel.firebaseapp.com",
    projectId: "aniemmanuel-client-panel",
    storageBucket: "aniemmanuel-client-panel.appspot.com",
    messagingSenderId: "613868557957",
    appId: "1:613868557957:web:31042c85417a0351a4bbec"
};

// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

// Initialize firebase instance
const firebase = initializeApp(firebaseConfig);
// Initialize firestore instance
// const firestore = firebase.firestore()

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
    reduxFirestore(firebase)
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer
});

// Create store with reducers and initial state
const initialState = {};
const store = createStoreWithFirebase(rootReducer, initialState, compose(reactReduxFirebase(firebase), 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;