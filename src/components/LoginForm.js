import React, { Component } from 'react'
import { Button, Card, CardSection, Input } from './common'

class LoginForm extends Component {

	state = {
		email: '',
		password: ''
	}

	render(){
		return (
			<Card>
				<CardSection>
					<Input
						label='Email'
						placeholder='user@gmail.com'
						value={this.state.email}
						onChangeText={email => this.setState({ email })}
					/>
				</CardSection>
		        <CardSection>
					<Input
						secureTextEntry
						placeholder="password"
						label="Password"
						value={this.state.password}
						onChangeText={password => this.setState({ password })}
					/>
		        </CardSection>
				<CardSection>
					<Button onPress={() => console.log('aaa')}>
						Log in
					</Button>
				</CardSection>
			</Card>
		)
	}
}

export default LoginForm