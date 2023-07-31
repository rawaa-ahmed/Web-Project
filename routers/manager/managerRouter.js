const express = require('express')
const router = express.Router()
const { new_match, edit_match, new_stadium } = require('../../controllers/manager/managerController');

router.post('/new_match', new_match);
router.post('/new_stadium', new_stadium);
router.post('/edit_match', edit_match);

module.exports = router