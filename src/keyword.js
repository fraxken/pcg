// Import Third-party Dependencies
import kleur from "kleur";

// Import Internal Dependencies
import { PCG, formatPcgLineStdout } from "./account.js";

function normalize(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

export function keyword(text) {
  const finalText = normalize(text);
  const categories = [];

  for (const { accounts } of Object.values(PCG)) {
    for (const [accountNumber, description] of Object.entries(accounts)) {
      const completeDescription = normalize(Array.isArray(description) ?
        description[0] + description[1] : description);

      if (completeDescription.includes(finalText)) {
        categories.push([accountNumber, description]);
      }
    }
  }

  if (categories.length === 0) {
    console.log(kleur.red().bold("Impossible de trouver une correspondance.") + "\n");

    return void 0;
  }

  categories
    .map(([matchedAccNumber, description]) => formatPcgLineStdout(matchedAccNumber, description))
    .forEach((message) => console.log(message));

  return void 0;
}
