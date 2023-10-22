import superagent from "superagent"

export class ApiClient {
  constructor() {
    this.path = 'https://app.asana.com/api/1.0'.replace(/\/+$/, '')
    this.authentications = {
      oauth: {
        type: 'oauth2'
      }
    }
    this.defaultHeaders = {}
    this.timeout = 60000
    this.cache = true
    this.enableCookies = false

    if (typeof window === 'undefined') {
      this.agent = new superagent().agent
    }

    this.requestAgent = null
  }

  callApi(path, httpMethod, pathParams, queryParams,
    headerParams, formParams, bodyParam, authNames, contentTypes, accepts, returnType, callback) {
    const url = this.buildUrl(path, pathParams)
    const request = superagent(httpMethod, url)

    this.applyAuthToRequest(request, authNames)
    
  }
}
