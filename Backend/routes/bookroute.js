import express from "express"
import {getBook} from "../Controller/bookController.js"

const bookrouter =  express.Router();

bookrouter.get('/book',getBook)

export default bookrouter;