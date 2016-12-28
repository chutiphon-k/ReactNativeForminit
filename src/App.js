import React, { Component } from 'react'
import { Text, View } from 'react-native'
import firebase from 'firebase'
import { Header } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {

	componentDidMount(){
		const config = {
			apiKey: "AIzaSyByQayFq3hfpqGXmmRK7EP9-WWFkwiE7UQ",
			authDomain: "auth-332fd.firebaseapp.com",
			databaseURL: "https://auth-332fd.firebaseio.com",
			storageBucket: "auth-332fd.appspot.com",
			messagingSenderId: "203968679086"
		}
		firebase.initializeApp(config)
	}

	render(){
		return (
			<View>
			  <Header headerText="Authencation" />
			  <Text>App</Text>
			  <LoginForm />
			</View>
		)
	}
}

export default App