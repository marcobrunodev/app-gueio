module.exports = async (context, req) => {
  try {
    const user = context.bindings.inputUsers[0]

    return {
      status: 200,
      body: {
        user
      }
    }
  } catch (error) {
    return {
      status: 400,
      body: {
        error
      }
    }
  }
}
