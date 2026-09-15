/* ======================================================================
   POSTS DATA
   To publish a new post: copy one object below, give it a unique "slug"
   (used in the URL, no spaces), and fill in the fields. Newest posts
   should go at the TOP of the array — the journal always shows them in
   the order listed here. "content" is a list of paragraphs; start a
   string with "## " to render it as a subheading instead of a paragraph.
   ====================================================================== */
const POSTS = [
  {
    slug: "choosing-motor-cover-kenya",
    title: "How to choose the right motor insurance cover in Kenya",
    category: "Motor",
    date: "2026-09-02",
    readTime: "5 min read",
    excerpt: "Third-party, third-party fire and theft, or comprehensive — what each actually pays for, and how to tell which one your car needs.",
    content: [
      "Every driver in Kenya is legally required to hold at least third-party motor cover, but 'the cheapest policy that's legal' and 'the right policy for your car' are often two different things.",
      "## Third-party only",
      "This is the legal minimum. It pays for damage or injury you cause to other people and their property — it does not pay a cent towards repairing or replacing your own vehicle, even if the accident wasn't your fault.",
      "## Third-party, fire and theft",
      "The same third-party cover, plus a payout if your own car is stolen or damaged by fire. A reasonable middle ground for an older vehicle that's still worth protecting from total loss.",
      "## Comprehensive",
      "Covers your own vehicle for accidental damage as well as fire and theft, and usually includes windscreen cover and a courtesy car. Lenders financing a car on logbook almost always require this level of cover.",
      "As a rule of thumb: if losing the car tomorrow would be a financial problem, comprehensive is worth the extra premium. If the car is old enough that a payout wouldn't be much more than scrap value, third-party fire and theft is often enough."
    ]
  },
  {
    slug: "travel-insurance-what-it-covers",
    title: "Travel insurance: what your policy actually covers",
    category: "Travel",
    date: "2026-08-19",
    readTime: "4 min read",
    excerpt: "Medical emergencies abroad, lost luggage, flight delays — travel policies bundle several types of cover together. Here's what's usually included and what isn't.",
    content: [
      "Most travel policies sold in Kenya bundle five or six types of cover into one certificate. Knowing what each section actually does makes it much easier to compare two quotes.",
      "## Medical and related expenses",
      "Pays hospital and treatment costs if you fall ill or are injured while travelling. Check the limit — for the US, Canada and much of Europe, a low limit can be used up by a single hospital admission.",
      "## Cancellation and curtailment",
      "Cancellation reimburses non-refundable bookings if you can't travel at all, usually due to illness, injury or death of you or a close relative. Curtailment covers the cost of cutting your trip short for the same reasons.",
      "## Personal liability and baggage",
      "Liability covers you if you're found legally responsible for injuring someone or damaging property while abroad. Baggage cover reimburses lost or stolen luggage, usually with a per-item limit that's lower than people expect.",
      "For a visa application, most embassies want to see the medical expenses limit stated clearly on the certificate — ask for this upfront so you're not waiting on a reissue closer to your travel date."
    ]
  },
  {
    slug: "inpatient-vs-outpatient-cover",
    title: "Medical cover 101: inpatient vs outpatient",
    category: "Medical",
    date: "2026-08-05",
    readTime: "4 min read",
    excerpt: "The single biggest decision on a medical policy. Here's the difference, and why outpatient cover is usually the first thing people cut to save on premium.",
    content: [
      "Inpatient cover pays for care that requires admission to hospital — surgery, a hospital stay, ICU. Outpatient cover pays for care that doesn't — a GP visit, lab tests, physiotherapy, most dental and optical visits.",
      "Because inpatient claims are rarer but far more expensive, insurers price inpatient-only plans much lower than plans that include outpatient. That makes inpatient-only cover a common way to control cost for a young, generally healthy family.",
      "The trade-off is that outpatient visits are the cover people actually use most often — a child with a fever, a work-related check-up, a prescription. Without it, those costs come out of pocket even though you're paying a premium every month.",
      "A reasonable approach for a tight budget: start with inpatient-only to protect against the catastrophic cost of a hospital admission, then add outpatient cover once budget allows, rather than skipping medical cover altogether."
    ]
  },
  {
    slug: "avoid-these-claim-mistakes",
    title: "Five mistakes Kenyans make when filing an insurance claim",
    category: "Claims",
    date: "2026-07-22",
    readTime: "6 min read",
    excerpt: "Most delayed or rejected claims come down to a handful of avoidable errors, not fine print. Here's what to get right from the first phone call.",
    content: [
      "A claim being rejected rarely comes down to hidden fine print — it usually comes down to something that could have been avoided in the first 48 hours.",
      "## Reporting late",
      "Most policies set a reporting window, often 24 to 48 hours for motor claims. Report as soon as it's safe to, even if you're still gathering documents — you can add details afterwards.",
      "## Not notifying the police for a motor claim",
      "For theft, accidents involving injury, or any accident where fault is disputed, an abstract from the police is usually required. Get it early; it can take longer to obtain than people expect.",
      "## Repairing before assessment",
      "Fixing damage before the insurer's assessor has inspected the vehicle is one of the most common reasons a motor claim is delayed or reduced. Wait for assessment, or at minimum photograph everything first.",
      "## Incomplete documentation",
      "Missing logbook copies, ID, or an incomplete claim form is the single biggest cause of delay. A broker can check your documents are complete before submission rather than after a rejection.",
      "## Not disclosing correctly at the start",
      "Understating the value of a vehicle or leaving out a pre-existing condition on a medical application can void a claim entirely, even years later. It's always worth disclosing fully at application, even if it costs a little more in premium."
    ]
  }
];

