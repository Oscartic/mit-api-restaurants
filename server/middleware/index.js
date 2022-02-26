const admin = require('../../config/firebaseAdmin');

module.exports = {
    decodeToken: async (req,res,next) => {
        try {
            if(!req.headers.authorization){
                return res.status(401).json({message: 'Unauthorized. Authentication is required!'});
            };
            const token = req.headers.authorization.split(' ')[1];
            const decodeValue = await admin.auth().verifyIdToken(token);
            if(!decodeValue) return res.status(401).json({message: 'Unauthorized. Authentication is required!'});
            return next();
        } catch (error) {
            console.log('[middleware][decodeToken] error auth')
            return res.status(401).json({ error });
        }
    }
}