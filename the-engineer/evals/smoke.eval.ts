import { defineEval } from "@grok/agent-sdk/evals";

export default defineEval({
  tags: ["smoke"],
  description: "The Engineer status tool reports ready for REA work.",
  async test(t) {
    await t.send("Call the status tool and confirm The Engineer is ready.");
    t.succeeded();
    t.calledTool("status");
  },
});
