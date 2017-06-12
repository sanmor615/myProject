exports.mysql = function(){
	return {
		HOST:'rm-uf69213z4114968lg.mysql.rds.aliyuncs.com',
		USER:'root',
		PSWD:'Sanmor$%!615',
		DB:'dealers',
		PORT:3306,
	}
}

exports.port = 12580;

exports.users = function(){
	return {
		HOST:'localhost',
		PORT:12581,
		GET_PATH:'/get_user_info',
		ADD_PATH:'/add_user_gems',
		SAFE:false,		
	}
}