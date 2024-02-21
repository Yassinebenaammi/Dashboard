import { Student, Team } from "./models";
import {connectToDb} from "./utils"

export const fetchStudents = async () => {
    try {

        connectToDb()
        const students = await Student.find();
        return students;
        

    } catch (error) {
        throw new Error("Failed to fetch Students");
    }
}


export const fetchTeams = async () => {
    try {

        connectToDb()
        const teams = await Team.find();
        console.log(teams)
        return teams;
        

    } catch (error) {
        throw new Error("Failed to fetch Teams");
    }
}