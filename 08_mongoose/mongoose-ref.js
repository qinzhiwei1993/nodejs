//关联查询 populate lean exec

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var db = mongoose.connect('mongodb://localhost/mine', { useMongoClient: true });//连接到

var PersonSchema = new Schema({
    name: String,
    age: Number
})

var laudSchema = new Schema({
    personId: {type: Schema.Types.ObjectId, ref: 'Person'}
})

var CommentSchema = new Schema({
    title: String,
    content: String,
    laud: {type: Schema.Types.ObjectId, ref: 'Laud'}
})
//查找所有的
var Person = db.model('Person', PersonSchema);
var Comment = db.model('Comment', CommentSchema);
var Laud = db.model('Laud', laudSchema);

// Person.create({
//     name: '小红',
//     age: 12
// })
// Person.create({
//     name: '小华',
//     age: 15
// })

// Laud.create({
//     personId: '5a321cb2993b4505425c13fc'
// })

// Comment.create({
//     title: '河北告you科技',
//     content: '哈哈',
//     laud: '5a321cf365dfb80547af701e'
// })

Comment.find().lean()
    .populate({
        path: 'laud',
        select: 'personId'
    })
    .exec(function(err, doc){
        let laud = doc[0].laud;
        // laud
        Laud.find().lean()
            .populate({
                    path: 'personId',
                    select: 'name _id age'
                }).exec(function(err, doc){
                    console.log(doc);
                })
})