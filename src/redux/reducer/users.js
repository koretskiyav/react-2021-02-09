import {normalizedUsers} from '../../fixtures';
import {ADD_USER} from '../constants';

const defaultUsers = normalizedUsers.reduce(
	(acc, user) => ({...acc, [user.id]: user}),
	{}
);

export default (users = defaultUsers, payload) => {
	const {type, userData} = payload;
	switch (type) {
		case ADD_USER:
			return {...users, [userData.id]: userData};
		default:
			return users;
	}
};
