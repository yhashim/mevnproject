
const express = require('express');
const accountRoutes = express.Router();

// Require account model in our routes module
let account = require('./account.model');

// Defined store route
accountRoutes.route('/add').post(function (req, res) {
  console.log(req.body);
  let account = new account(req.body);
  console.log(account);
  account.save()
    .then(() => {
      res.status(200).json({'business': 'business is added successfully'});
    })
    .catch(() => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
accountRoutes.route('/').get(function (req, res) {
  console.log(req);
    account.find(function(err, accounts){
    if(err){
      res.json(err);
    }
    else {
      res.json(accounts);
    }
  });
});

// Defined edit route
accountRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  account.findById(id, function (err, account){
      if(err) {
        res.json(err);
      }
      res.json(account);
  });
});

//  Defined update route
accountRoutes.route('/update/:id').post(function (req, res) {
    account.findById(req.params.id, function(err, account) {
    if (!account)
      res.status(404).send("data is not found");
    else {
        // account.Specialization = req.body.Specialization;
        // account.Title = req.body.Title;
        // account.FullName = req.body.FullName;
        // account.Email = req.body.Email;
        // account.Password = req.body.Password;
        // account.SecurityQuestion = req.body.SecurityQuestion;
        // account.SecurityAnswer = req.body.SecurityAnswer;
        account.specialization = req.body.specialization;
        account.title = req.body.title;
        account.fullName = req.body.fullName;
        account.email = req.body.email;
        account.password = req.body.password;
        account.securityQuestion = req.body.securityQuestion;
        account.securityAnswer = req.body.securityAnswer;
        account.save().then(() => {
          res.json('Update complete');
      })
      .catch(() => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
accountRoutes.route('/steve/:id').delete(function (req, res) {
    console.log(req.body);
    console.log(req.params);

    account.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
          //console.log(err);
         res.json(err);
        }else {
          account.find(function(err, accounts){
            if(err){
              res.json(err);
            }
            else {
              res.json(accounts);
            }
          });
        }
    });
});

module.exports = accountRoutes;
