const verifyRole = (requiredRole) => {
    return (req, res, next) => {
        const userRole = req.headers['x-user-role'];
        if (!userRole || userRole !== requiredRole) {
            return res.status(403).json({ error: 'Access forbidden: Insufficient permissions' });
        }
        next();
    };
};

module.exports = { verifyRole };