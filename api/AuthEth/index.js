module.exports = async (context, req) => {
  const address = context.bindingData.address

  if (!context.bindings.inputUsers[0]) {
    context.bindings.outputUsers = {
      eth: {
        address
      }
    }
  }

  return {
    status: 200,
    body: {
      eth: {
        address
      }
    }
  }
}
