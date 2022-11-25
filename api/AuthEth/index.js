module.exports = async (context, req) => {
  return {
    status: 200,
    body: {
      address: req.params
    }
  }
}
