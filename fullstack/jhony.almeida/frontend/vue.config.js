const path = require("path")

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  outputDir: path.resolve(__dirname, "../backend/src/main/resources/META-INF/resources")
}