export const AuthGuard = ({ body: { token } }, res) => {
	if (token === 'auth') {
		return true;
	}

	res.status(403).json({ error: 'Not Authorized!' });
	return false;
};
