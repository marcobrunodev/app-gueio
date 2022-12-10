module.exports = async (context, req) => {
  try {
    const user = context.bindings.inputUsers[0]

    context.bindings.outputUser = {
      id: user.id,
      discord: {
        id: user.id,
        username: user.username,
        discriminator: user.discriminator,
        avatar: user.avatar,
        banner: user.banner,
        bannerColor: user.banner_color,
        accentColor: user.accent_color,
        token: '',
        refreshToken: '',
        scope: ''
      }
    }
  } catch ({ menssage }) {
    return {
      status: 500,
      body: {
        status: 500,
        menssage
      }
    }
  }

  return {
    status: 200
  }
}
