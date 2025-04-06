const OPEN_COMMAND_MAP: Record<string, string | undefined> = {
  darwin: "open",
  windows: "explorer",
  linux: "xdg-open",
};

/**
 * Opens a file explorer for the detected OS. Supports Windows, Darwain (Mac),
 * and Linux.
 * @param path The directory to open
 * @returns The Deno command output
 */
export function openFileLocation(path: string): Promise<Deno.CommandOutput> {
  const osCommand = OPEN_COMMAND_MAP[Deno.build.os];
  if (!osCommand) {
    throw new Error(`openFileLocation unsupported on OS: ${Deno.build.os}`);
  }
  const denoCommand = new Deno.Command(osCommand, {
    args: [path],
  });
  return denoCommand.output();
}
