const express = require('express');
const app = express();
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'newdatabase',
	port:3306
});
// console.log("database working");
app.use(express.static('abc'));

app.get('/get1',(req,res)=>{

	let bookid=req.query.bookid;
	let bookname= req.query.bookname;
	let bookprice= req.query.price;

	var result=false;
	connection.query("insert into book values(?,?,?)", [bookid,bookname,bookprice], (err, res1) => {
        if (err) {
			console.log("trouble " + err);
        } else {
            // result = res1;
			if(res1.affectedRows>0){
				console.log(res1.affectedRows);
				result=true;
			}

			// console.log("success" + result)
        }
		
		console.log(result);
        res.send(result); 
    });

	
})

app.get("/getAllItems",(req,resp)=>{

    con.query('select * from book',[],(error,rows)=>{

        
        resp.send(rows);

}
)});



app.listen(8081, function () {
    console.log("server listening at port 8081...");
});