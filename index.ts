import { Application} from "https://deno.land/x/oak/mod.ts";
import users from './routes/users.ts';
const app:Application=new Application();




app.use(users.routes());
app.use(users.allowedMethods());
console.log("server online at port 3000");

await app.listen({port:3000})