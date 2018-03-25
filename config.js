/*---------------------------------配置文件-------------------------------*/
/**
 * @param: baseurl  配置通用路径
 * @param: path  配置各接口路径
 */
let baseurl = "https://api.douban.com/v2/";

//各接口地址
let url = {
	path: (function(){
		return {
			//影院热映
			in_theaters: "movie/in_theaters",
			//top250
			top250: "movie/top250",
			// book虚构
			xugou: "book/search?q='虚构'",
			// book非虚构
			unxugou: "book/search?q='非虚构'",
			// 搜索book
			book: "book/search?q=",
			// 搜索movie
			movie: "movie/search?q=",
			// 搜索music
			music: "music/search?q="
		}
	})()
}
