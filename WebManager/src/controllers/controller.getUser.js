const admin = require('../models/FirebaseAdmin')
module.exports = (req, res) => {
    const uid = 'IswZZW47MzXttTCvY0G9x2hCpAL2';
    admin.auth().getUser(uid)
        .then(function (userRecord) {
            // See the UserRecord reference doc for the contents of userRecord.
            res.send(userRecord.toJSON());
        })
        .catch(function (error) {
            console.log('Error fetching user data:', error);
        });
}

