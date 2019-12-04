export const AuthGuard = ({ token }) => {
	return token === 'auth';
};
