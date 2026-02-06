import type { FastifyReply, FastifyRequest } from "fastify";


const createTransaction = async(request: FastifyRequest, reply: FastifyReply): Promise<void> => {
    const userId = "123456"

    if(!userId){
        reply.status(401).send({ error: "Usuário não autorizado" });
    }

};

export default createTransaction;