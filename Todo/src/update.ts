import { PrismaClient } from "@prisma/client";
import { log } from "console";

const prisma = new PrismaClient();

const updateUser = async (email: string, newPassword: string) => {
    const response = await prisma.user.update({
        where: {
            email
        },
        data: {
            password: newPassword
        }
    })
    console.log(response);
};

updateUser(
    "harry@magic.com", 
    "avada kavada"
);

