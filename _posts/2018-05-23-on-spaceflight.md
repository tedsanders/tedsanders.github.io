---
title: On spaceflight
layout: default
tags: notes
---


*   Spaceflight is important because one day it may decouple the fate of life from the fate of Earth
*   I have not found great literature on spaceflight technology and economics. Some reports:
    *   [2013 report by National Academy of Sciences](https://www.nap.edu/read/18801/chapter/6#169) (259 pages)
    *   If you find any excellent references please let me know
*   Supply of space travel
    *   Cost structure
        *   Let's look at today's lowest cost rocket, SpaceX's Falcon 9
        *   The cost of a Falcon 9 launch is something around [$37M](http://spacenews.com/spacexs-reusable-falcon-9-what-are-the-real-cost-savings-for-customers/) - [$48M (cost calculation)](https://www.reddit.com/r/spacex/comments/62sq7z/cost_calculation_for_falcon_9_falcon_heavy/), of which [90%](http://www.wolframalpha.com/input/?i=44.25%2F48.65) is the rocket, 9% is operations, and [0.3%](https://www.reddit.com/r/elonmusk/comments/3wyv4s/live_thread_elon_musks_talk_at_agu_2015/ ) is fuel
        *   Of the rocket's cost, [less than 1%](https://space.stackexchange.com/questions/17777/what-is-the-rough-breakdown-of-rocket-costs) is the raw materials - almost all the cost is tooling and high-wage labor
        *   Given that rocket manufacturing dominates the cost, there are three ways to reduce costs:
            *   Make the rocket cheaper to manufacture (to lower cost per rocket)
            *   Make the rocket more efficient (to get more payload per launch)
            *   Make the rocket reusable (to get more launches per rocket)
        *   Although all three frontiers are being pushed, they are fundamentally at odds with one another
        *   To date, SpaceX's success in lowering costs has come primarily from lowering manufacturing costs, not from greater efficiency or reusability (yet)
        *   Tyranny of space transportation costs: [https://www.nasa.gov/sites/default/files/atoms/files/eso_final_report.pdf](https://www.nasa.gov/sites/default/files/atoms/files/eso_final_report.pdf) (page 9)
    *   Physical limits
        *   Conservation of energy and conservation of momentum both limit what is possible
        *   Conservation of momentum
            *   Because momentum is conserved, the only way your motion can be changed is to push off of something else
            *   Rockets get around by pushing off of their exhausted fuel
            *   Delta-v is the budget that says how much pushing your rocketship can do (and like a fuel gauge, tells you which destinations you can and cannot reach)
            *   The rocket equation: Delta-v = velocity of propellant exhaust * ln( mass with propellent / mass without propellent)
            *   Delta-v is convenient to work with for two reasons:
                *   Delta-v adds (mostly) linearly - i.e., cost of maneuver A + maneuver B' is cost of 'maneuver A' + cost of 'maneuver B'
                *   Delta-v is independent of rocketship mass or design - i.e., if two rockets have the same delta-v, then they can (probably) reach the same destinations
            *   This fantastic map shows how much delta-v is needed to reach destinations in the solar system: [https://i.redditmedia.com/U5iH7huE5qKth7ZFvipXt8vzaFOO99qHFh9o9_SkLLk.png?s=eeebc1644766a6de193fe7e1fc52a98c](https://i.redditmedia.com/U5iH7huE5qKth7ZFvipXt8vzaFOO99qHFh9o9_SkLLk.png?s=eeebc1644766a6de193fe7e1fc52a98c)
                *   For most destinations (Moon, Mars, asteroids, other moons - basically anything except large planets), the majority of delta-v is spent escaping Earth's gravity well (~10 km/s)
                *   Counterintuitively, despite the fact that we're all constantly falling toward the Sun, it is by far the most expensive destination to reach in the solar system (500+ km/s)
        *   Conservation of energy
            *   Reaching orbit requires both potential energy (from gravity) and kinetic energy (fast enough to orbit instead of falling back down)
            *   At minimum, sending 1kg to low earth orbit requires 31 MJ: [4MJ](http://www.wolframalpha.com/input/?i=1+kg+*+g+*+400+km&rawformassumption=%22UnitClash%22+-%3E+%7B%22g%22,+%7B%22StandardAccelerationOfGravity%22%7D%7D&rawformassumption=%22UnitClash%22+-%3E+%7B%22kg%22,+%7B%22Kilograms%22%7D%7D) in potential energy and [27 MJ](http://www.wolframalpha.com/input/?i=1%2F2+*+1+kg+*+((equatorial+circumference+of+the+earth+%2B+400+km)+%2F+92+minutes)%5E2+-+1%2F2+*+1+kg+*+(equatorial+circumference+of+the+earth+%2F+1+day)%5E2) in kinetic energy
            *   31 MJ costs around $1 at today's electricity rates
            *   For comparison, a Falcon 9 FT is [~$2,700/kg](http://www.wolframalpha.com/input/?i=62+million+dollars+%2F+22,800+kg ) to LEO
        *   Historical progress
            *   The [number of orbital launches per year](https://en.wikipedia.org/wiki/Timeline_of_spaceflight) has been pretty steady at around 50-150, declining from the 1960s through 2000s, and then rising again in the 2010s
                *   (Data I wish I had: government vs commercial split, the low-earth orbit vs others split, and the change in payload per launch)
    *   Propulsion choices
        *   The two key things to choose are your propellant (the stuff you throw backward) and your fuel (which gives you energy to throw propellant backward)
            *   Note: For chemical rockets, the propellant is the same as the exhausted fuel, but this isn't the case for other propulsion systems
        *   Energy can be kinetic or embodied in one of the fundamental forces
        *   Chemical fuel
            *   [20-minute intro video by Scott Manley](https://www.youtube.com/watch?v=jI8TuufCp0M)
            *   Ideally, to get the fastest exhaust velocity, you want fuel to be as hot as possible and as light as possible
            *   Some typical fuel combos:
            *   [RP-1 (refined kerosene)](https://en.wikipedia.org/wiki/RP-1) - oxygen
                *   Good specific impulse (353 s in vacuum)
                *   RP-1 is liquid at room temperature, so no cooling & longer storage times
                *   Density (0.8 - 1 g/L) is similar to oxygen, which makes pumping easier
                *   Burns dirty (carbon residue), so not great for reuse
                *   Made from petroleum, so can't be made off-Earth
            *   Hydrogen - oxygen
                *   Highest specific impulse (450 s in vacuum))
                *   Burns cleanest (no carbon residue), best for reusability
                *   Can be created from H2O on Moon, Mars, asteroids
                *   Low density, requiring bigger, heavier tanks
                *   Liquid needs heavy cooling/insulation to prevent evaporation (~20 K), loses maybe [a couple percent](https://space.stackexchange.com/questions/2848/how-long-is-it-feasible-to-store-cryogenic-fuels) a day in space
                *   [Can embrittle or crack some metals over time](https://en.wikipedia.org/wiki/Hydrogen_embrittlement) - not sure if this a huge problem or a tiny inconvenience
            *   [Methane - oxygen](https://www.reddit.com/r/spacex/comments/4s0k88/how_did_methane_become_the_rocket_fuel_of_the/)
                *   Kind of a compromise between RP-1 and H2
                *   Decently high impulse (~380 s in vacuum)
                *   Burns relatively clean
                *   Similar boiling temperature as liquid oxygen, so cooling can be shared
                *   Sort-of similar density to liquid oxygen, for easier pumping
                *   Can be [manufactured on Mars by Sabatier process](http://www.thespacereview.com/article/3484/1)
            *   A [gazillion other combos](https://en.wikipedia.org/wiki/Liquid_rocket_propellant#Table), such as:
                *   UDMN (unsymmetric dimethylhydrazine) - dinitrogen tetroxide: very storable, easy to ignite, used for long missions, but toxic
                *   Monopropellants (e.g., H2O2, H2N2H2, N2O): simple, low impulse, used for orientation control)
                *   Lithium - fluorine - hydrogen: crazy high impulse of 542 s, but even crazier chemistry - lithium heated hundreds of degrees to melt, hydrogen cooled hundreds of degrees to liquify, and toxic HF acid
        *   Nuclear fuel
            *   Theoretically, nuclear fuel is superior to chemical fuel because it has higher energy density and burns hotter - however, containing nuclear fuel is difficult and heavy
            *   Nuclear to thermal to electric to kinetic
                *   [Nuclear electric rocket](https://en.wikipedia.org/wiki/Nuclear_electric_rocket)
                *   RTGs (Radioisotope Thermal Generators)
            *   Nuclear to thermal
                *   Controlled reaction: [Nuclear thermal rocket](https://en.wikipedia.org/wiki/Nuclear_thermal_rocket) (~850 s of specific impulse in 1960s)
                *   Uncontrolled reaction: [Nuclear pulse propulsion](https://en.wikipedia.org/wiki/Nuclear_pulse_propulsion)
        *   Photonic fuel
            *   [Beam-powered propulsion](https://en.wikipedia.org/wiki/Beam-powered_propulsion)
            *   [Solar sail](https://en.wikipedia.org/wiki/Solar_sail)
        *   Kinetic/thermal fuel: Pretty garbage, no real way it could work, only included for completeness
        *   Gravitational fuel: Pretty garbage, no real way it could work, only included for completeness
    *   Forms of propulsion not linked to a fuel
        *   [Ion thruster](https://en.wikipedia.org/wiki/Ion_thruster)
            *   Can be powered by off-board energy (solar) or very dense on-board energy (nuclear)
            *   Specific impulses as high as 20,000 (but needing to be powered by heavy solar panels or nuclear reactors)
            *   Super low thrust
        *   [Space elevator](https://en.wikipedia.org/wiki/Space_elevator)
            *   Fragile, high-cost, potential wobble instabilities, not strong enough for Earth gravity
            *   Potential long-term use on moons
    *   Near future
        *   Today a fully loaded Falcon 9 is priced ~$2,700/kg to LEO
        *   Upcoming rockets
            *   SpaceX
                *   Falcon 9 Block 5 (May 2018)
                    *   Continues to use RP-1/LOX fuel with coaxial pintle injection, for both stage 1 and stage 2
                    *   So far, SpaceX has reflown used Falcon 9s three times, but each just once
                    *   The Block 5 version of the Falcon 9 is intended to be the final version, better engineered for reusability (as many as 10 or more flights)
                    *   Goal is to reduce refurb turnaround time from months to weeks/days, with a 24-hour turnaround time demo targeted in 2019
                    *   Plans to recover the second stage have been shelved, but SpaceX is experimenting with recovering the fairing
                *   Falcon Heavy (2018)
                    *   Built from Falcon 9s
                    *   Bigger
                *   Big Falcon Rocket (2020?)
                    *   Envisioned to replace all previous SpaceX rockets/spacecraft (Falcon 9, Falcon Heavy, Dragon spacecraft)
                    *   Methane/LOX for stage 1 and stage 2
                    *   Both stages to be reusable
                    *   150,000 kg payload to LEO (6x Falcon 9)
                    *   Designed for satellites, Mars missions, Earth-to-Earth passenger transport
            *   Blue Origin
                *   New Glenn (2020?)
                    *   45,000 kg payload to LEO
                    *   Methane/LOX for stage 1
                    *   H2/LOX for stage 2 (and optional stage 3)
                    *   Stage 1 to be reusable
                    *   [$2.5B spent on development as of Sep 2017](http://spacenews.com/blue-origin-enlarges-new-glenns-payload-fairing-preparing-to-debut-upgraded-new-shepard/)
            *   NASA/Boeing
                *   Space Launch System (SLS) (2022?)
                    *   Heavy launch vehicle intended to be Mars-capable
                    *   Derived from Space Shuttle design
                    *   Solid fuel boosters
                    *   H2/LOX for stage 1, stage 2, and optional stage 3
                    *   ~100,000 kg payload to LEO
                    *   Something like $8B has been spent with another $7B planned by 2021 (a [second source](https://www.airspacemag.com/space/bigger-saturn-bound-deep-space-180952802/) says $22B thru 2020 - may depend on how you attribute costs)
            *   European Space Agency (ESA)
                *   Ariane 6 (2020?)
                    *   20,000 kg payload to LEO
                    *   Solid fuel boosters
                    *   H2/LOX for stage 1, stage 2
                    *   $4B total development cost projected in [2015](http://spacenews.com/desire-for-competitive-ariane-6-nudges-esa-toward-compromise-in-funding-dispute-with-contractor/)
                    *   Not intended to be reusable, but research being done for future versions
            *   Rocket Lab
                *   Electron rocket
                    *   ~200 kg payload (<$6M per launch, so $27K / kg to SSO)
                    *   Key idea is to use a battery for fuel pumping, which is less weight efficient but simpler to build
                    *   2 launches so far: one success, one failure
                    *   RP-1/LOX for stage 1, stage 2
            *   Not sure what's coming out of China/Russia
            *   Let me know if you think I should add any other rockets here
*   Demand for space travel beyond Earth orbit
    *   I am skeptical that there are economic cases for space travel in the next century. The most promising economic activities seems to be fuel mining and manufacturing, but those are only useful for supporting other activities. Very long-term, the best case I see for an economic return is the terraforming of Mars, and even that seems worthwhile only if we subsidize it to hedge against something going seriously bad on Earth. (And it's gotta be _seriously_ bad if Mars is ends up looking better than a remote bunker on Earth.)
    *   Demand can fall into a number of categories:
    *   Science
        *   Beyond curiosity, economic applications seem limited (?)
    *   Tourism
        *   In his book _Artemis_, [author Andy Weir saw tourism as the most plausible driving economic force for a moonbase](http://www.businessinsider.com/andy-weir-artemis-moon-city-economics-the-martian-2017-11)
    *   Mining
        *   Mining in space will be expensive, so the only reasons to do it are (1) to find resources that are rare on Earth or (2) to support other space activities
            *   Heavy metals - e.g., platinum. (Rarer on Earth vs other bodies in the solar system because they sank into the center of the Earth.)
            *   He3
                *   100x more abundant in solar system than on Earth (on Earth they have been diluted by He4 coming off of U and Th radioactive decay - though I don't know why Earth has more U and Th)
                *   Articles against He3 mining:
                    *   [http://cds.cern.ch/record/1055767?ln=en](http://cds.cern.ch/record/1055767?ln=en)
                        *   We don't even really know if it's out there and it's not that great for neutron-free fusion because neutrons still get created from secondary reactions
                    *   [http://www.thespacereview.com/article/2834/1](http://www.thespacereview.com/article/2834/1)
                        *   We don't even have He3 fusion and the amounts on the moon are unproven estimates and even if true the concentrations of He3 on the moon are still so low that it require massive mining operations just to get tiny amounts of He3
            *   Hydrocarbons - In-space fueling
        *   [Planetary Resources](https://www.planetaryresources.com/), who has thought about mining more than I, seems to have pivoted from metal mining to water mining
        *   I wish I had a better sense of the market for precious metals. For example, each year Earth mines about 200 tons of platinum worth $5B. If we landed a platinum-rich asteroid with 10,000 tons of platinum, how would the market respond? Obviously prices would crash with increased supply. We wouldn't even know what to do with that much platinum. But long-term, what new demand might be unlocked by lower platinum prices? Difficult to speculate on.
        *   Space mining has an interesting parallel with deep-sea drilling. Deep-sea drilling was impossible for a long time, due to the technology and cost. Eventually it became worthwhile as we figured out the technology (which essentially requires robot submersibles to build an underwater city) and with the financing (a single platform can cost $3 billion). Asteroid mining will require further leaps in technology and financing.
    *   Low gravity manufacturing
        *   ??
    *   Solar
        *   Seems way too costly to me. Getting sunlight 24/7 with 0 atmospheric losses is not gonna be that much better than getting sunlight 8/7 with 50% losses. Putting down 6 panels on the ground is easier than 1 panel in space.
        *   One interesting thing is the possibility of long distance wireless power. On Earth this doesn't work because of atmosphere. But in space, a network of satellites could conceivably shoot laser power around to one another, right?
    *   ??
*   Destinations for space travel (TBD)
    *   Low earth orbit
        *   Cheapest, closest to Earth, no resources
        *    ???
    *   Moon
        *   Water resources for hydrogen fuel
        *   Ability to tunnel or build structures for radiation protection
        *   Some gravity
        *   Super cold polar craters for cryogenic fuel storage, cryogenic computing, etc.
        *   Close enough to Earth that we can launch help if something goes wrong
        *   Close enough to Earth that long loiter times are not needed
        *   ???
    *   Asteroids
        *   Water resources for hydrogen fuel
        *   Heavy metal resources to bring back to Earth
        *   Near zero gravity
    *   Mars
        *   [https://en.wikipedia.org/wiki/Human_mission_to_Mars](https://en.wikipedia.org/wiki/Human_mission_to_Mars)
        *   Water for hydrogen fuel and hydrocarbons for methane fuel
        *   Some gravity, a little atmosphere
        *   Can tunnel / build for radiation protection
        *   Atmosphere
        *   Can be terraformed
        *   Far from Earth (energy-efficient travel times of ~300 days during windows that occur every 26 months)
    *   Interesting moons
        *   Europa, Enceladus, ???
*   Interstellar trade (TBD)
