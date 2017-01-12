import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListView, View } from 'react-native'
import { employeesFetch } from '../actions'
import ListItem from './ListItem'

class EmployeeList extends Component {

	componentWillMount(){
		this.props.employeesFetch()
		this.createDataSource(this.props)
	}

	componentWillReceiveProps(nextProps){
		this.createDataSource(nextProps)
	}

	createDataSource({ employees }){
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		})

		this.datasource = ds.cloneWithRows(employees)
	}

	renderRow(employee){
		return <ListItem employee={employee} />	
	}

	render(){
		console.log(this.props)
		return (
			<ListView
				enableEmptySections
				dataSource={this.datasource}
				renderRow={this.renderRow}
			/>
		)
	}
}

const mapStateToProps = state => {
	let employees = _.map(state.employees, (val, uid) => {
		return {
			...val,
			uid
		}
	})

	return {
		employees
	}
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList)