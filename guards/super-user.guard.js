export const SuperUserGuard = ({ body: { email } }) => {
	if (email === 'super@user.com') {
		return true;
	}

	res.status(403).json({ error: 'Not Authorized!' });
	return false;
};
