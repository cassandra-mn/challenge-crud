const logger = handler => {
    return async (req, res) => {
        //
        return handler(req, res);
    }
}

export default logger;