import { FastifyInstance } from "fastify";
import createTransaction from "../controllers/transactions/createTransactions.controller";
import { zodToJsonSchema } from "zod-to-json-schema";
import { createTransactionSchema } from "../schemas/transaction.schema";

const transactionRoutes = async(fastify: FastifyInstance) => {

    fastify.route({
        method: "POST",
        url: "/",
        schema: {
            body: zodToJsonSchema(createTransactionSchema as any),
            
        },
        handler: createTransaction,
    })

}

export default transactionRoutes;