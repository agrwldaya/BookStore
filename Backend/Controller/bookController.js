 import Book from "../model/book_model.js"

export const getBook = async(req,res)=>{
    try {
        const book =  await Book.find()
        res.status(200).json({
             book
        })
    } catch (error) {
        console.log("Error in Bookcontroller",error)
        res.status(500).json({
            message:"Error in Bookcontroller"
       })
    }
}

