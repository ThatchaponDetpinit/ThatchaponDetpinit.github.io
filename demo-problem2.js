var Song = function(name,band) {
    this.name=name;
    this.band=band;
    this.play = function(){
        return console.log("Playing: " +name)
    }
}

var song1 = new Song('Lalisa','Lisa');
var song2 = new Song('ชีวิตยังคงสวยงาม','Bodyslam')
song1.play();
song2.play();