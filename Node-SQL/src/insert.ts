import { Client } from "pg";

const client = new Client({
    connectionString: "postgresql://myusername:mypassword@localhost:5432/nodejs1"
});

const insertData = async () => {
    try {
        await client.connect();
        const insertQuery = "INSERT INTO users (username, email, password) VALUES ('john', 'john@gmail.com', 'john123')";
        const response = await client.query(insertQuery);
        console.log("Insertion success: " + response);
    } catch (error) {
        console.error(error);
    }
}
insertData();