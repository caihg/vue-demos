const path = require('path');
const uploadFile = require('./common/file.js').uploadFile;

const uploadImg = async function() {
  const serverFilePath = path.join( __dirname, '../../uploads' )

  result = await uploadFile(this, {
    dir: 'album',
    path: serverFilePath
  });

  this.body = result;
}

module.exports = {
  uploadImg
}
