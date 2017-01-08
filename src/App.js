import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import firebase from 'firebase'
import reducers from './reducers'
import LoginForm from './components/LoginForm'

class App extends Component {

	componentWillMount(){
		const config = {
			apiKey: "AIzaSyCAFMuSTBNNqsZxfV-YkD0Vi3p1mIeIKmk",
			authDomain: "manager-4970f.firebaseapp.com",
			databaseURL: "https://manager-4970f.firebaseio.com",
			storageBucket: "manager-4970f.appspot.com",
			messagingSenderId: "1046209773095"
		}
		firebase.initializeApp(config)
	}

	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
		return (
			<Provider store={store}>
				<LoginForm />		
			</Provider>
		)
	}
}

export default App