import axios from 'axios'

const BASE_URL = process?.env?.baseApiUrl + '/v2'

/**
 * Declare the endpoint list below
*/

// In the api documentation the 'currency' variable cannot be empty, I use 'IDR' as the default value
const currencyApi = (currency = "IDR", fields) => {
    let params = '';

    if (fields) params += `fields=${ fields }`

    let url = BASE_URL + `/currency/${ currency }`
    url = params ? url + '?' + params : url;

    // Output with available param: https://restcountries.com/v2/currency/IDR?fields={FIELDS_VALUE}
    // Output with empty param: https://restcountries.com/v2/currency/IDR

    return axios.get(url)
}

export { currencyApi }