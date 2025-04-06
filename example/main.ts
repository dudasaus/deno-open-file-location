import { openFileLocation } from "@dudasaus/open-file-location";

const cwd = Deno.cwd();
const output = await openFileLocation(cwd);
Deno.exit(output.code);
