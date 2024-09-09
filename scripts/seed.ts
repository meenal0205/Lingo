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
        await db.delete(schema.units);
        await db.delete(schema.challengeOptions);
        await db.delete(schema.challengeProgress);
        await db.delete(schema.challenges);



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

        ]);


        await db.insert(schema.units).values([
            {
                id:1,
                courseId:1,
                title:"Unit 1",
                description:"Learn the basics of Spanish",
                order:1,
            }
        ]);

        await db.insert(schema.lessons).values([
            {
                id:1,
                unitId:1,
                order:1,
                title:"Nouns",

            },
            {
                id:2,
                unitId:1,
                order:2,
                title:"Nouns",

            }
        

        ]);

        await db.insert(schema.challenges).values([
            {
                id:1,
                lessonId:1,
                type:"SELECT",
                order:1,
                question:'which one of these is the "the man"',
            },
            {
                id:2,
                lessonId:1,
                type:"ASSIST",
                order:2,
                question:'the Man',
            },

        ])

        await db.insert(schema.challengeOptions).values([
            {
                id:1,
                challengeId:1,
                imageSrc:"/man.svg",
                correct:true,
                text:"el hombre",
                audioSrc:"/es_man.mp3",
            },
            {
                id:2,
                challengeId:1,
                imageSrc:"/woman.svg",
                correct:false,
                text:"la mujer",
                audioSrc:"/es_woman.mp3",
            },
            {
                id:3,
                challengeId:1,
                imageSrc:"/robot.svg",
                correct:false,
                text:"el robot",
                audioSrc:"/es_robot.mp3",
            },
            {
                id:4,
                challengeId:2,
                imageSrc:"/man.svg",
                correct:true,
                text:"el robot",
                audioSrc:"/es_man.mp3",
            },
            {
                id:5,
                challengeId:2,
                imageSrc:"/woman.svg",
                correct:false,
                text:"el robot",
                audioSrc:"/es_woman.mp3",
            },
            {
                id:6,
                challengeId:2,
                imageSrc:"/robot.svg",
                correct:false,
                text:"el robot",
                audioSrc:"/es_robot.mp3",
            },
        ])

    }
    catch(error){
        console.log(error);
        throw new Error("Failed to send the database");
    }
}