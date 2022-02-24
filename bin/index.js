#!/usr/bin/env node

// Import Third-party Dependencies
import sade from "sade";

// Import Internal Dependencies
import { account, PCG_DESCRIPTION } from "../src/account.js";
import { keyword } from "../src/keyword.js";

console.log("");
const cli = sade("pcg")
  .describe(PCG_DESCRIPTION)
  .version("1.0.0");

cli
  .command("account [accountNumber]")
  .describe("Récupérer des informations sur la classe d'un compte")
  .action(account);

cli
  .command("search <text>")
  .describe("Recherche par mot")
  .action(keyword);

cli.parse(process.argv);
