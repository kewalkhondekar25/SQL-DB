import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteUser = async (email: string) => {
    const response = await prisma.user.delete({
        where: {
            email
        }
    });
    console.log(response);
};
deleteUser("john@gmail.com")