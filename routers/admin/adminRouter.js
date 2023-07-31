const express = require('express')
const router = express.Router()
const { authorize, remove_user, unauthorized_users } = require('../../controllers/admin/adminController');


router.post('/unauthorized_users', unauthorized_users );
router.post('/remove_user', remove_user);
router.post('/authorize', authorize);

module.exports = router