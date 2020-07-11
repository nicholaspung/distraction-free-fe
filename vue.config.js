module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production'
      ? '/EITHER_HOME_OR_SUBDIRECTORY/'
      : '/',
};
