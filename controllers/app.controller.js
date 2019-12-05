class AppController {
	index (req, res) {
		return res.json({ message: 'Index Action' });
	}
}

const appController = new AppController();
export default appController;
