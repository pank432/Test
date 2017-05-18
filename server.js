var express = require('express');
var bodyParser = require('body-parser');
var mongoose=require('mongoose');
var app = express();
app.use(bodyParser.json());
app.use(express.static('public')); 
mongoose.connect('mongodb://localhost:27017/mittens');


var Meow = mongoose.model('Meow', {
 text: String
  });

  app.get('/meows',function(req,res,next){
    Meow.find({},function(err,meows){
      return res.json(meows);
    });
  })
  app.post('/meows', function(req, res, next){	
		var newMeow = new Meow({
			text: req.body.newMeow		
		});
		newMeow.save(function(err){
			return res.send("Added Successfully");
	});	
	});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!')
});


