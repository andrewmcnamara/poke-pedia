import { z } from "zod";
import { publicProcedure, router } from "@/backend/trpc";
import { PokemonClient } from "pokenode-ts";

export const appRouter = router({
  hello: publicProcedure
    .input(
      z.object({
        text: z.string().nullish(),
      })
    )
    .query(async ({ input }) => {
      const api = new PokemonClient();
      const pokemon = await api.getPokemonById(1);

      return {
        pokemon,
        greeting: `hello ${input?.text ?? "world"}`,
      };
    }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
