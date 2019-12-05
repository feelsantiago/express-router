import { AuthGuard } from './guards/auth.guard';
import { SuperUserGuard } from './guards/super-user.guard';
import AppController from './controllers/app.controller';
import AuthController from './controllers/auth.controller';
import UserController from './controllers/user.controller';

const routes = [
	{
		path   : '',
		method : 'GET',
		action : AppController.index
	},
	{
		path   : 'auth',
		routes : [
			{
				path   : 'login',
				method : 'POST',
				action : AuthController.auth
			},
			{
				path   : 'register',
				method : 'POST',
				action : AuthController.register
			}
		]
	},
	{
		path   : 'user',
		guards : [ AuthGuard ],
		routes : [
			{
				path   : '',
				method : 'POST',
				action : UserController.create
			},
			{
				path   : '',
				method : 'GET',
				action : UserController.get
			},
			{
				path   : ':id',
				method : 'PUT',
				action : UserController.update
			},
			{
				path   : ':id',
				guards : [ SuperUserGuard ],
				method : 'DELETE',
				action : UserController.delete
			}
		]
	}
];

export default routes;
