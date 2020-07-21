// FIREBASE
import firebase from 'firebase/app'
import Key from './keys.json'

// EVITAR MAS DE UNA INSTANCIA
if (!firebase.apps.length) firebase.initializeApp(Key)

// EXPORTAR
export default firebase
