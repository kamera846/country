import axios from 'axios'

const BASE_URL = process?.env?.baseApiUrl + '/v2'

/**
 * Declare the endpoint list below
*/

// In the api documentation the 'code' variable cannot be empty, I use '372' as the default value
const callingCodeApi = (code = 372, fields) => {
    let params = '';

    if (fields) params += `fields=${ fields }`

    let url = BASE_URL + `/callingcode/${ code }`
    url = params ? url + '?' + params : url;

    // Output with available param: https://restcountries.com/v2/callingcode/372?fields={FIELDS_VALUE}
    // Output with empty param: https://restcountries.com/v2/callingcode/372

    return axios.get(url)
}

export { callingCodeApi }