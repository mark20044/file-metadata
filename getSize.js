module.exports = function(req, callback) {
  console.log("file size: " + req.file.size)
  callback(null, req.file.size);
}