// const { Client } = require('pg');
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
let today = new Date();
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
let time = today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
let dt=date+' '+time;
console.log(time)

// //put
    // if(req.method == "PUT" && req.url == "/update-value")
    //{
    //     req.on("data",(data)=>{
    //         user1=data;
    //     });
    //     req.on("end",()=>{
    //         console.log("Data is modifiying"); 
    //         let obj1=JSON.parse(user1);
    //     database.forEach((item)=>{
    //         if(obj1.id == item.id)
    //         {
    //             item.name=obj1.name;
    //             item.role=obj1.role;
    //         }
    //     })
    //     res.write("Data modified");
    //     res.end();
    //     });
        
    //}
