import Order from "@/models/Order";
import db from "@/utils/dbConnect";

const handler = async (req,res) =>{
    const {method, query:{id}}= req

    await db.connect()

    if ( method === "GET") {
        try{
            const order= await Order.findById(id);
            res.status(200).json(order) 
           
        } catch(err){
            res.status(500).json(err)
                
        }

    }
    if (method === "PUT"){
        try{
             const order= await Order.findByIdAndUpdate(id,req.body,{
                new:true,
             });
             res.status(201).json(order)
     
        }catch(error){
            res.status(500).json('error')
        }
    }    
    if ( method === "DELETE") {}
}

export default handler;