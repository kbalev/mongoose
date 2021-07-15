const {
    Movie
} = require('../movie/movie.model');


exports.add = async (entryObject) => {
    try {
        const movie = new Movie(entryObject);
        const savedMovie = await movie.save();
        console.log(savedMovie);
    } catch (error) {
        console.log(error)
    }
}
exports.list = async() =>{
    try {
        Movie.find( function (err, movie){
            if (err) return console.error(err);
            console.log(movie)
        })
                
    } catch (error) {
        console.log(error)
    }
}
exports.update = async(titleInput) => {
    let query = { title: titleInput };
    try {
        Movie.findOneAndUpdate(query, { status : true } , function (err, movie){
            if (err) handleError(err);
            console.log(`You have set the status of ${movie.title} to finished`)
        })
    } catch (err) {
        console.log(err)        
    }
}
exports.remove = async(titleInput) =>{
    let query = { title: titleInput };
    try {
        Movie.findOneAndRemove(query, function (err, movie){
            if (err) return handleError(err);
            console.log(`${movie.title} has been removed from the list.`)
        })
    } catch (error) {
        console.log(error)        
    }
}