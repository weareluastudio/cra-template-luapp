// FIREBASE
import firebase from 'firebase/app'
import Key from './keys.json'
import 'firebase/auth'

// EVITAR MAS DE UNA INSTANCIA
if (!firebase.apps.length) firebase.initializeApp(Key)

// EXPORTAR
export default firebase
