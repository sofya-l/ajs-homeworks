export default class Validator {

    validateUsername(username) {
    return /^(?!.*\d{4,})[A-Za-z]([A-Za-z\d_-]+)[A-Za-z]$/.test(username);
    }
}