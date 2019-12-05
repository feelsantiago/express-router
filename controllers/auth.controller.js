class AuthController {
	auth (req, res) {
		return res.json({ message: 'Auth Action' });
	}

	register (req, res) {
		return res.json({ message: 'Register Action' });
	}
}

const authController = new AuthController();
export default authController;
