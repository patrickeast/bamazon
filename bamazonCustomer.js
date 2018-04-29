const inquirer = require("inquirer");
const mysql = require("mysql");
const table = require("table");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon_DB"
});

connection.connect(function (err) {
    if (err) throw err;
    listItemsAvail();
});

function listItemsAvail() {
    connection.query("SELECT id, product_name, price FROM products ORDER BY id", function (err, res) {
        if (err) throw err;
        console.log(res);
        initialPrompt();

    })
};

function initialPrompt() {
    inquirer
        .prompt([
            {
                name: "purchaseid",
                type: "text",
                message: "What is the ID of the item you would like to purchase?"
            }, {
                name: "numunits",
                type: "integer",
                message: "How many units?"
            }
        ]).then(function (answer) {
            let productId = answer.purchaseid;
            let unitQuantity = answer.numunits;
            console.log("Product ID = " + productId);
            console.log("Quantity requested to purchase: " + unitQuantity);
            initialPrompt();
            checkStores();
        })
};

function checkStores() {
    if (this.unitQuantity > this.productId.stock_quantity) {
        console.log("Insufficient quantity!");
    } else {
        console.log("Item purchased.")
        productId.stock_quantity -= this.unitQuantity;
        inquirer
            .prompt([
                {
                    name: "showStores",
                    type: "confirm",
                    message: "Would you like to purchase another item?"
                }
            ]).then(function (answer) {
                if (answer.showStores) {
                    listItemsAvail();
                    initialPrompt();
                } else {
                    connection.end();
                }
            })
    }
}

