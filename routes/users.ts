import {Router} from "https://deno.land/x/oak/mod.ts"
import con from "../databases/dbConnect.ts";
import sentences from "../databases/db.ts";

const route:Router=new Router();

//main endpoint
route.get("/",context=>{
    context.response.body="hi word"
});

//get endpoint
route.get("/api/user",async context=>{
    //con.extcute returns an  object to saves the rows, and the data sentences 
    const result = await con.execute(sentences.select);
    context.response.body=result.rows;
})

//post endpoint
route.post("/api/user",async context=>{
   
    //get method data
    const methodResult=context.request.body()
   
    //get  body data
    const data=await methodResult.value;
   
    //parse object javascript data to an array data
    const userData=[data.name,data.country];

    //storages data into user table at db_user database
    const resultSentences=await con.execute(sentences.insert,userData);

    context.response.body="A new user has been added!";
})

//put endpoint
route.put("/api/user",async context=>{
    const methodResult=context.request.body();
    const data=await methodResult.value;
    const userData=[data.name,data.country,data.id];
    const resultSentences=await con.execute(sentences.update,userData);
    context.response.body="An user has been modified!";
})

//delete endpoint
route.delete("/api/user",async context=>{
    //get id by headers
    const id=context.request.headers.get("id");
    const result= await con.execute(sentences.delete,[id])
    context.response.body="An user has been deleted!"
})

export default route;