class AuthController {
	auth (req, res) {
		return res.json({ message: 'Auth Action' });
	}

	register (req, res) {
		return res.json({ message: 'Register Action' });
	}
}

export const appController = new AuthController();
