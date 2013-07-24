
var dbFun = require('../DBfunctions'); //access to the DB and other functions
var gridfs = require('../gridfs')

/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.login = function(req, res){
	console.log('login request made')
	// console.log(req.body)
	// console.log(req.session.passport.user)
	// res.json({Data: {authorized: true, redirectTO: ''}});//debug line, just for testing now
	res.json({authorized: true, redirectTO: '/user/' + req.session.passport.user , userId: req.session.passport.user });//debug line, just for testing now
}


exports.register = function(req, res){
	console.log(req.body)
	dbFun.registerUser(req.body, function(err, result){
		if(!err){
			console.log('routes:: register :: will return data')
			
			res.json({authorized: true, redirectTO: '/user/' + result._id , userId: result._id })
		} else {
			console.log('routes:: registerUser :: ERRR = ' + err);
			res.json({authorized: false, redirectTO: null , userId: null })
		};//end of !err tree
	});//endof registerUserDB call
	// res.json({authorized: true, redirectTO: '/user/' + req.session.passport.user , userId: req.session.passport.user })
};//end of register


exports.fileUpload = function(req, res){
	console.log(req.files)
    var opts = {
        content_type: req.files.myFile.type
      };
	gridfs.putFile(req.files.myFile.path,  req.files.myFile.name, opts, function(err,file){

     	res.json({recieved: true})
    
    });//end of gridfs putfile
};//end of fileUpload



exports.getFile = function(req, res){

  console.log('Looking for file = ' + req.params.fileId)

  gridfs.getnew( req.params.fileId , function(err,file) {
  	if(!err){
  		console.log('will server image now')
  		res.writeHead('200', {'Content-Type': 'image/jpeg'});
    	res.end(file,'binary');
  	} else {
  		console.log('will not server image')
  		res.json({error: true})
  	}
  });

}














