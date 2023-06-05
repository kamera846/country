import axios from 'axios'

const BASE_URL = process?.env?.baseApiUrl + '/v2'

/**
 * Declare the endpoint list below
*/

// In the api documentation the 'code' variable cannot be empty, I use '372' as the default value
const callingCode = (code = 372) => axios.get(BASE_URL + `/callingcode/${ code }`)

export { callingCode }