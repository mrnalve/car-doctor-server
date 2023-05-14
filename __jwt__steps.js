/**
 * JWT : secure your api
 * ----------------------------
 * Create token
 * ---------------------------
 * 1. client side: After user login send user basic info to create token
 * 
 * 2. in the server side : install npm i jsonwebtoken
 * 3.  import jsonwebtoken
 * 4. jwt.sign(payload, secret, {expires})
 * 5. return token to the client side
 * 
 * 6. after receiving the token store it either httpOnly cookies or localStorage(second best solution)
 * 7. use a general  space onAuthStateChange > AuthProvider
 * 
 * -----------------------------
 * SEND TOKEN TO SERVER
 * -----------------------------
 * 1. for sensitive api call() send authorization headers {authorization: 'Bearer token'}
 * 
 * ----------------------------
 * VERIFY TOKEN
 * ---------------------------
 * 1. Create a function call verifyJWT
 * 2. this function will have three params: req, res, next
 * 3. First check weather the authorization headers exists
 * 4. if not send 401
 * 5. get the token out of the authorization header
 * 6. call jwt verify(token, secret, ((error, decoded=>{})))
 * 7. if error => send 401
 * 8. set decoded to the req object so what we can retrieve it later
 * 9. call the next() to go to the next function
 * 
 * ------------------------
 * 1. check weather token has the email that matches with the request email is valid
 * **/ 