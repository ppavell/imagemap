
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Image map generator' });
  console.log(req.headers)
};