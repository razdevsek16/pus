export default {
  buildHeaders(type, store) {
    let headers = {
      headers: {
        'Site': 'TrackUser',
        'Accept-Language': 'en'
      }
    }
    if (type === 'formHeaders') {
      headers['Content-Type'] = 'application/x-www-form-urlencoded'
    } else if (type === 'formFileHeaders') {
      headers['Content-Type'] = 'multipart/form-data'
    }
    return headers
  },
  getHeaders(store, extraConfig = undefined) {
    let headers = this.buildHeaders(false, store)
    if (extraConfig) {
      headers.headers = Object.assign({}, headers.headers, extraConfig)
    }
    return headers
  },
  getFormFileHeaders(store) {
    return this.buildHeaders(false, store)
  },
  getFormDataHeaders(store) {
    return this.buildHeaders('formHeaders', store)
  },
  buildQuery(args) {
    if (!args) {
      return ''
    }

    let queryList = Object.keys(args)
      .filter(key => args[key] !== undefined && args[key] !== null && args[key] !== "")
      .map(function (param) {
        return param + '=' + args[param]
      }) || []

    return queryList.length > 0 ? '?' + queryList.join('&') : ''
  }
}
