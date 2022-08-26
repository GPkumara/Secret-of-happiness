import http from 'http'
// import pkg from 'pg'
// const Client = pkg.Client
// const client = new Client({
//     user:'secret',
//     host:'localhost',
//     database:'kumaran',
//     password:'root',
//     port:5432
// })
// client.connect((err)=>{
//     if(err) throw err;
//     console.log("connected");
// })
// create-record
let user;
let database1=[];

let data3=[];
http.createServer(function(req,res)
{
    if(req.method == "POST" && req.url == "/create-record")
    {
        req.setEncoding("utf-8")
        req.on("data",(data)=>{
            user=data;
        });
        req.on("end",()=>{
            user=JSON.parse(user)
            let today = new Date();
            let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            let time = today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
            let dt=date+' '+time;
            // let values=[user.family,user.field,user.fun,user.finance,user.fitness,user.faith,user.friends,dt];
            // let text=`insert into datas values ($1,$2,$3,$4,$5,$6,$7,$8);`
            // client.query(text,values,(err,res)=>{
            //     if (err) throw err;
            //     console.log(res)
            // })
            database1.push(user);
            //database1.push(dt);
            res.end("Your data is stored");
        });
    }

    //get-records
    if(req.method=="GET" && req.url == "/get-records")
    {
        res.write(JSON.stringify(database1));
        // let text=`select * from datas;`;
        // client.query(text,(err,data1)=>{
        //     if (err) throw err;
        //     console.log("data from database",data1);
        //     res.write(JSON.stringify(data1.rows));
        //     res.end()
        // })
        res.end();
    }
    if (req.method=="GET" && req.url == "/areas-to-focus")
    {
        // let text=`select * from datas  ORDER by date DESC limit 1;`
        // client.query(text,(err,data2)=>{
        //     if (err) throw err;
        //     data3=data2.rows;
        //     data3.forEach((ele)=>{
        //         for (const [key, value] of Object.entries(ele)) {
        //             if(value<=3){
        //                 user1.push(key,value);
        //             }
        //           }
        //     });
        let user1=[];
        let n=database1.length;
        let obj=database1[n-1];
        console.log(database1[n-1]);
        for (const [key, value] of Object.entries(obj)) {
            if(value<=3)
            {
                 user1.push(key);
            }
           }
        
            console.log("area to focus :",user1);
            res.write("Areas to focus :"+JSON.stringify(user1));
            res.end()
        };
    }

).listen(process.env.PORT || 8080);
console.log("Server on");
