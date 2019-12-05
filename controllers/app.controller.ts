class AppController {

	index (req, res) {
		return res.json({ message: 'Index Action'})
	}
}

export const appController = new AppController();