let millMysql = require("./index");

millMysql.init({password:'123'});

millMysql.query('select * from ?? where ?? = ?' ,["st_question",'t_type',1],r=>console.log(r));

millMysql.close();
