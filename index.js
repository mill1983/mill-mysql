var mysql = require('mysql');


var pool  = null;
function start(options) {
	var args = {
	  connectionLimit : 10,
	  host            : 'localhost',
	  user            : 'root',
	  password        : '',
	  database        : 'test'
	};
	pool = mysql.createPool(Object.assign(args,options));
	console.log(pool);
}




function query(sql,args,cb,errhandler) {
	if(args && typeof(args)!="function"){
		sql = mysql.format(sql,args);
	}else{
		cb = args;
		errhandler  = cb;
	}
	console.log(`执行SQL语句如下：${sql}`);
	pool.getConnection(function(err, connection) {
	  // Use the connection
	  connection.query(sql,
	   function (error, results, fields) {
	    // And done with the connection.
	    connection.release();

	    if (error){
	    	if(errhandler&&typeof(errhandler)=="function")errhandler(err);
	    	else
	    		throw error;
	    } 
	    cb(results, fields);
	    
	  });
	});
}

function close(cb,errorHandler) {
	pool.end(function (err) {
		if(err){
			if(errorHandler&&typeof(errorHandler)=="function")errorHandler(err);
			else{
				console.error("数据库连接池关闭失败");
				throw err;
			}
		}
		console.log("数据库连接池已关闭");
	});
}

module.exports={
	init : start,
	query : query,
	close : close
}
