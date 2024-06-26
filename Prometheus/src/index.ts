import express from 'express';
import { requestCount } from './monitoring/requestCount';
import client from "prom-client";
const app=express();
//@ts-ignore
function middleware(req,res,next){
    const startTime=Date.now();
    next();
    const endTime=Date.now();
    console.log('Time taken:',endTime-startTime);
}

app.use(middleware);
app.use(requestCount);
app.get('/user',(req,res)=>{
   
    res.json({name:'Hello World'});
   
})

app.post('/user',(req,res)=>{
    res.json({name:'Hello World'});
});

app.get("/metrics",async(req,res)=>{
    const metrics=await client.register.metrics();
    res.set('Content-Type',client.register.contentType);
    res.end(metrics);
})

app.listen(3000);
