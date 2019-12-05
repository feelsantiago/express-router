class UserController {
	create (req, res) {
		return res.json({ message: 'Create Action' });
	}

	get (req, res) {
		return res.json({ message: 'Get Action' });
	}

	update (req, res) {
		return res.json({ message: 'Update Action' });
	}

	delete (req, res) {
		return res.json({ message: 'Delete Action' });
	}
}

const userController = new UserController();
export default userController;
