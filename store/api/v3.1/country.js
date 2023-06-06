import axios from 'axios'

const BASE_URL = process?.env?.baseApiUrl + '/v3.1'

/**
 * Declare the endpoint list below
*/

const allCountries = (fields, fullText) => {
    let params = '';

    if (fields) params += `fields=${ fields }`

    // because the value of the fullText variable are boolean i use the different conditional
    if (fullText != null && fullText != undefined && fullText != '') {
        if (params) params += '&'
        params += `fullText=${ fullText }`
    }

    let url = BASE_URL + '/all'
    url = params ? url + '?' + params : url;

    // Output with available param: https://restcountries.com/v3.1/all?fields={FIELDS_VALUE}&fullText={FULLTEXT_VALUE}
    // Output with empty param: https://restcountries.com/v3.1/all

    return axios.get(url)
}

// In the api documentation the 'name' variable cannot be empty, I use 'Indonesia' as the default value
const countryByName = (name = 'Indonesia', fields, fullText) => {
    let params = '';

    if (fields) params += `fields=${ fields }`

    // because the value of the fullText variable are boolean i use the different conditional
    if (fullText != null && fullText != undefined && fullText != '') {
        if (params) params += '&'
        params += `fullText=${ fullText }`
    }

    let url = BASE_URL + `/name/${ name }`
    url = params ? url + '?' + params : url;

    // Output with available param: https://restcountries.com/v3.1/name/Indonesia?fullText={FULLTEXT_VALUE}
    // Output with empty param: https://restcountries.com/v3.1/name/Indonesia

    return axios.get(url)
}

export { allCountries, countryByName }