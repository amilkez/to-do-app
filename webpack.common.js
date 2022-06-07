module.exports = {
	entry: {
		index: "./src/app.js",
	},
	devtool: "source-map",
	devServer: {
		static: "./dist",
		port: 3000,
		open: true,
	},
	module: {
		rules: [
			{
				test: /\.(png|svg|jpeg|jpg|gif)$/i,
				type: "asset/resource",
			},
			{
				test: /\.html$/,
				use: ["html-loader"],
			},
		],
	},
	optimization: {
		runtimeChunk: "single",
	},
};
