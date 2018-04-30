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

            connection.query(`SELECT * FROM products WHERE item_id = "${productId}"`, function (err, results) {
                if (err) throw err;
                // results will contain the results of the query
                let prodName = results[0].product_name;
                let prodPrice = results[0].price;
                if (results[0].stock_quantity >= unitQuantity) {
                    let updatedQuantity = results[0].stock_quantity - unitQuantity;
                    updateProduct(unitQuantity, updatedQuantity, productId, prodName, prodPrice);
                } else {
                    console.log(`Insufficient quantity! You requested ${unitQuantity}, but we only have ${results[0].stock_quantity}. Order canceled.`);
                }
                connection.end();
            });

        })
};

function updateProduct(answerQuantity, newQuantity, answerProductId, productName, productPrice) {
    connection.query(`UPDATE products SET stock_quantity = '${newQuantity}' WHERE item_id = '${answerProductId}'`, function (error) {
        if (error) throw error;
        console.log(`Purchase successful. You purchased ${answerQuantity} ${productName}s for $${productPrice * answerQuantity}`);
    });
    // inquirer.prompt([
    //     {
    //         name: "continueShopping",
    //         type: "confirm",
    //         message: "Would you like to keep shopping?"
    //     }
    // ]).then(function (answer) {
    //     if (answer.continueShopping) {
    //         initialPrompt();
    //     } else {
    //         connection.end();
    //     }
    // })
};

