# mill-mysql
mysql 模块的使用封装

### 安装
```
npm install mill-mysql --save
```

### 简单使用
```
let millMysql = require("mill-mysql");

millMysql.init({password:'123'});

millMysql.query('select * from ?? where ?? = ?' ,["st_question",'t_type',1],r=>console.log(r));

millMysql.close();
```

### 默认配置项

```
var options = {
	  connectionLimit : 10,
	  host            : 'localhost',
	  user            : 'root',
	  password        : '',
	  database        : 'test'
	};
```