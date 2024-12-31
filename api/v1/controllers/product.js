module.exports={
    Get:(req,res)=>{
        return res.status(200).json({"Msg":"All Products"});
    },
    GetById:(req,res)=>{
        return res.status(200).json({"Msg":` Product Id ${req.params.id}`});
    },
    AddNew:(req,res)=>{
        return res.status(200).json({Msg:"New Product",Data:res.body})
    },
    Update:(req,res)=>{
        return res.status(200).json({Msg:`Update  Product  ${req.params.id}`,Data:res.body})
    },
    Delete:(req,res)=>{
        return res.status(200).json({Msg:`Delete  Product  ${req.params.id}`})
    }
}