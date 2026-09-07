# Value-first marketing proposal

Open [the comparison](https://max-memory.com/previews/value-first/) or
[the revised homepage](https://max-memory.com/previews/value-first/revised/proposed_index.html).
Choose a page and use **Original only** or **Revised only** for a full-width
view. The panes scroll independently.

## Source and deployment

The deployable files now live at `public/previews/value-first/`:

- `index.html` is the side-by-side comparison.
- `original/` is a frozen copy of the original marketing pages and assets.
- `revised/` contains the proposed homepage, product tour, and audience pages.

The accepted revision has also been copied to `public/`, starting with
[`public/proposed_index.html`](https://max-memory.com/proposed_index.html).
Make future marketing edits at those main site paths; the comparison directories
remain review snapshots. From the repository root, `./deploy.sh` publishes
both the existing site and this review directory through normal Firebase
Hosting. The main homepage remains the Coming soon page. Review pages have
`noindex, nofollow, noarchive` response headers and are publicly accessible
for sharing; they do not require a login.

This README and `original-sha256.json` remain outside `public/`, along with
the private strategy notebook. The manifest records the original files at
the start of the design work.

The earlier [temporary channel](https://max-memory-prod--value-first-7q84orwy.web.app)
expires on 2026-10-06 unless refreshed. Normal deployments update the
max-memory.com links above, not that temporary channel.

## Editorial direction

- Keep “Remember it now. Ask for it later.”
- Lead with taking or choosing a photo, describing it by voice, and asking for
  it later by its story. Keep everyday and people examples as alternate demos.
- Move the audience links immediately below the hero.
- Keep the homepage focused, with direct links into a twelve-chapter product
  tour. Its feature index covers voice, saving from other apps, photo context,
  Memory Events, recipes from websites and cookbook photos, recall, shopping
  and packing lists, collections, plans, shared
  spaces, and privacy.
- Explain the Share menu step by step and distinguish it from shared spaces.
  Give photos and Memory Events dedicated sections: keep a photo’s meaning
  and group an experience across dates. Include recipes, widgets, linked plans,
  and memory review in the deeper tour.
- Show the customer benefit of shared spaces with an explicitly labeled
  Alex/Sam example. Present Premium creation and paid Basic participation as
  the planned offering; personal sync and final limits remain undecided.
- Make the planned $5 Basic price and limited trial visible.
- Use “Plans & access” links that reach actual availability information,
  replacing beta signup buttons that opened a coming-soon dialog.
- Tighten lifetime, security, privacy, and offline claims. Keep personal memory
  storage distinct from online AI processing and shared-space replication.

## Intentionally unresolved before publication

The hero and feature stories use locally served AI-generated illustrations with
scripted, explicitly labeled example conversations. Image prompts and asset
paths are recorded in [image-prompts.md](image-prompts.md).
No suitable real app screenshot or recording was present in the inspected
assets. Replace or accompany this example with an approved real capture before
claiming it is evidence of actual app behavior.

Public trial access is not available in the supplied site. These pages therefore
say “invited testing only” and do not invent a TestFlight/App Store destination,
collect a waiting list, or simulate successful signup.

The planned offer is visibly labeled as planned. Final allowances, Premium
price, trial terms, sync placement, and sharing availability must be settled
before turning this into launch copy. The internal $0.10 trial-spend proposal
is not displayed as a customer-facing AI-credit price.

## Validation

Before promotion, the original public files and copied originals were checked
against their starting hashes. The frozen `original/` copy still matches that
manifest; the main site marketing files now match the accepted revision.
All 15 review HTML pages were checked for local assets, internal
links, section anchors, unique ids, and external references. New scripts passed
JavaScript syntax checks. No browser interaction or screenshot QA was performed.

People and relationship examples now cover questions across customers, teams,
friends, and family. The FallChem names and allergy notes come from the fictional
`my-memory/personas/salesperson-v1/world.json` fixture; its expected answer is
illustrative copy, not a claim that this editing session ran the model harness.
Birthday and other question examples are illustrative as labeled.
