/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	delay: function (req, res) {
		setTimeout(function () {
			console.log('sending response')
			res.status(200).json({message: 'response received'})
		}, 10000)
	}
};

