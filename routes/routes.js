const express = require('express');
const router = new express.Router();


const items = []

//** GET /items. Should render a list of shopping items */

router.get('/', (req, res) => {
    res.json(items)
});

//** POST /items. Should add an item to the list */

router.post('/', (req, res) => {

} )

//** GET /items/:name - this route should display a single item’s name and price. */

router.get('/:name')

//** PATCH /items/:name, this route should modify a single item’s name and/or price. */

//** DELETE /items/:name - this route should allow you to delete a specific item from the array. */

module.exports = router;