import {
  challengesImg,
  discord,
  flexibleImg,
  linkld,
  media,
  reddit,
  telegram,
  x,
  yt,
} from "../../public/assets";

export const navLinks = [
  {
    id: "service",
    title: "Service",
  },
  {
    id: "pricing",
    title: "Pricing",
  },
  {
    id: "ourAudits",
    title: "Our Audits",
  },
  {
    id: "tools",
    title: "Tools",
  },
  {
    id: "resources",
    title: "Resources",
  },
  {
    id: "referEranSecure",
    title: "Refer Eran Secure",
  },
];

export const BandAQuillaudits = [
  {
    bAudits: [
      {
        point:
          "Exploits like reentrancy and front-running \n can let attackers withdraw extra funds and \n manipulate transaction timing for unfair \n gains",
      },
      {
        point:
          "Vulnerabilities could allow users to mint CDP \n tokens or pension shares indefinitely, \n disrupting the system's economic balance",
      },
    ],

    AAudits: [
      {
        point: "Implementation of reentrancy protection \n mechanisms.",
      },
      {
        point:
          "Ensure precision in decimal handling with \n standard libraries, recalculate accurately, fix \n logic errors, and secure referral systems \n against exploitation.",
      },
    ],
  },
];

export const CarpeDiem = [
  {
    title: "CarpeDiem Pension's Flexible, Blockchain-Enabled Future",
    info: "CarpeDiem Pension redefines retirement planning with a unique approach that deviates from traditional pension funds. With no minimum age for retirement, it offers flexibility and freedom, ensuring all genders receive equal treatment. CarpeDiem Pension ensures blockchain transparency, anonymity, and global accessibility, safeguarding pensions during international relocation. Easily transfer pensions to loved ones; share wallet access. Re-deposit payouts for increased future benefits. Importantly, CarpeDiem Pension prioritizes deposit security by avoiding utilizing client funds for internal investments. To become a part of this forward-thinking pension scheme, one simply needs to install and configure a blockchain wallet.",
    image: flexibleImg,
  },
  {
    title:
      "CarpeDiem Pension's Challenges: Enhancing Security Against Reentrancy, Front-Running, and Infinite Minting",
    info: "CarpeDiem Pension confronts critical security challenges, including the risks of reentrancy and front-running exploits.Malicious actors may exploit contract vulnerabilities, withdrawing excess funds or manipulating transaction timing for unfair advantages. System faces infinite minting threats, risking economic stability with endless creation of CDP tokens or pension shares.  Addressing these challenges is paramount to safeguarding the integrity and security of CarpeDiem Pension.",
    image: challengesImg,
  },
];

export const pensionJourney = [
  {
    title: "Information Gathering:",
    points: [
      {
        point:
          "Collected and reviewed all relevant documentation, including whitepaper, technical specifications, and design documents.",
      },
      {
        point:
          "Obtained a clear understanding of the CDP platform's functionality, economic model, and intended user interactions.",
      },
      {
        point:
          "Discussed client concerns and specific areas of focus for the audit.",
      },
    ],
  },
  {
    title: "Manual Code Review:",
    points: [
      {
        point:
          "Conducted a line-by-line review of the smart contract code, focusing on:",
      },
    ],
  },
  {
    title: "Functional Testing:",
    points: [
      {
        point:
          "Developed and executed a comprehensive set of test cases covering various user interactions and edge cases.",
      },
      {
        point:
          "Simulated different deposit, claim, and referral scenarios to assess functionality and uncover potential exploits.",
      },
      {
        point:
          "Focused on scenarios identified during the manual review and client concerns (e.g., infinite minting, reward calculation errors).",
      },
      {
        point:
          "Leveraged tools like Hardhat and Ganache to deploy and test the smart contract locally.",
      },
    ],
  },
  {
    title: "Automated Testing:",
    points: [
      {
        point:
          "Employed static analysis tools like Slither to identify vulnerabilities through automated code scanning.",
      },
      {
        point:
          "Utilized symbolic execution tools like Mythril to explore various code execution paths and uncover potential attack vectors.",
      },
      {
        point:
          "Integrated unit tests are written by the CDP team to verify specific contract functions and their behaviour.",
      },
    ],
  },
  {
    title: "Reporting & Remediation:",
    points: [
      {
        point:
          "Prepared a detailed report outlining all identified vulnerabilities, categorized by severity and potential impact.",
      },
      {
        point:
          "Provided clear recommendations for fixing each vulnerability, including code snippets and best practices.",
      },
      {
        point:
          "Collaborated with the CDP team to prioritize and address the identified issues.",
      },
      {
        point:
          "Conducted additional verification testing after vulnerability fixes were implemented.",
      },
    ],
  },
];

export const manualmorepoints = [
  {
    pointss: "Vulnerability identification:",
    ans: "Searching for known vulnerabilities like reentrancy, front-running, integer overflows, and access control issues etc.",
  },
  {
    pointss: "Logic flaws:",
    ans: "Identifying inconsistencies or unintended behaviors in the code logic.",
  },
  {
    pointss: "Tokenomics correctness:",
    ans: "Verifying if the code accurately implements the intended economic model and token distribution mechanisms.",
  },
  {
    pointss: "Solidity best practices:",
    ans: " Compliance with secure coding standards and adherence to established guidelines.",
  },
];

export const strategicAppr = [
  {
    title: "QuillAudits' Strategic Approach to CDP Security Audits",
    points:
      "We prioritize threat modeling based on platform-specific risks. Security-first, we identify and mitigate vulnerabilities beyond functionality testing. Using white-box and black-box tests, we conduct thorough vulnerability assessments. Maintaining transparency, we communicate openly with the CDP team. Emphasizing clarity, we present actionable insights for efficient issue resolution.",
  },
  {
    title: "Comprehensive Audit Discoveries and Remediation Strategies",
    points:
      "Throughout the audit process, we unearthed a total of 33 issues, spanning from minor concerns to critical vulnerabilities. Among these, some of the critical issues identified were: Here's how we remediated them :",
  },
];

export const discoveries = [
  {
    main: "Unauthorized Claim/Compound:",
    second:
      "Users could claim/compound a substantial amount without making a deposit or waiting for the stipulated time.",
  },
  {
    main: "Precision Loss in mintCDP():",
    second:
      "Precision loss and unscaled values were identified while calculating rewardPerShare in the mintCDP() function.",
  },
  {
    main: "Multiplication Accuracy:",
    second:
      "Multiplication operations were prone to providing incorrect answers due to unscaled values, posing a potential risk to accurate calculations.",
  },
  {
    main: "Incorrect Share Allocation:",
    second:
      "The protocol was allocating shares for all days, even when there were no corresponding deposits, leading to inefficient use of resources.",
  },
  {
    main: "Logic Error in Referral Handling:",
    second:
      "A logic error resulted in users always having their user.referral set to address(0), which could be exploited to trick the referral system",
  },
  {
    main: "Referral Exploitation:",
    second:
      "Users could exploit the referral system to extract more CDP from the protocol, undermining its integrity.",
  },
];

export const lastRandI = [
  {
    title: "Remediation & Impact:",
    point:
      "All identified vulnerabilities were addressed by the CDP team, significantly enhancing the smart contract's security posture. Key improvements include",
  },
];

export const extraPoint = [
  {
    point: "Implementation of reentrancy protection mechanisms.",
  },
  {
    point:
      "Accurate handling of decimal values using established libraries or best practices.",
  },
  {
    point: "Revised calculations with proper scaling factors",
  },
  {
    point:
      "Fixing logic errors to ensure deposits and waiting periods are enforced.",
  },
  {
    point: "Addressing referral system vulnerabilities to prevent abuse.",
  },
];

export const footerItems = [
  {
    ftitle: "Quill Ecosystem",
    fItems: [
      {
        fItem: "QuillAI",
      },
      {
        fItem: "QuillCheck",
      },
      {
        fItem: "QuillShield",
      },
      {
        fItem: "QuillAcademy",
      },
      {
        fItem: "QuillMonitor",
      },
      {
        fItem: "Web3Suggest",
      },
      {
        fItem: "Explore All Tools",
      },
    ],
  },
  {
    ftitle: "Other Services",
    fItems: [
      {
        fItem: "Red Teaming",
      },
      {
        fItem: "dApp Pentesting",
      },
      {
        fItem: "DeFi Diligence",
      },
      {
        fItem: "NFT Due Diligence",
      },
      {
        fItem: "Rug Pull Due Diligence",
      },
      {
        fItem: "Security Consultation",
      },
      {
        fItem: "Blockchain Forensics",
      },
      {
        fItem: "KYC (Know Your Customer)",
      },
    ],
  },
  {
    ftitle: "Quick Links",
    fItems: [
      {
        fItem: "Pricing",
      },
      {
        fItem: "Audit Process",
      },
      {
        fItem: "Our Audits",
      },
      {
        fItem: "Testimonials",
      },
      {
        fItem: "Security Synopsis",
      },
      {
        fItem: "Blog",
      },
      {
        fItem: "Clients",
      },
      {
        fItem: "Careers",
      },
    ],
  },
];

export const footerButton = [
  {
    bid: 1,
    name: "Refer-Earn-Secure",
  },
  {
    bid: 2,
    name: "WAGSI Grants",
  },
  {
    bid: 3,
    name: "Ambassador Program",
  },
  {
    bid: 4,
    name: "Partnership Program",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: x,
  },
  {
    id: 2,
    img: linkld,
  },
  {
    id: 3,
    img: telegram,
  },
  {
    id: 4,
    img: reddit,
  },
  {
    id: 5,
    img: media,
  },
  {
    id: 6,
    img: discord,
  },
  {
    id: 7,
    img: yt,
  },
];

export const Audit = [
  {
    name: "Ethereum Audit",
  },
  {
    name: "Polygon Audit",
  },
  {
    name: "BSC Audit",
  },
  {
    name: "Solana Audit",
  },
  {
    name: "NEAR Audit",
  },
  {
    name: "Algorand Audit",
  },
  {
    name: "Tezos Audit",
  },
  {
    name: "Hyperledger Fabric Audit",
  },
  {
    name: "L1 Audit",
  },
  {
    name: "Polkadot Audit",
  },
  {
    name: "Wallet Audit",
  },
  {
    name: "ZkSync Audit",
  },
  {
    name: "Starknet Audit",
  },
];
