module.exports = async (context, req) => {
  const address = context.bindingData.address

  console.log(context.bindings.inputUsers[0])

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
