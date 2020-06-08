const filterImageSrc = (html) => {
  var patt = /<img.*? src=[\'|\"](.*?(?:[\.gif|\.jpg|\.png]))[\'|\"].*?[\/]?>/ig;
  var images = [];
  do{
      var result = patt.exec(html);
      // console.log(result);
      if(result !=null){
        images.push(result[1]);
      }
  }
  while(result != null);
  return images;
}

module.exports = {
  filterImageSrc: filterImageSrc
}