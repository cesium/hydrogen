#!/usr/bin/env bun

import { spawn } from "node:child_process";

const env = { ...process.env };

// If running the web server then prerender pages
if (process.argv.slice(-3).join(" ") === "bun run start") {
  await exec("bunx next build --experimental-build-mode generate");
}

// Launch application
await exec(process.argv.slice(2).join(" "));

function exec(command: string) {
  const child = spawn(command, { shell: true, stdio: "inherit", env });
  return new Promise<void>((resolve, reject) => {
    child.on("exit", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`${command} failed rc=${code}`));
      }
    });
  });
}
