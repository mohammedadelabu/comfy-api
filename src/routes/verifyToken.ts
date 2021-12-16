const jwt = require('jsonwebtoken')

const verifyToken = (req: any, res: any, next: any) => {
    const authHeader = req.headers.token
    if(authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.JWT_SEC, (err: any,user: any) => {
            if(err) res.status(403).json('Token is not valid!');
            req.user = user;
            next();
        });
    } else {
        return res.status(401).json('You are not authenticated!')
    }
}

const verifyTokenAndAuthorization = (req: any, res: any, next: any) => {
    verifyToken(req, res, () => {
        if(req.user.id === req.params.id || req.user.isAdmin) {
            next()
        } else {
            res.status(403).json('You are not allowed to do that!')
        }
    })
}

const verifyTokenAndAdmin = (req: any, res: any, next: any) => {
    verifyToken(req, res, () => {
        if(req.user.isAdmin) {
            next()
        } else {
            res.status(403).json('You are not allowed to do that!')
        }
    })
}

module.exports = { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin };