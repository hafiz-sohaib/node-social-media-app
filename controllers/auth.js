// ================== Users Model ==================
const users = require('../models/users');


// ================== Sign-In and Sign-Up: Get Request ==================
exports.signup_get = (request, response)=> {
    response.render('pages/auth/sign-up', { title: 'SignUp' });
}

exports.signin_get = (request, response)=> {
    response.render('pages/auth/sign-in', { title: 'SignIn' });
}
// ----------------------------------------------------------------------




// ================== Sign-In and Sign-Up: Post Request ==================
exports.signup_post = async (request, response)=> {
    const { first_name, last_name, email, password } = request.body;

    try {
        await users.create({first_name, last_name, email, password})
        response.render('pages/auth/sign-up', {title: 'SignUp', message: "User Created"});
    } catch (error) {
        const errors = handleErrors(error);
        response.render('pages/auth/sign-up', {title: 'SignUp', message: errors});
    }
}

exports.signin_post = (request, response)=> {
    response.render('pages/auth/sign-in', { title: 'SignIn' });
}
// ----------------------------------------------------------------------



// ================== Custom Function To Handle Errors ==================
function handleErrors(error) {
    let errors = {};
    if (error.message.includes('users validation failed')) {
        Object.values(error.errors).forEach(({properties})=> {
            errors[properties.path] = properties.message
        })
    }
    return errors;
}