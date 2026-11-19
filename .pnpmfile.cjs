module.exports = {
  hooks: {
    readPackage(pkg) {
      if (pkg.name === 'esbuild') {
        pkg.scripts = pkg.scripts || {};
      }
      return pkg;
    }
  }
}