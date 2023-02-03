exports.home = (request, response)=> {
    response.render('pages/home', { title: 'Home' });
}