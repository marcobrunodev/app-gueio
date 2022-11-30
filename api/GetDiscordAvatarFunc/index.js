module.exports = async (context, req) => {
  try {
    const baseUrlDiscordAvatar = 'https://cdn.discordapp.com/avatars'
    const { id, avatar } = context.bindings.inputUsers[0]

    return {
      status: 200,
      body: {
        status: 200,
        discordAvatar: `${baseUrlDiscordAvatar}/${id}/${avatar}`
      }
    }
  } catch ({ message }) {
    return {
      status: 500,
      body: {
        status: 500,
        message
      }
    }
  }
}
