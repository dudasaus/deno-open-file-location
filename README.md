# open-file-location

A utility function to open file explorers in Windows, Mac, and Linux.

## Install

```bash
deno add jsr:@dudasaus/open-file-location
```

## Usage

```ts
import { openFileLocation } from "@dudasaus/open-file-location";

const cwd = Deno.cwd();
const output = await openFileLocation(cwd);
Deno.exit(output.code);
```

## Caveats

On Windows, `explorer.exe` always exits with code 1. See
https://github.com/microsoft/WSL/issues/6565.
