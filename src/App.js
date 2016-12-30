import React, { Component } from 'react'
import { Text, View } from 'react-native'
import firebase from 'firebase'
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm'

class App extends Component {

	state = {
		loggedIn: null
	}

	componentDidMount(){
		const config = {
			apiKey: "AIzaSyByQayFq3hfpqGXmmRK7EP9-WWFkwiE7UQ",
			authDomain: "auth-332fd.firebaseapp.com",
			databaseURL: "https://auth-332fd.firebaseio.com",
			storageBucket: "auth-332fd.appspot.com",
			messagingSenderId: "203968679086"
		}
		firebase.initializeApp(config)

		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		})
	}

	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return (
					<CardSection>
						<Button onPress={() => firebase.auth().signOut()}>
							Log Out
						</Button>
					</CardSection>
				)
			case false:
				return <LoginForm />
			default:
				return <Spinner size="large" />
		}
	}

	render(){
		return (
			<View>
				<Header headerText="Authencation" />
				{this.renderContent()}
			</View>
		)
	}
}

export default App