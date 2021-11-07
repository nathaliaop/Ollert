const express = require('express');
const router = require('express').Router();
const List = require('../models/list');

router.get('/lists', function(req, res, next){
    List.find({}).then(function(Lists){
        res.send(Lists);
    }).catch(next);
});

router.get('/lists/:id', function(req, res, next){
    List.findOne({_id: req.params.id}).then(function(List){
        res.send(List);
    }).catch(next);
});

router.post('/lists', function(req, res, next){
  List.create(req.body).then(function(List){
      res.send(List);
  }).catch(next);
});

router.put('/lists/:id', function(req, res, next){
    List.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        List.findOne({_id: req.params.id}).then(function(List){
            res.send(List);
        });
    }).catch(next);
});

router.delete('/lists/:id', function(req, res, next){
    List.findByIdAndRemove({_id: req.params.id}).then(function(List){
        res.send(List);
    }).catch(next);
});

module.exports = router