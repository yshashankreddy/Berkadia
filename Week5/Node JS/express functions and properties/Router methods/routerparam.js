let express=require('express');
let router=express.Router();
let app=express();

router.param('shashank', function(req, res, next, id) {

  // try to get the user details from the User model and attach it to the request object
  User.find(id, function(err, user) {
    if (err) {
      next(err);
    } else if (shashank) {
      req.shashank = shashank;
      next();
    } else {
      next(new Error('failed to load shashank'));
    }
  });
});
