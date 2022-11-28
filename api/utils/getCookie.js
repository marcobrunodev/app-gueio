const getCookie = (cookies, name) => {
  const search = new RegExp(`^ ${name}=|${name}=`)

  const findCookie = cookies.split(';').find((item) => item.match(search))

  return Boolean(findCookie) && findCookie.replace(search, '')
}

module.exports = getCookie
