module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
  },
  extends: [
    "eslint:recommended", //ESLintで基本的なルールチェック(更に細かく個別指定可)
    "plugin:prettier/recommended"  //一番下に書かないとうまく動かない場合も
  ],
  plugins: [
    "ejs"
  ],
  // ここにカスタムルールを追加します。
  rules: {
    "semi": [2, "never"],  //セミコロンチェック 参考）https://eslint.org/docs/rules/semi
    "no-console": "off", //console.log()のチェック 参考）https://eslint.org/docs/rules/no-console#rule-details
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true, //シングルクォーテーションのフォーマット 参考）https://prettier.io/docs/en/options.html#quotes
        "semi": false //セミコロンのフォーマット 参考）https://prettier.io/docs/en/options.html#semicolons
      }
    ],
  }
}