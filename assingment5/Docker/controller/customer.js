const customer = require("../data/Customer.json");

exports.get_one = (req, res) => {
  const cust = customer.find((c) => c.firstName == req.params.firstName);
  if (!cust) {
    res.status(404).send("No costomer with given name ");
  }
  res.send(cust);
};

exports.get_all = (req, res) => {
  res.send(customer);
};
