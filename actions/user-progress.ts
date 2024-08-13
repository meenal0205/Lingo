"use server"

import db from "@/database/drizzle";
import { getCourseById, getUserProgress } from "@/database/queries";
import { userProgress } from "@/database/schema";
import { auth, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const upertUserProgress =  async (courseId : number)=> {
    const {userId} = await auth();
    const user = await currentUser();

    if(!userId|| !user){
        throw new Error("Unauthorixed");
    }

    const course = await getCourseById(courseId);

    if(!course){
        throw new Error ("Course not found");

    }


    // TODO enable onc units ans lessons are added
    // if(!course.units.length || !course.units[0].lessons.length){
    //     throw new Error("Course is empty");
    // }

    const existinguserProgress = await getUserProgress();

    if(existinguserProgress){
        await db.update(userProgress).set({
            activeCourseId: courseId,
            userName:user.firstName || "User",
            userImageSrc : user.imageUrl||"sidebarlogo.png"
        });
        
    revalidatePath("/courses")
    revalidatePath("/learn")
    redirect("/learn")
    }


    

    await db.insert(userProgress).values({
        userId,
        activeCourseId:courseId,
        userName:user.firstName || "User",
        userImageSrc :user.imageUrl || "./mascot.svg",
    });

    revalidatePath("/courses")
    revalidatePath("/learn")
    redirect("/learn")

    
}