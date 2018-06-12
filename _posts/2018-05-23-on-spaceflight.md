---
title: On spaceflight
layout: default
---



*   There is not a great centralized literature on spaceflight technology and economics. Some reports I've found:
    *   2013 report by National Academy of Sciences (259 pages) [https://www.nap.edu/read/18801/chapter/6#169](https://www.nap.edu/read/18801/chapter/6#169)
    *   ??
*   Supply of space travel
    *   Cost structure
        *   Let's look at an example, SpaceX's Falcon 9, today's lowest cost rocket
        *   The cost of a Falcon 9 launch is something like [$40M]([http://spacenews.com/spacexs-reusable-falcon-9-what-are-the-real-cost-savings-for-customers/](http://spacenews.com/spacexs-reusable-falcon-9-what-are-the-real-cost-savings-for-customers/))-[$50M (cost calculation)](https://www.reddit.com/r/spacex/comments/62sq7z/cost_calculation_for_falcon_9_falcon_heavy/), of which [90%](http://www.wolframalpha.com/input/?i=44.25%2F48.65) is the rocket, 9% is operations, and [0.3%](https://www.reddit.com/r/elonmusk/comments/3wyv4s/live_thread_elon_musks_talk_at_agu_2015/) is fuel
        *   Of the rocket cost, [less than 1%](https://space.stackexchange.com/questions/17777/what-is-the-rough-breakdown-of-rocket-costs) is raw materials - almost all the cost is equipment and high-wage labor
        *   Given that rocket manufacturing dominates the cost, there are three ways to reduce costs:
            *   Make the rocket cheaper to manufacture (to lower cost per rocket)
            *   Make the rocket more efficient (to get more payload per launch)
            *   Make the rocket reusable (to get more launches per rocket)
        *   Although all three frontiers are being pushed, they are fundamentally at odds with one another
        *   To date, SpaceX's success in lowering costs has come primarily from lowering manufacturing costs, not from greater efficiency or reusability (yet)
    *   Physical limits
        *   Conservation of energy and conservation of momentum both limit what is possible
        *   Conservation of momentum
            *   Delta-v is the budget that limits how far your spaceship goes
            *   The rocket equation: Delta-v = velocity of propellant exhaust * ln( mass with propellent / mass without propellent)
            *   Delta-v is easy to work with because it adds linearly - i.e., cost of maneuver A + B is cost of maneuver A + cost of maneuver B
            *   This fantastic map shows how much delta-v is needed to reach destinations in the solar system: [https://i.redditmedia.com/U5iH7huE5qKth7ZFvipXt8vzaFOO99qHFh9o9_SkLLk.png?s=eeebc1644766a6de193fe7e1fc52a98c](https://i.redditmedia.com/U5iH7huE5qKth7ZFvipXt8vzaFOO99qHFh9o9_SkLLk.png?s=eeebc1644766a6de193fe7e1fc52a98c)
            *   For most missions (Moon, Mars, asteroids, other moons - basically anything except large planets), the majority of delta-v is spent escaping Earth's gravity well
        *   Conservation of energy
            *   At minimum, sending 1kg to low earth orbit requires [4MJ](http://www.wolframalpha.com/input/?i=1+kg+*+g+*+400+km&rawformassumption=%22UnitClash%22+-%3E+%7B%22g%22,+%7B%22StandardAccelerationOfGravity%22%7D%7D&rawformassumption=%22UnitClash%22+-%3E+%7B%22kg%22,+%7B%22Kilograms%22%7D%7D) in potential energy and [27 MJ](http://www.wolframalpha.com/input/?i=1%2F2+*+1+kg+*+((equatorial+circumference+of+the+earth+%2B+400+km)+%2F+92+minutes)%5E2+-+1%2F2+*+1+kg+*+(equatorial+circumference+of+the+earth+%2F+1+day)%5E2) in kinetic energy - roughly $1/kg at today's electricity rates (for comparison, a Falcon 9 FT is [~$2,700/kg](http://www.wolframalpha.com/input/?i=62+million+dollars+%2F+22,800+kg) to LEO)
        *   Historical progress
            *   ??
    *   Propulsion choices
        *   Energy can be kinetic or embodied in one of the fundamental forces
        *   Chemical fuel
            *   [Video by Scott Manley](https://www.youtube.com/watch?v=jI8TuufCp0M)
            *   Ideally want fuel to be as hot as possible and as light as possible, to get the most velocity. Some typical combos:
            *   RP-1 (refined kerosene) - oxygen
                *   Good specific impulse
                *   RP-1 is liquid at room temperature, so no cooling & longer storage times
                *   Similar density as oxygen, for simpler pumping
                *   Burns dirty (carbon residue), so not great for reuse
                *   Made from petroleum, can't easily be made off-Earth
            *   Hydrogen - oxygen
                *   Highest specific impulse
                *   Burns cleanest (no carbon residue), best for reusability
                *   Can be created from H2O on Moon, Mars, asteroids
                *   Low density, requiring bigger, heavier tanks
                *   Liquid needs heavy cooling/insulation to prevent evaporation (~20 K), loses maybe [a couple percent](https://space.stackexchange.com/questions/2848/how-long-is-it-feasible-to-store-cryogenic-fuels) a day in space
                *   [Can embrittle or crack some metals over time](https://en.wikipedia.org/wiki/Hydrogen_embrittlement)
            *   [Methane - oxygen](https://www.reddit.com/r/spacex/comments/4s0k88/how_did_methane_become_the_rocket_fuel_of_the/)
                *   Kind of a compromise between RP-1 and H2
                *   Decently high impulse
                *   Burns relatively clean
                *   Similar boiling temperature as liquid oxygen, so cooling can be shared
                *   Sort-of similar density to liquid oxygen, for easier pumping
                *   Can be manufactured on Mars by Sabatier process
            *   A [gazillion]([https://en.wikipedia.org/wiki/Liquid_rocket_propellant#Table](https://en.wikipedia.org/wiki/Liquid_rocket_propellant#Table)) other combos, such as:
                *   UDMN (unsymmetric dimethylhydrazine) - dinitrogen tetroxide: very storable, easy to ignite, used for long missions, but toxic
                *   Monopropellants (e.g., H2O2, H2N2H2, N2O): simple, low impulse, used for orientation control)
                *   Lithium - fluorine - hydrogen: crazy high impulse of 542 s, but even crazier chemistry - lithium heated hundreds of degrees to melt, hydrogen cooled hundreds of degrees to liquify, and toxic HF acid
        *   Nuclear fuel
            *   Nuclear to thermal to electric to kinetic
                *   [Nuclear electric rocket](https://en.wikipedia.org/wiki/Nuclear_electric_rocket)
                *   RTGs (Radioisotope Thermal Generators)
            *   Nuclear to thermal
                *   Controlled reaction: [Nuclear thermal rocket]([https://en.wikipedia.org/wiki/Nuclear_thermal_rocket](https://en.wikipedia.org/wiki/Nuclear_thermal_rocket))
                *   Uncontrolled reaction: [Nuclear pulse propulsion]([https://en.wikipedia.org/wiki/Nuclear_pulse_propulsion](https://en.wikipedia.org/wiki/Nuclear_pulse_propulsion))
        *   Photonic fuel
            *   [Beam-powered propulsion]([https://en.wikipedia.org/wiki/Beam-powered_propulsion](https://en.wikipedia.org/wiki/Beam-powered_propulsion))
            *   [Solar sail](https://en.wikipedia.org/wiki/Solar_sail)
        *   Kinetic/thermal fuel: Pretty garbage, no real way it could work, only included for completeness
        *   Gravitational fuel: Pretty garbage, no real way it could work, only included for completeness
    *   Forms of propulsion not linked to a fuel
        *   Electric propulsion: e.g., [ion thruster]([https://en.wikipedia.org/wiki/Ion_thruster](https://en.wikipedia.org/wiki/Ion_thruster))
            *   Super low thrust
            *   Can be powered by off-board energy (solar) or very dense on-board energy (nuclear)
        *   [Space elevator]([https://en.wikipedia.org/wiki/Space_elevator](https://en.wikipedia.org/wiki/Space_elevator))
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
                    *   $4B total development cost projected in [2015]([http://spacenews.com/desire-for-competitive-ariane-6-nudges-esa-toward-compromise-in-funding-dispute-with-contractor/](http://spacenews.com/desire-for-competitive-ariane-6-nudges-esa-toward-compromise-in-funding-dispute-with-contractor/))
                    *   Not intended to be reusable, but research being done for future versions
            *   Rocket Lab
                *   Electron rocket
                    *   ~200 kg payload (<$6M per launch, so ~$27K / kg to SSO)
                    *   Key idea is to use a battery for fuel pumping, which is less efficient but simpler to build
                    *   2 launches so far: one success, one failure
                    *   RP-1/LOX for stage 1, stage 2
            *   Not sure what's coming out of China/Russia
    *   Tyranny of space transportation costs: [https://www.nasa.gov/sites/default/files/atoms/files/eso_final_report.pdf](https://www.nasa.gov/sites/default/files/atoms/files/eso_final_report.pdf) page 9
*   Demand for space travel
    *   Science
    *   Tourism
    *   Mining
        *   Heavy metals - e.g., platinum. Sank into Earth.
        *   He3 - Decayed by alpha radiation. 100x more abundant in solar system.
        *   Hydrocarbons - In-space fueling.
    *   Low gravity manufacturing
    *   Solar
        *   Seems way too costly to me. Getting sunlight 24/7 with 0 atmospheric losses is not gonna be that much better than getting sunlight 8/7 with 50% losses. Putting down 6 panels on the ground is easier than 1 panel in space.
        *   Only interesting thing is the notion of long distance wireless power. On Earth this doesn't work because of atmosphere. Conceivably an array of satellites could
    *   ??
*   Destinations for space travel
    *   To do
