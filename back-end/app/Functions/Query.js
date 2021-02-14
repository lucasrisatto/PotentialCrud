
function query (param) {
  const search = use('App/Schemas/' + param.schema + 'Schema')

  if (param) {
    // eslint-disable-next-line prefer-const
    let query = param.query
    for (let cont = 0; cont < Object.keys(search).length; cont++) {
      query.orWhere(Object.keys(search)[cont],
        Object.values(search)[cont].op,
        Object.values(search)[cont].op1 +
                param.search + Object.values(search)[cont].op2)
    }

    return query
  }
}

module.exports = query
