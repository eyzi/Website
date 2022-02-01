/* eslint-disable @typescript-eslint/no-unused-vars */
module.exports = {
  devServer: {
    before: function (app, server) {
      app.get("/health", function (req, res) {
        res.status(200).json({ status: "UP" });
      });
    },
  },
};
