module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/stocks-and-bounds/" : "/"
};
console.log("module.exports2", module.exports);
