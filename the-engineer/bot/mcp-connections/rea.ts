import { defineConnection } from "@grok/agent-sdk/connections";

/** Local REA MCP server — reverse-engineering tools for The Engineer. */
export default defineConnection({
  command: "npx",
  args: ["-y", "rea-agents@6.8.0", "mcp"],
  advertiseTools: true,
  optional: false,
});
