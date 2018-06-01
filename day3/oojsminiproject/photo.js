// Implement an object model that allows you to store strings
// that represent a Photo.
//
// Your model should include an Album object that can contain many
// Photo objects in its photos attribute.
//
// Each Album should allow you to add a new photo, list all photos,
// and access a specific photo by the order it was added.
//
// Each Photo should tell you the photo's file name and
// the location the photo was taken in.
//
// Create instances of each object defined to prove that
// your object model works.

function Album(photo){
  this.photo = [];
}

function Photo(filename, location) {
  this.filename = filename;
  this.location = location;
}

Album.prototype.AddPhoto = function (filename, location) {
  var aPhoto = new Photo(filename, location);
  this.photo.push(aPhoto);
};

Album.prototype.ListAll = function () {
  for (var i = 0; i < this.photo.length; i++) {
    console.log(this.photo[i]);
  }
};

Album.prototype.access = function (index) {
  console.log(this.photo[index]);
};

var aAlbum = new Album();
aAlbum.AddPhoto("IMG_2000", "New York");
aAlbum.AddPhoto("IMG_2001", "San Fran");
aAlbum.AddPhoto("IMG_2002", "Tokyo");
aAlbum.ListAll();
aAlbum.access(2);
aAlbum.access(1);
aAlbum.access(0);
