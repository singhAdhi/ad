//if age is greater or equal to 18 then display message "Welcome to the movie", if not then "you cannot watch this movie" and 
// also verify that they are having an id, if yes then diplay the meesage "Enjoy your movie", if not
// Then dislay a message as "ID is required"

var age=18;
var id = true;

if(age >=18){
    console.log("welcome to the movie");
    if(id){
        console.log('enjoy the movie');
    }else{
        console.log('id is required');
    }
}else{
    console.log('you cannot watch this movie');
}