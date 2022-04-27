// Note - files were re-named from js to mjs
import { createActor } from "../declarations/hello/index.mjs";

import canisterIds from "../../.dfx/local/canister_ids.json" assert { type: "json" };

const canisterId = canisterIds.hello.local;

const hello = createActor(canisterId, {
  agentOptions: { host: "http://127.0.0.1:8000" },
});

hello.greet("kyle").then((result) => {
  console.log(result);
});
