/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */

export const terminate = (
  options = { coredump: false, timeout: 500 }
): ((
  code: number,
  reason: string
) => (err: Error, promise: Promise<void>) => void) => {
  // Exit function
  const exit = (code: number) => {
    options.coredump ? process.abort() : process.exit(code);
  };

  return (code: number, reason: string) =>
    (err: Error, promise: Promise<void>) => {
      if (err && err instanceof Error) {
        // Log error information, use a proper logging library here :)
        console.log(err.message, err.stack);
      }

      // Attempt a graceful shutdown
      // server.close(exit);
      // const n: NodeJS.Timeout = setTimeout(exit, options.timeout).unref();
    };
};
