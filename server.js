//require(express)
import express from "express";
import dotenv from "dotenv";
import { MongoClient, ObjectId } from "mongodb";

const app = express();

//환경변수 로드
dotenv.config();

// JSON형태의 데이터를 객체로 변환 
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const PORT=process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.DB_NAME; 

//db 연결
const client = new MongoClient(MONGODB_URI);
const db = await client.db(DB_NAME); //데이터 베이스 선택
const collection = await db.collection("users"); //컬렉션선택


//데이터 읽기 
// app.get('/users', async (req, res) => { 
//     try {
//     //데이터를 한개씩 순차적으로 가져와 다큐먼트를 반환 , 한번에 다 가져오지 않고 순차적으로 반환.
//     const users = await collection.find().toArray();

//     console.log("! users:", users);        
//     res.status(200).json(users);
    
//     } catch (error) {
//         console.log("========================================");
//         console.log(`get : ${error}`);
//         res.status(500).json({
//              message:"error fetching users",
//              error : error.message
//         });
//         console.log("========================================");        
//     }
// })


app.get("/users/:id", async(req, res)=> {

    console.log("===============get2 진입=============");
    try {
        const id = req.params.id;
        console.log(id); 

        const users = await collection.find({_id: new ObjectId(id) } ).toArray();
                
        console.log(users[0].name);         
        if(users){
            res.status(200).json({message:`조회성공 : ${users[0].name}`});            
        }

        res.status(404).json({message : "name not found "});

        

        


    } catch (error) {
         console.log("========================================");
        console.log(`get : ${error}`);
        res.status(500).json({
             message:"error fetching users",
             error : error.message
        });
        console.log("========================================");        
    }



})





app.post("/users", async (req , res) => {

    //const name = req.body.name
try {
    const {name:userName , age, email} = req.body;
    const result = await collection.insertOne({
        ...req.body, createdAt: new Date()
    })
    // const result = collection.insertOne({
    //     name : "박운호",
    //     age:34,
    //     email:"aaa@example.com",
    //     createdAt: Date.now()
    // });

    // {...user,}
    

    console.log("========================================");        
    console.log("post 진입");        
    console.log("result ", result);        
    console.log("========================================");        
    res.status(201).json(result)
} catch (error) {
     console.log("========================================");
        console.log(`post : ${error}`);
        res.status(500).json({
             message:"error fetching users",
             error : error.message
        });
        console.log("========================================");   
}

})



app.put("/users/:id", async(req, res) => {
    try {
        
        const { id } = req.params; //string
        const data = req.body;
        
        const result = await collection.updateOne({_id: new ObjectId('6875e065066399a9162c3cf8')}, 
                                                  { $set: {...data, updatedAt : new Date() }}        
        )

        if(result.matchedCount){
            res.status(200).json(result);
            return;
        }


        
        
    } catch (error) {
        console.log(`Error not found item : ${error}`);        
        res.status.apply(404).json({
             message:"error updating user",
             error : error.message
        });
    }
})


//데이터 삭제
app.delete("/users/:id", async(req, res) => {

    console.log("== delete ===");
    try {
        
        const { id } = req.params;
        const result = await collection.deleteOne({ _id: new ObjectId(id) });

        if(result.deletedCount){
            res.status(200).json({
                message:"User deleted",
                id:id
            });
            return;
        }
        res.status(404).json({message:"not found"})
        console.log("== not found ===");
    } catch (error) {
        console.log(`Error delete item : ${error}`);        
        res.status.apply(404).json({
             message:"error delete user",
             error : error.message
        });        
    }



})





const connectDB = async () =>{
    try{
        //db와의 연결 시도 
        await client.connect();
        console.log("✔🐱‍🏍MongoDB connected");
        
    }catch(error){
        console.log("========================================");
        console.log(`mongodb error : ${error}`);
        console.log("========================================");
    }

}


console.log("server.js start");

app.listen(PORT, () => {
    console.log("server runnint at " , PORT);
    console.log("listening");
    console.log("========================================");
    console.log(MONGODB_URI);
    console.log(DB_NAME);
    console.log("========================================");
    connectDB();
})