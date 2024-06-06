import client from "prom-client";
const requestCounter=new client.Counter({
    name:'request_count',
    help:"Total request count",
    labelNames:["method","route","status_code"]
});

//@ts-ignore
export function requestCount(req,res,next){
    requestCounter.inc({
        method:req.method, //get ,post
        route:req.path, //route
        
    });
    next();
}