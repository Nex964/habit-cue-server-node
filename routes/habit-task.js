var express = require("express");
var router = express.Router();
let controller = require("../controllers/habit-task.controller");

// router.get('/', function(req, res){
//     console.log('getting all books');
//     Book.find({}).exec(function(err, books){
//         if(err) {
//             res.send('error has occured');
//         } else {
//             console.log(books);
//             res.json(books);
//         }
//     });
// });

// router.get('/:id', function(req, res){
//     console.log('getting one book');
//     Book.findOne({
//         _id: req.params.id
//     }).exec(function(err, book){
//         if(err) {
//             res.send('error has occured');
//         } else {
//             console.log(book);
//             res.json(book);
//         }
//     });
// });

router.get("/", controller.get);
router.post("/", controller.create);

// router.put('/:id', function(req, res){
//     Book.findOneAndUpdate({
//         _id: req.params.id
//     },{
//         $set: {
//             title: req.body.title,
//             author: req.body.author,
//             category: req.body.category
//         }
//     },{
//         upsert: true
//     },function(err, newBook){
//         if(err) {
//             res.send('error updating book');
//         } else {
//             console.log(newBook);
//             res.send(newBook);
//         }
//     });
// });

// router.delete('/:id', function(req, res){
//     Book.findByIdAndRemove({
//         _id: req.params.id
//     },function(err, book){
//         if(err) {
//             res.send('error deleting book');
//         } else {
//             console.log(book);
//             res.send(book);
//         }
//     });
// });

module.exports = router;
