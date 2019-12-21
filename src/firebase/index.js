import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/firebase-functions';
import 'firebase/auth';
import config from './config';

firebase.initializeApp(config);

export default firebase;
