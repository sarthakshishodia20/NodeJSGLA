const getAllProduct=(req,res)=>{
    res.send("Show All Product");
}

const createProduct=(req,res)=>{
    res.send("Create Product");
}

const updateProduct=(req,res)=>{
    res.send("Update Product");
}

const deleteProduct=(req,res)=>{
    res.send("Delete Product");
}

module.exports={
    showAllProduct,
    createProduct,
    updateProduct,
    deleteProduct
    }

