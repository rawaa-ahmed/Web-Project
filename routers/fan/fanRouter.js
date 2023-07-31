const express = require('express')
const router = express.Router()
const { cancel_reservation, reserve,user,reservation, signin, signup, match_seats, stadiums, view_matches, match, edit_user, stadium,users } = require('../../controllers/fan/fanController');

router.post('/reserve', reserve);
router.post('/cancel_reservation', cancel_reservation);
router.post('/edit_user', edit_user);
router.post('/signup', signup);
router.post('/signin', signin);
router.post('/view_matches', view_matches);
router.post('/match', match);
router.post('/match_seats', match_seats);
router.post('/stadium', stadium);
router.post('/stadiums', stadiums);
router.post('/users', users);
router.post('/reservation', reservation);
router.post('/user', user);

module.exports = router
