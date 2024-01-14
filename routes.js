const express = require('express');
const router = new express.Router();
const items = require('./fakeDb')


//** GET /items. Should render a list of shopping items */

router.get('/', (req, res) => {
    res.json(items)
});

//** POST /items. Should add an item to the list */

router.post('/', (req, res) => {
const newItem = req.body;
items.push(newItem);
res.status(201).json({ added: newitem });
} )

//** GET /items/:name - this route should display a single item’s name and price. */

router.get('/:name', (req, res) => {
const itemName = req.params.name;
const foundItem = items.find(item => item.name === itemName);
if(!foundItem) {
    return res.status(404).json({error: 'Item not Found'});
}

res.json(foundItem);
});

// //** PATCH /items/:name, this route should modify a single item’s name and/or price. */

router.patch('/:name', (req, res) => {
const itemName = req.params.name;
const foundItem = items.find(item => item.name=== itemName);

if (!foundItem) {
  return res.status(404).json({ error: 'Item notfound' });
}


foundItem.name = req.body.name || foundItem.name;
foundItem.price = req.body.price || foundItemprice;

res.json({ updated: foundItem });

});

//** DELETE /items/:name - this route should allow you to delete a specific item from the array. */

router.delete('/:name', (req, res) => {
const itemName = req.params.name;
const index = items.findIndex(item => item.name === itemName);

if (index === -1) {
  return res.status(404).json({ error: 'Item not found' });
}

items.splice(index, 1);
res.json({ message: 'Deleted' });
});




module.exports = router;