import { AuthGuard } from './guards/auth.guard';
import { SuperUserGuard } from './guards/super-user.guard';

const routes = [
	{
		path   : '',
		method : 'GET'
	},
	{
		path   : 'auth',
		routes : [
			{
				path   : 'login',
				method : 'POST'
			},
			{
				path   : 'register',
				method : 'POST'
			}
		]
	},
	{
		path   : 'user',
		guards : [ AuthGuard ],
		routes : [
			{
				path   : '',
				method : 'POST'
			},
			{
				path   : '',
				method : 'GET'
			},
			{
				path   : ':id',
				method : 'PUT'
			},
			{
				path   : ':id',
				guards : [ SuperUserGuard ],
				method : 'DELETE'
			}
		]
	}
];

export default routes;
