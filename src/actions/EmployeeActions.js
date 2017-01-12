import firebase from 'firebase'
import { Actions, ActionConst } from 'react-native-router-flux'
import {
	EMPLOYEE_UPDATE,
	EMPLOYEE_CREATE,
	EMPLOYEES_FETCH_SUCCESS,
	EMPLOYEE_SAVE_SUCCESS
} from './types'

export const employeeUpdate = ({ prop, value }) => {
	return {
		type: EMPLOYEE_UPDATE,
		payload: { prop, value }
	}
}

export const employeeCreate = ({ name, phone, shift }) => {
	const { currentUser } = firebase.auth()
	const employees = firebase.database().ref(`/users/${currentUser.uid}/employees`)
	
	return (dispatch) => {
		employees.push({ name, phone, shift })
			.then(() => {
				dispatch({ type: EMPLOYEE_CREATE })
				Actions.employeeList({ type: ActionConst.RESET })
			})
	}
}

export const employeesFetch = () => {
	const { currentUser } = firebase.auth()
	const employees = firebase.database().ref(`/users/${currentUser.uid}/employees`)

	return (dispatch) => {
		employees.on('value', snapshot => {
			dispatch({
				type: EMPLOYEES_FETCH_SUCCESS,
				payload: snapshot.val()
			})
		})
	}
}

export const employeeSave = ({ name, phone, shift, uid }) => {
	const { currentUser } = firebase.auth()
	const employee = firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)

	return (dispatch) => {
		employee.set({ name, phone, shift })
			.then(() => {
				dispatch({ type: EMPLOYEE_SAVE_SUCCESS })
				Actions.employeeList({ type: ActionConst.RESET })
			})
	}
}


export const employeeDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();
  const employee = firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`);
 
  return () => {
    employee.remove()
      .then(() => {
        Actions.employeeList({ type: 'reset' });
      });
  };
};

