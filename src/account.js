/* eslint-disable max-len */
/* eslint-disable func-style */

// Import Third-party Dependencies
import kleur from "kleur";
import * as align from "@topcli/text-align";
import qoa from "qoa";

// CONSTANTS
export const PCG_DESCRIPTION = `Les comptes de classe 1 à 5 qui font état de la situation patrimoniale de l’entreprise se retrouvent dans le bilan comptable et leur solde est repris dans le « report à nouveau » de l’exercice qui le suit.\n
Les comptes de classe 6 et 7 représentent quant à eux la performance économique de l’entreprise qui les reprend dans le compte de résultat de son exercice. Ce résultat n’est d’ailleurs lui pas repris dans l’exercice qui suit.`;

export const PCG = {
  1: {
    description: "capitaux propres",
    accounts: {
      101: "capital social",
      106: "réserves",
      108: "compte de l'exploitant",
      120: "bénéfice de l'exercice",
      129: "perte",
      11: "les reports à nouveaux",
      13: "les subventions d'investissement",
      14: "les provisions réglementées",
      15: "les provisions pour risques et charges",
      16: [
        "les emprunts et dettes assimilées",
        "qui doivent être répertoriées dans les dettes financières au passif du bilan"
      ],
      17: "les dettes rattachées à des participations",
      18: [
        "les comptes de liaison Nota",
        `${kleur.magenta().bold("Nota")}: les autres fonds propres comprennent également le montant des émissions de titres participatifs, les avances conditionnées et les droits du concédant…`
      ]
    }
  },
  2: {
    description: "immobilisations",
    commentaire: `Ces immobilisation sont reprises dans le haut de l’actif du bilan comptable, en 3 grands catégories:\n
- l’actif brut (valeur d’entrée des immobilisations),
- les amortissements et provisions,
- l’actif net (actif brut diminué des amortissements et provisions).`,
    accounts: {
      20: [
        "les immobilisations incorporelles",
        "actifs tels que les logiciels, marques, frais d’établissement, fonds de commerce… qui n’ont pas de substance physique ou financière"
      ],
      21: [
        "les immobilisations corporelles",
        "actifs physiques tels que les immeubles, les machines et le gros outillage, le matériel de transport…"
      ],
      22: "les immobilisations mises en concession",
      23: "les immobilisations en cours",
      25: "les parts dans des entreprises liées et créances sur des entreprises liées",
      26: [
        "les immobilisations financières",
        "participations financières de l’entreprise, prêts, dépôts et  cautionnements"
      ],
      27: [
        "les immobilisations financières",
        "participations financières de l’entreprise, prêts, dépôts et  cautionnements"
      ],
      28: "les amortissements et les dépréciations liés aux immobilisations",
      29: "les amortissements et les dépréciations liés aux immobilisations"
    }
  },
  3: {
    description: "stocks et en cours",
    commentaire: "Egalement repris à l’actif du bilan, ces données représentent les stocks et en cours à la clôture de l’exercice",
    accounts: {
      31: [
        "les stocks de matières premières",
        "matériaux non encore utilisés des entreprises de production"
      ],
      32: [
        "les stocks d’autres approvisionnements",
        "matières premières, fournitures consommables et emballages"
      ],
      33: "les en-cours de production de biens et de services",
      34: "les en-cours de production de biens et de services",
      37: [
        "les stocks de marchandise",
        "marchandises achetées non encore vendues par les entreprises de négoce"
      ],
      39: "les dépréciations de stocks"
    }
  },
  4: {
    description: "comptes de tiers",
    commentaire: "Ces comptes du plan comptable permettent de notifier les créances (actif du bilan) et dettes (passif du bilan) de l’entreprise",
    accounts: {
      40: [
        "les fournisseurs et comptes rattachés",
        "dettes fournisseurs, acomptes versés et provision pour factures non encore parvenues"
      ],
      41: [
        "les clients et comptes rattachés",
        "créances sur les clients, acomptes reçus et provision sur les factures qui restent à établir"
      ],
      42: [
        "le personnel et comptes rattachés",
        "dettes de l’entreprise envers ses salariés"
      ],
      43: [
        "les organismes sociaux",
        "dettes de l’entreprise envers les organismes tels que l’Urssaf ou les caisses de retraite par exemple"
      ],
      44: [
        "l’Etat et les autres collectivités publiques",
        "créances et dettes fiscales de l’entreprise (taxes telles que la TVA, impôts tel que l’IS…)"
      ],
      45: [
        "les comptes de groupe et d’associés",
        "comptes courants d’associés"
      ],
      46: "les débiteurs et créditeurs divers",
      47: "les comptes d’attente",
      48: "les comptes de régularisation",
      49: [
        "les dépréciations des comptes de tiers",
        "notamment relatives aux comptes clients et à ceux des associés"
      ]
    }
  },
  5: {
    description: "comptes financiers",
    accounts: {
      50: [
        "les valeurs mobilières de placement",
        "gains des excédents de trésorerie placés à court terme"
      ],
      51: [
        "les banques et établissements financiers",
        "soldes des comptes bancaires"
      ],
      52: "les instruments de trésorerie",
      53: [
        "les caisses",
        "lorsqu’il y en a dans des magasins"
      ],
      54: "les régies d’avance et accréditifs",
      59: "les dépréciations liées aux valeurs mobilières de placement"
    }
  },
  6: {
    description: "comptes de charges",
    commentaire: "Le total des sommes enregistrées dans les comptes 60 à 65 donne le montant des charges d’exploitation",
    accounts: {
      60: [
        "les achats et variations de stocks",
        `- achats de marchandises des entreprises de négoce
\t   - achats de matières premières des entreprises de production
\t ${kleur.magenta().bold("Nota")}: CA - ces achats et variations de stocks = marge de l’entreprise`
      ],
      61: [
        "les services extérieurs",
        "dépenses de sous-traitance, location, crédit bail, entretien, assurances, etc."
      ],
      62: [
        "les autres services extérieurs",
        "honoraires, dépenses de personnel intérimaire, frais bancaires, de publicité, postaux, de déplacement, de télécommunication…"
      ],
      63: [
        "les impôts, taxes et versements assimilés",
        "taxes diverses (apprentissage, sur les salaires et la formation, CET, TVS, C3S…)"
      ],
      64: "les rémunérations brutes et charges patronales",
      65: "les autres charges de gestion courante",
      66: [
        "les charges financières",
        "intérêts d’emprunts, escomptes faits à des clients et pertes dans le cadre d’opérations de change"
      ],
      67: "les charges exceptionnelles",
      68: [
        "les dotations aux amortissements, aux dépréciations et aux provisions",
        "dont le montant de l’amortissement annuel des éléments de l’actif"
      ],
      69: "l’impôt sur les bénéfices et la participation des salariés"
    }
  },
  7: {
    description: "comptes de produits",
    commentaire: "Le total des sommes enregistrées dans les comptes 70 à 75 donne le montant des produits d’exploitation",
    accounts: {
      70: [
        "les ventes et les prestations de services",
        "CA de l'entreprise"
      ],
      71: [
        "la production stockée",
        "différence de produits fabriqués ou en cours de fabrication entre le début et la fin de l’exercice"
      ],
      72: "la production immobilisée",
      74: [
        "les subventions d’exploitation",
        "subventions reçues pour pallier des dépenses d’exploitation"
      ],
      75: "les autres produits de gestion courante",
      76: [
        "les produits financiers",
        "dont les produits de participation tels que les dividendes que l’entreprise a perçus, les escomptes négociés et les gains sur les opérations de change"
      ],
      77: "les produits exceptionnels",
      78: "les reprises sur amortissements, dépréciations et provisions",
      79: [
        "les transferts de charges",
        "qui permettent d’apporter des modifications à l’allocation des charges pour les rendre plus proches des coûts de vente effectifs"
      ]
    }
  },
  8: {
    description: "comptes spéciaux",
    accounts: {
      80: [
        "les comptes d’engagement",
        "droits et obligations qui peuvent faire varier l’évaluation du patrimoine"
      ],
      88: "le résultat en instance d’affectation",
      89: [
        "les comptes de bilan",
        "« bilan d’ouverture » (compte 890) et « bilan de clôture » (compte 891)"
      ]
    }
  }
};

function* getMatchingAccountCategories(categoryId, accountNumber) {
  const { accounts } = PCG[categoryId];

  for (const [category, description] of Object.entries(accounts)) {
    if (accountNumber.includes(category)) {
      yield [category, description];
    }
  }
}

function logGivenPcgCategory(categoryId) {
  const { accounts } = PCG[categoryId];

  Object.entries(accounts)
    .map(([category, description]) => formatPcgLineStdout(category, description))
    .forEach((message) => console.log(message));
}

function logSeparator() {
  console.log(kleur.gray("--------------------------------------------------"));
}

export function formatPcgLineStdout(accountNumber, description) {
  const fixedAccountNumber = align.center(accountNumber, 5);
  const finalDescription = Array.isArray(description) ?
    `${kleur.white().bold(description[0])}\n\t>> ${kleur.italic().yellow().bold(description[1])}\n` :
    kleur.white().bold(description);

  return kleur.gray(` ${kleur.green().bold(fixedAccountNumber)} | ${finalDescription}`);
}

/**
 * @param {null | string} accountNumber
 */
export async function account(accountNumber = null, options = {}) {
  const logCategory = (categoryId, fixCategory = false) => {
    const fixedCategoryAcc = fixCategory ? categoryId : accountNumber;
    const category = PCG[categoryId];

    console.log(`${formatPcgLineStdout(fixedCategoryAcc, category.description)}`);
    if (category.commentaire) {
      logSeparator();
      console.log(kleur.italic().cyan().bold(category.commentaire));
    }
    logSeparator();
  };

  if (accountNumber === null) {
    const menu = Object.entries(PCG).map(([key, value]) => `${key} - ${value.description}`);

    const { selected } = await qoa.interactive({
      query: kleur.yellow().bold("Merci de choisir une classe de comptes à afficher:"),
      handle: "selected",
      symbol: ">",
      menu
    });
    process.stdout.moveCursor(0, -3);
    process.stdout.clearLine(1);
    console.log("");

    const categoryId = String(menu.indexOf(selected) + 1);
    logCategory(categoryId, true);
    logGivenPcgCategory(categoryId);
    console.log("");

    return void 0;
  }

  const categoryId = accountNumber.charAt(0);
  if (accountNumber.length === 1) {
    logCategory(categoryId);
    logGivenPcgCategory(categoryId);
    console.log("");

    return void 0;
  }

  const categories = [...getMatchingAccountCategories(categoryId, accountNumber)];
  if (categories.length === 0) {
    console.log(
      kleur.red().bold(` !!! Impossible de trouver des informations pour le compte '${kleur.yellow(accountNumber)}' !!!\n`)
    );
    logCategory(categoryId, true);
    logGivenPcgCategory(categoryId);
    console.log("");

    return void 0;
  }

  logCategory(categoryId, true);
  categories
    .map(([matchedAccNumber, description]) => formatPcgLineStdout(matchedAccNumber, description))
    .forEach((message) => console.log(message));
  console.log("");

  return void 0;
}
