import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getUser = async (email: string) => {
    const response = await prisma.user.findMany({
        where: {
            email
        }
    });
    console.log(response);
    
};
getUser("robert@bomb.com");
