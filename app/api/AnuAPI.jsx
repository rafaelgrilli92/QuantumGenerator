var axios = require('axios');

const ANU_API_URL = 'http://qrng.anu.edu.au/API/jsonI.php?';

module.exports = {
	getQuantumNumber: function(length, type) {
		var requestURL = `${ANU_API_URL}length=${length}&type=${type}`;
		
		return axios.get(requestURL).then(function(res) {
			if (res.status == 200 && res.data && res.data.success && Array.isArray(res.data.data)) {
				return res.data;
			} else {
				throw new Error('Something went wrong :(');
			}
		}, function(err) {
			throw new Error('Something went wrong :(');
		});
	}
}