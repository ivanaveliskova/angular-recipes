/*
 * Serve JSON to our AngularJS client
 */

 // Need to restart server if making changes here

exports.name = function (req, res) {
  res.json({
    recipes: [
        {
            name: 'tvaroh',
            ingredients: {
                milk: {
                    amount: 0.5,
                    unit: 'gal'
                },
                lemon_juice: {
                    amount: 0.5,
                    unit: 'cup'
                }
            },
            directions: [
                "Bring milk to a boil",
                "Remove from heat and add lemo juice and stir",
                "Let milk curdle",
                "Strain curds from wey for a minimum 30 minutes"
            ]
        },
        {
            name: 'palacinky',
            ingredients: {
                milk: {
                    amount: 500,
                    unit: 'ml'
                },
                flour: {
                    amount: 250,
                    unit: 'g'
                },
                eggs: {
                    amount: 3
                }
            },
            directions: [
                "Mix",
                "Rest",
                "Fry"
            ]
        },
        {
            name: 'grilled cheese',
            ingredients: {
                bread: {
                    amount: 2,
                    unit: 'slices'
                },
                cheese: {
                    amount: 2,
                    unit: 'slices'
                }
            }
        },
        {
            name: 'fried rice',
            ingredients: {
                rice: {
                    amount: 1,
                    unit: 'cup, dry'
                },
                carrots_and_peas: {
                    amount: 1,
                    unit: 'bag, frozen'
                },
                egg: {
                    amount: 1
                },
                sunflower_oil: {
                    amount: 1,
                    unit: 'tsp'
                },
                soy_sauce: {
                    amount: 0.25,
                    unit: 'cup'
                }
            },
            directions: [
                'Cook rice',
                'Fry carrots and peas until slightly soft',
                'Push aside and fry egg in same pan then mix together',
                'Add protein if using',
                'Add rice and mix and remove from heat',
                'Add soy sauce and mix well and serve'
            ]
        }
    ]
  });
};
