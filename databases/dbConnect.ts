import {Client} from "https://deno.land/x/mysql/mod.ts";

const client:Client=await new Client().connect({
    hostname:"localhost",
    username:"root",
    db:"db_users",
    poolSize:3,
    password:"1234"
});

export default client;