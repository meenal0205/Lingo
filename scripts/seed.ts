import "dotenv/config";
import {drizzle} from "drizzle-orm/neon-http"
import {neon} from "@neondatabase/serverless"

import * as schema from "../database/schema";

const sql = neon(process.env.DATABASE_URL!)

const db = drizzle(sql , {schema});

const main = async ()=>{
    try {

        console.log("Seeding database");
        await db.delete(schema.courses);
        await db.delete(schema.userProgress);
        await db.insert(schema.courses).values([

            {
                id:1,
                title:"Hindi",
                imageSrc:"in.png"
            },
            {
                id:2,
                title:"Chinese",
                imageSrc:"ch.png"
            },
            {
                id:3,
                title:"Spanish",
                imageSrc:"es.png"
            },
            {
                id:4,
                title:"Japanese",
                imageSrc:"jp.png"
            },
            {
                id:5,
                title:"Hausa",
                imageSrc:"ng.png"
            }

        ])

    }
    catch(error){
        console.log(error);
        throw new Error("Failed to send the database");
    }
}