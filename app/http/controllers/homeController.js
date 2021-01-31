const List = require('../../models/list')
function homeController()
{
    return{
        index(req, res)
        {
            List.find().then(function(books){
            return res.render('home',{books: books })
            })
        }
    }
}

module.exports = homeController