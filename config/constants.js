module.exports = {
    SALT_ROUNDS: 10,
    AUTH_TOKEN_SIZE: 16,
    PAGINATION: {
        DEFAULT_LIMIT: 100,
        DEFAULT_OFFSET: 0
    },
    ACTIVATION_TOKEN_VALIDITY_PERIOD: 60 * 1000 * 10, //10 min
    NUMBER_OF_COMMENTS_IN_A_BATCH: 5
}
