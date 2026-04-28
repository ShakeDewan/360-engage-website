**360ENGAGE Platform Development Roadmap\
Technical Architecture Scope and Phased Build Budget \| DRAFT V1.0**

Internal planning draft for Stewart Irvine and Shake Dewan\
Comprehensive 12-18 month roadmap with Phase 1 MVP, Phase 2, Phase 3,
and Year 2 extension

**Business context:\**
360ENGAGE is an app-optional fan intelligence and transaction
orchestration platform for sports clubs and venues. It uses QR-triggered
entry, ultra-fast PWA micropages, conversational AI, and modular backend
integrations to convert fan interactions into transactions, first-party
data, and measurable commercial outcomes. The initial deployment
priority is a working MVP suitable for pilot use with a club such as
Sutton United. The platform must be architected in phases to reduce
technical risk, manage capital efficiently, and support future Canadian
government grant applications, while assuming grant funding is uncertain
and cannot be relied on.

This document defines the phased product, architecture, integration, and
delivery roadmap for 360ENGAGE, including MVP scope, technical
dependencies, budget ranges, and grant-aware build assumptions required
to move from pilot deployment to scalable commercial infrastructure.

360ENGAGE is an app-optional fan intelligence and transaction
orchestration platform for sports venues and clubs. It uses QR-triggered
entry, ultra-fast PWA experiences, conversational AI, and backend
integrations to convert fan interactions into transactions, first-party
data, and measurable commercial outcomes.

Phase 1: MVP Validation Layer\
Phase 2: Multi-Channel Orchestration Layer\
Phase 3: Intelligence and Enterprise Scale Layer

| **Strategic purpose** | Define the complete 360ENGAGE build path from pilot MVP to scalable club platform, with sufficient budget discipline to support seed financing deployment and future valuation growth. |
|----|----|
| **Funding context** | Phase 1 is targeted at an MVP budget of approximately CAD \$250,000. The broader 0-12-month base roadmap is designed to sit inside a seed financing envelope of approximately CAD \$750,000, with the 12-18-month extension expected to be funded through traction, follow-on capital, grants, or a combination of these sources. |
| **Commercial logic** | Use the MVP to prove product utility at Sutton FC, create a reference deployment, sign additional clubs, expand the fan data asset, and improve valuation before the next financing event. |
| **Delivery model** | Canadian-led fractional CTO plus specialist contractors, using a hybrid of no-code acceleration and custom development to maximize speed, IP ownership, and grant alignment. |

**1. Executive Overview**

360ENGAGE should be built as a staged platform rather than a single
monolithic product. The Phase 1 Sutton FC deployment is the entry point,
but it is only the first commercial proof point in a broader 12 to
18-month program. The roadmap below is therefore designed to connect
four objectives: launch a credible MVP, convert the MVP into additional
club sales, harden the product into a reusable platform, and use that
traction to support valuation growth and follow-on financing.

The central strategic principle is to separate pilot utility from
long-term platform ambition without losing the architecture required for
scale. Phase 1 must be lean enough to deliver quickly and within the MVP
budget target. Phases 2 and 3 must convert the MVP into a repeatable
commercial platform. The 12 to 18-month extension must position
360ENGAGE for enterprise readiness, broader club adoption, stronger data
value, and expanded product defensibility.

**2. Platform Definition**

360ENGAGE is a browser-first, app-optional fan service, transaction, and
fan intelligence platform for sports clubs and venues. It uses
QR-triggered entry, ultra-fast PWA experiences, workflow-based
conversational assistance, modular transaction paths, and a lightweight
club-owned data layer to convert fan interactions into service outcomes,
transactions, and first-party intelligence.

The product should not be framed merely as a club app or a chatbot. It
is better defined as a venue interaction layer and commercial
orchestration platform that sits between the club and the fan across key
matchday and non-matchday journeys. In practical terms, it can capture
previously invisible fans, improve support and conversion, and establish
a growing data asset that compounds in value as more clubs and more
interactions enter the system.

**3. Build Objectives by Stage**

| **Planning Item** | **Definition** |
|----|----|
| **Phase 1** | Prove that a low-friction, QR-led, browser-based MVP can work in a live club environment, resolve high-value fan needs, and capture actionable first-party data. |
| **Phase 2** | Deepen product reliability and transaction capability, while reducing one-off implementation friction and strengthening the architecture for additional club onboarding. |
| **Phase 3** | Transform the product from a successful pilot into a commercially reusable platform that can support multiple clubs, richer reporting, sponsor activation, and stronger monetization. |
| **Year 2 extension** | Advance toward enterprise-grade capability, scalable operations, enhanced AI, deeper CRM functionality, and stronger strategic finance positioning. |

**4. Phased Development Roadmap**

| **Phase** | **Timeline** | **Primary Objective** | **Core Build Scope** | **Indicative Budget (CAD)** |
|----|----|----|----|----|
| **Phase 1** | 0-3 months | Launch pilot-grade MVP for Sutton FC and prove low-friction fan entry, service resolution, and first-party data capture. | QR routing, browser PWA, workflow-based support, lightweight CRM, membership and donation flow, ticket and upgrade pathway, dashboard, basic analytics. | \$225,000-\$275,000 |
| **Phase 2** | 3-6 months | Harden product, deepen transactions, and prepare reusable architecture for additional club deployments. | Integration abstraction layer, payments hardening, merchandise and F&B enablement, stronger admin tools, content and campaign management, API discovery adapters, pilot analytics. | \$150,000-\$200,000 |
| **Phase 3** | 6-12 months | Move from single-club pilot to commercial platform capable of signing and onboarding additional clubs. | Multi-club configuration layer, improved fan graph, sponsor modules, channel connectors, enhanced reporting, app-embed readiness, automation upgrades, security and scale hardening. | \$250,000-\$325,000 |
| **Year 2** | 12-18 months | Scale toward enterprise readiness and position for follow-on financing, strategic partnerships, or grant-supported acceleration. | Tenant administration, deeper AI decisioning, expanded CRM capability, benchmark analytics, multilingual support, partner integrations, data monetization preparation. | \$200,000-\$350,000 |

**5. Phase 1: 0-3 Months MVP**

Phase 1 should be treated as the launch foundation, not as the complete
product. Its job is to prove that fans will use a browser-first,
QR-triggered experience without app download friction and that the club
can extract both operational value and commercial insight from those
interactions.

The MVP should include seat-level and concourse-level QR routing,
ultra-fast PWA pages, structured workflow-based support journeys, a
lightweight proprietary CRM and Fan Graph layer, membership support and
renewal capability, donation flow, and at least a credible ticketing and
upgrade pathway. Merchandise and food and beverage should be architected
in Phase 1, but the depth of live integration may vary depending on
Sutton discovery, API availability, and operational readiness.

The customer-service layer is especially important in the MVP because it
creates immediate utility even before every commerce pathway is fully
mature. Core service use cases should include front-office and
membership questions, ticketing help and seat finding, matchday FAQs
including transport and getting home, and upgrade inquiries.

- Business outcome: establish a live reference deployment that proves
  utility, creates case-study value, and supports club acquisition
  conversations.

- Product outcome: validate QR entry, PWA engagement, workflow
  automation, and first-party data capture in a live environment.

- Finance outcome: hold the MVP inside the target budget range of
  approximately CAD \$250,000, subject to discovery and integration
  complexity.

**6. Phase 2: 3-6 Months Product Hardening and Commercial Readiness**

Phase 2 should focus on turning the MVP from a club-specific launch into
a more resilient and commercially sellable product. This stage should
improve integration abstraction, reduce operational fragility, and
strengthen the transaction layer so 360ENGAGE can be sold with greater
confidence to clubs beyond Sutton FC.

Priority work in this phase should include hardening payment flows,
creating reusable integration adapters, improving the admin and campaign
layer, building better reporting, and moving merchandise and food and
beverage pathways from pilot-level structure toward more dependable
execution. This phase should also improve configuration logic so
club-specific content, venue logic, and campaign routing can be reused
without rebuilding the product from scratch each time.

- Business outcome: reduce implementation friction and improve
  credibility in sales conversations with additional clubs.

- Product outcome: create reusable modules rather than one-off workflows
  tied only to Sutton FC.

- Finance outcome: use the traction generated by the MVP to support the
  next stage of deployment without compressing margin through excessive
  custom work.

**7. Phase 3: 6-12 Months Platform Expansion and Multi-Club Readiness**

Phase 3 should be the point where 360ENGAGE begins to behave like a
platform rather than a pilot product. By this stage, the architecture
should support onboarding additional clubs through configurable modules,
stronger reporting, and a more mature Fan Graph framework. This phase is
also where sponsor activation, campaign management, and richer channel
connectivity can begin to create a broader commercial value proposition.

The system should add a multi-club configuration layer, stronger data
structures, more robust campaign tools, app-embed readiness for clubs
that want to surface the experience inside their own app, and a clearer
bridge from operational support workflows into monetization and data
value. Security, QA, and system resilience should also be increased
because the product will be supporting a wider client footprint and
carrying a more meaningful data burden.

- Business outcome: sign and onboard additional clubs using a reusable
  operating model rather than a bespoke implementation approach.

- Product outcome: create a true platform spine, including reusable
  configuration, stronger analytics, and a more valuable data asset.

- Finance outcome: support a higher valuation narrative by showing not
  only product utility, but repeatability, growing adoption, and
  stronger gross margin potential.

**8. Year 2 Extension: 12-18 Months Scale, Intelligence, and Strategic
Finance Positioning**

The 12 to 18 month extension should focus on scaling the platform toward
enterprise readiness and preparing 360ENGAGE for more substantial
financing, partnerships, or strategic exits. The commercial emphasis
should shift from proving the model to demonstrating compounding
platform value across fan intelligence, service automation, sponsor
activation, and club data infrastructure.

This stage should include deeper AI decisioning, stronger multi-tenant
administration, expanded CRM capability, multilingual and multi-market
readiness, richer benchmark reporting, and the operational controls
required for a larger club network. It should also prepare the business
for more advanced monetization options, including data products, premium
reporting, and strategic integrations with external systems.

- Business outcome: demonstrate that 360ENGAGE is not only a club
  service tool, but a scalable platform with defensible data and
  workflow assets.

- Product outcome: move from modular platform to enterprise-ready
  operating layer.

- Finance outcome: strengthen the basis for follow-on financing, grants,
  strategic partnerships, or larger commercial agreements.

**9. Technical Architecture Scope**

The architecture should be staged, modular, and commercially
disciplined. It should support a lean MVP in Phase 1 while preserving
the extensibility needed for Phases 2 and 3. The architecture therefore
needs six primary layers: front-end experience, routing and workflow
orchestration, identity and CRM, transaction and integration services,
operations and admin tools, and infrastructure plus monitoring.

- Front-end experience layer: mobile browser, PWA shell, QR landing
  pages, service workflows, transaction screens, and campaign content.

- Routing and workflow layer: QR resolution, seat and concourse logic,
  rules engine, workflow state, escalation handling, and service
  orchestration.

- Identity and CRM layer: lightweight profile store, consent management,
  fan interaction history, Fan Graph schema, tagging, and basic
  segmentation.

- Transaction and integration layer: payment abstraction, ticketing
  connectors, membership and donation flows, merchandise and food and
  beverage modules, and handoff logic where APIs are absent.

- Operations layer: admin dashboard, campaign and content management,
  service monitoring, reporting, and club configuration controls.

- Infrastructure layer: cloud hosting, authentication, logging, DevOps,
  analytics instrumentation, QA environments, and security controls.

The architecture should also distinguish between confirmed modules and
discovery-gated modules. Anything dependent on Sutton systems, payment
rails, or venue operations should be built through an abstraction layer
wherever possible. This is important both for speed and for future
re-use across clubs.

**10. Business Workflow Diagram Notes**

The business workflow diagram should be centered on the fan journey,
with club operations shown as the supporting backend workflow. The
recommended sequence is: scan, identify context, launch PWA, route to
primary journey, resolve through service flow or transaction path,
capture outcome, write interaction data to the CRM and Fan Graph, and
surface operational visibility through the dashboard.

The backend operational view should show how fan intents are
categorized, which journeys can be resolved automatically, which require
handoff, how transactions are processed or staged, and how service and
commercial events become part of the growing club data asset. This
diagram should help Shake and stakeholders see that the product is not
only a front-end experience. It is also an operating workflow that
connects support, transactions, and intelligence.

**11. Resource Model**

The preferred build model is a Canadian-led fractional CTO plus
specialist contractors. This is the right balance for speed, cost
discipline, and IP control. The core delivery team should include a
fractional CTO, a product and UX lead, a front-end PWA developer, a
back-end and integration developer, an automation and conversational
workflow specialist, and QA or implementation support. No-code tools can
be used selectively to accelerate internal dashboards or workflow
prototypes, but core intellectual property should remain under custom
control.

**12. Phased Build Budget**

The table below provides an indicative phased build budget in CAD. It is
designed to support planning for a seed financing deployment of
approximately CAD \$750,000 across the first 12 months, while also
showing the expected Year 2 extension budget. The range structure
reflects the fact that integration complexity, club system discovery,
and the live depth of transaction pathways may materially affect final
cost.

<table>
<colgroup>
<col style="width: 37%" />
<col style="width: 15%" />
<col style="width: 15%" />
<col style="width: 15%" />
<col style="width: 15%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>Workstream</strong></th>
<th style="text-align: center;"><strong>Phase 1<br />
0-3 months</strong></th>
<th style="text-align: center;"><strong>Phase 2<br />
3-6 months</strong></th>
<th style="text-align: center;"><strong>Phase 3<br />
6-12 months</strong></th>
<th style="text-align: center;"><strong>Year 2<br />
12-18 months</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Product strategy, UX, and journey design</td>
<td style="text-align: center;">$20k-$30k</td>
<td style="text-align: center;">$12k-$18k</td>
<td style="text-align: center;">$18k-$25k</td>
<td style="text-align: center;">$15k-$25k</td>
</tr>
<tr>
<td>PWA front-end and fan-facing journeys</td>
<td style="text-align: center;">$45k-$60k</td>
<td style="text-align: center;">$25k-$35k</td>
<td style="text-align: center;">$35k-$45k</td>
<td style="text-align: center;">$25k-$40k</td>
</tr>
<tr>
<td>Back-end, routing, and application logic</td>
<td style="text-align: center;">$35k-$45k</td>
<td style="text-align: center;">$20k-$30k</td>
<td style="text-align: center;">$30k-$40k</td>
<td style="text-align: center;">$25k-$35k</td>
</tr>
<tr>
<td>CRM and Fan Graph data layer</td>
<td style="text-align: center;">$25k-$35k</td>
<td style="text-align: center;">$18k-$25k</td>
<td style="text-align: center;">$30k-$40k</td>
<td style="text-align: center;">$35k-$50k</td>
</tr>
<tr>
<td>Workflow automation and AI assistance</td>
<td style="text-align: center;">$25k-$35k</td>
<td style="text-align: center;">$18k-$25k</td>
<td style="text-align: center;">$30k-$40k</td>
<td style="text-align: center;">$30k-$45k</td>
</tr>
<tr>
<td>Payments, ticketing, and transaction orchestration</td>
<td style="text-align: center;">$30k-$40k</td>
<td style="text-align: center;">$25k-$35k</td>
<td style="text-align: center;">$35k-$45k</td>
<td style="text-align: center;">$25k-$40k</td>
</tr>
<tr>
<td>Merchandise and F&amp;B integration modules</td>
<td style="text-align: center;">$10k-$15k</td>
<td style="text-align: center;">$20k-$30k</td>
<td style="text-align: center;">$25k-$35k</td>
<td style="text-align: center;">$20k-$30k</td>
</tr>
<tr>
<td>Admin dashboard and campaign management</td>
<td style="text-align: center;">$15k-$20k</td>
<td style="text-align: center;">$10k-$15k</td>
<td style="text-align: center;">$18k-$25k</td>
<td style="text-align: center;">$15k-$25k</td>
</tr>
<tr>
<td>Infrastructure, security, QA, and DevOps</td>
<td style="text-align: center;">$10k-$15k</td>
<td style="text-align: center;">$8k-$12k</td>
<td style="text-align: center;">$15k-$20k</td>
<td style="text-align: center;">$15k-$25k</td>
</tr>
<tr>
<td>Project management and contingency</td>
<td style="text-align: center;">$10k-$20k</td>
<td style="text-align: center;">$10k-$15k</td>
<td style="text-align: center;">$14k-$20k</td>
<td style="text-align: center;">$20k-$35k</td>
</tr>
<tr>
<td><strong>Indicative phase total</strong></td>
<td style="text-align: center;"><strong>$225k-$275k</strong></td>
<td style="text-align: center;"><strong>$150k-$200k</strong></td>
<td style="text-align: center;"><strong>$250k-$325k</strong></td>
<td style="text-align: center;"><strong>$200k-$350k</strong></td>
</tr>
</tbody>
</table>

Budget interpretation: the first 12 months of the roadmap can be planned
within a working envelope of approximately CAD \$625,000 to CAD
\$800,000. This is directionally aligned with a seed financing target of
approximately CAD \$750,000, with the expectation that final allocation
will be refined based on discovery, contractor rates, and the degree of
live integration committed in each phase. The 12 to 18 month extension
should be presented as the next growth budget rather than assumed to be
fully financed by the initial seed.

**13. Strategic Financing Logic**

The financing strategy should be presented in three steps. Step one is
to deploy approximately CAD \$250,000 into a disciplined MVP that can
launch, prove utility, and create an initial reference case. Step two is
to use the remaining seed capital to harden the product, sign additional
clubs, and convert the MVP into a commercial platform with improving
implementation efficiency. Step three is to use that evidence base,
including club traction, product maturity, and a growing data asset, to
support a stronger valuation and a more favorable next financing event.

This is a more credible investor story than trying to raise against a
concept alone. It ties capital deployment to visible milestones, reduces
product risk, and shows how the MVP becomes a valuation engine rather
than just a development expense.

**14. Grant Positioning**

The roadmap should remain grant-aware but not grant-dependent. Canadian
development is strategically important because it supports IP
positioning, commercialization logic, and access to applicable grant
programs. That said, the platform must remain viable even if grant
timing is uncertain. The strongest grant framing is a blended thesis
across AI-enabled digital infrastructure, sports and venue innovation,
commercialization of Canadian software IP, and exportable data-driven
platform development.

**15. Recommended Closing Position**

360ENGAGE should be presented as a staged platform build, not as a
single pilot budget. Sutton FC is the first deployment, but the actual
objective is to create a broader fan interaction and intelligence
platform that can be reused across clubs. The roadmap therefore needs to
connect the MVP budget, the seed deployment strategy, the multi-phase
technical architecture, and the valuation logic into one coherent plan.
Phase 1 proves the model. Phases 2 and 3 convert it into a repeatable
platform. The 12 to 18 month extension prepares the business for scale,
stronger economics, and more strategic financing options.

**16. Working Assumptions Still Requiring Commercial Confirmation**

Several issues should remain explicitly marked as working assumptions
until the Sutton discovery process and subsequent customer conversations
are complete. These do not undermine the roadmap, but they will affect
final build sequencing and implementation detail. The most material
variables are the club's existing ticketing, CRM, POS, and payments
environment; the degree to which merchandise and food and beverage
should be fully live in Phase 1 versus staged; and the operational
responsibilities between club staff and platform workflows on matchdays.

- Whether ticket purchase and payment should sit fully inside the PWA in
  early releases or use assisted handoff for part of the journey.

- Which third-party systems should be integrated directly, abstracted
  through middleware, or replaced by lightweight 360ENGAGE-native
  modules.

- How aggressively AI automation should evolve after the MVP, especially
  where clubs require higher trust, human review, or brand-safe workflow
  controls.

- The balance between a lightweight proprietary CRM layer and the future
  roadmap toward a more complete club CRM replacement.

**17. Immediate Planning Actions for Stewart and Shake**

The next practical step is to use this document as the planning spine
for a working session that locks scope, delivery sequence, and budget
posture. That session should not attempt to answer every technical
question in one sitting. It should answer the questions that drive
capital deployment and implementation order.

- Confirm the MVP line items that must be live at Sutton FC and separate
  them from pathways that can remain hybrid, staged, or discovery-gated.

- Choose the working budget posture for internal planning: lean, base,
  or expanded within the CAD \$250,000 Phase 1 target and the broader
  seed deployment envelope.

- Agree the platform narrative for investors: MVP first, additional
  clubs second, valuation uplift third, then follow-on financing from a
  stronger position.

- Convert this roadmap into a board-style one-page summary, a schematic
  architecture slide, and a financial deployment schedule tied to the
  seed raise.
