import * as trpcNext from "@trpc/server/adapters/next";
import { appRouter, type AppRouter } from "@/backend/routers/_app";
import { inferProcedureOutput } from "@trpc/server";

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
});

export type inferQueryResponse<
  TRouteKey extends keyof AppRouter["_def"]["procedures"]
> = inferProcedureOutput<AppRouter["_def"]["procedures"][TRouteKey]>;
