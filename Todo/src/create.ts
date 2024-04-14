import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const insertUser = async (email: string, firstName: string, lastName: string, password: string) => {
    const response = await prisma.user.create({
        data: {
            email,
            firstName,
            lastName,
            password
        }
    });
    console.log(response);
}

insertUser(
    "robert@bomb.com",
    "robert",
    "oppenhimer",
    "plutonium"
);
