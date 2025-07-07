import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';

export const withTypeBox = <T extends import('fastify').FastifyInstance>(instance: T) => {
  return instance.withTypeProvider<TypeBoxTypeProvider>();
};
