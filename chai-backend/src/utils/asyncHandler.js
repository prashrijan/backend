const asyncHandler = (requestHandler) => {
    (req, res, nxt) => {
        Promise.resolve(
            requestHandler(req, res, nxt)
        ).catch(
            (error) => {
                nxt(error)
            }
        )
    }
}

