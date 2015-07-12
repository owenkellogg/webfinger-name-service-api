/**
 * WebfingerController
 *
 * @description :: Server-side logic for managing webfingers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	show: function(req, res) {

		WebfingerService.lookup(req.query.resource).then(webfingerResult => {

			res.status(200).json(webfingerResult)
		})
		.catch(error => {

			res.status(400).json({
				success: false,
				error: error
			})
		})
	}
	
};

