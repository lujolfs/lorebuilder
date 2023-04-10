function conflictError(message) {
    return {
        name: "ConflictError",
        message,
    };
}

function notFoundError() {
    return {
        name: "NotFoundError",
        message: "No lineages were found."
    }
}

export default {
    conflictError,
    notFoundError
}