---
title: On self-driving cars
layout: default
tags: notes
---

*   Highlights
    *   The potential market for self-driving cars is enormous, like a few trillion dollars or a few percent of world GDP
        *   Roughly, I estimate potential market of $2T ([~1B cars](https://www.statista.com/statistics/281134/number-of-vehicles-in-use-worldwide/) * [1 hr/day](https://www.volpe.dot.gov/news/how-much-time-do-americans-spend-behind-wheel) + 50M commercial drivers * 5 hrs/day all at $5/hr)
        *   $2T may sound high, but the average American driver spends [7 hrs/wk driving](https://www.volpe.dot.gov/news/how-much-time-do-americans-spend-behind-wheel), which is 20% of the [~35 hrs/wk worked](https://stats.oecd.org/index.aspx?DataSetCode=ANHRS#) by the average American worker.
    *   Self-driving cars are nowhere near as safe as humans, nor will they be soon
        *   From 2014 to 2017, Waymo's reported disengagement rate fell from 1 per 800 miles to 1 per 5,500 miles
        *   This is still far away from the human crash rate of 1 per 330,000 miles (with many caveats to the comparison, of course)
    *   I expect the transition to self-driving cars will be gradual, taking decades
        *   The first release of almost every technology is expensive and crummy
        *   Capital-intensive technologies can take decades to penetrate markets (decades to bring costs down, decades to scale manufacturing up, decades for old capital stock to age out, decades to shift consumer norms)
*   Conceptions of self-driving
    *   Essentially, driving is a function that takes vision as input and then quickly outputs steering & speed
    *   I see three important dimensions for imagining how future cars will be driven:
        *   Who drives (autonomy)
            *   Human mostly drives (SAE levels 0-3)
            *   Computer mostly drives (SAE levels 3-5)
        *   Where & when do they drive (environment)
            *   Highway-only
            *   Heavily mapped zones in good daytime conditions
            *   Everywhere
        *   What are they driving (cargo type / vehicle type)
            *   Passenger, owned (car)
            *   Passenger, hailed (taxi)
            *   Passenger, shared (shuttle / bus)
            *   Cargo, short-range (delivery trucks)
            *   Cargo, long-range (semi-trailer trucks)
    *   SAE defines 6 levels of autonomy.
        *   Level 0: No automation
            *   E.g., anti-lock brakes, cruise control
        *   Level 1: Drive assistance (in some circumstances, computer may adjust speed or steering)
            *   E.g., Automatic emergency brakes, adaptive cruise control, lane-keeping assistance
        *   Level 2: Partial automation (in some circumstances, computer drives while human monitors)
            *   E.g., Tesla Autopilot, Cadillac Super Cruise
        *   Level 3: Conditional automation (in some circumstances, computer drives while human is ready to take over)
            *   E.g., Audi Traffic Jam Pilot (only <60 kph on divided highways)
            *   Many carmakers plan to skip Level 3, as humans cannot be relied upon to take over on short notice
        *   Level 4: High automation (in some circumstances, computer drives without need for human)
        *   Level 5: Full automation (in all circumstances, computer drives without need for human)
    *   Focusing on SAE levels may make it seem as if there is one path for the technology to progress along 1->2->3->4->5 or that the levels are equally spaced in difficulty. But many cars may have different capabilities in different environments (e.g., level 4 on a highway, level 2 around town, and level 1 in a construction zone). And it could easily turn out that getting to level 4 takes 1,000x the R&D spend than it took to get to level 2.
*   History of self-driving
    *   [https://en.wikipedia.org/wiki/History_of_autonomous_cars](https://en.wikipedia.org/wiki/History_of_autonomous_cars)
    *   The idea of autonomous cars is not new
        *   1950s-1960s: Early research into autonomous highway driving using buried cables. A number of groups build prototype cars that drive down highways with buried cables. Never commercialized.
        *   1980s-1990s: First computer-controlled self-driving cars using cameras and sometimes lidar. EUREKA program invests ~$1B in self-driving car research over 8 years. CMU first uses neural networks for self-driving control. German group drives prototype 620 miles on highways. American group drives 3,100 miles (steering only). Italian group drives 1,200 miles. Cars still require constant supervision: disengagements occurred roughly every ~1-10 miles.
        *   2000-2010s: In 2007, six cars complete DARPA Grand Challenge III, an urban course populated with human drivers. Autonomous trucks are commercialized for mining. Neural networks begin dominating ImageNet and other computer vision contests. Google, carmakers, and startups invest billions into autonomous driving.
*   Benefits of self-driving
    *   One of the biggest blind spots in forecasting the impact of future technology is to ignore the elastic response of the market to lower prices and better quality
        *   For example, in 2014 an NYU finance professor [valued Uber at only $5.9B](http://abovethecrowd.com/2014/07/11/how-to-miss-by-a-mile-an-alternative-look-at-ubers-potential-market-size/) because his model assumed the world taxi market was fixed in size. In fact, over the four years after his article, the number of rides in NYC [doubled](http://kwokchain.com/2018/04/09/quantifying-tam-expansion-uber-and-lyft-in-nyc/) due to ridesharing. Uber's latest fundraise in 2018 valued it at [$62B](https://techcrunch.com/2018/05/23/uber-q1-2018/) (post-money).
        *   Despite this cautionary tale, I will commit the same sin in my own analysis. For the most part, I will assume a fixed market for driving, since I expect that self-driving cars will not reduce the cost of driving by more than 30% in the first decades of operation, and I expect that such a reduction in cost will not be radically transformative.
    *   Labor/time savings are biggest benefit of self-driving
        *   I estimate global market of ~$2T ([~1B cars](https://www.statista.com/statistics/281134/number-of-vehicles-in-use-worldwide/) * [1 hr/day](https://www.volpe.dot.gov/news/how-much-time-do-americans-spend-behind-wheel) + 50M commercial drivers * 5 hrs/day all at $5/hr)
        *   $2T may sound high, but the average American driver spends [7 hrs/wk driving](https://www.volpe.dot.gov/news/how-much-time-do-americans-spend-behind-wheel), which is 20% of the [~35 hrs/wk worked](https://stats.oecd.org/index.aspx?DataSetCode=ANHRS#) by the average American worker.
        *   Actual market may be lower if competition drives prices down. But may also be bigger in the future as (1) the world continues developing and (2) lower prices increase quantity demanded.
        *   Market size can be triangulated potentially by consumer research, in addition to the theoretical calculation of time benefits. That said, it's hard to trust consumers' predictions of their buying behavior when a product doesn't exist yet. [BCG/WEF survey](https://www.weforum.org/agenda/2015/11/are-we-ready-for-self-driving-cars/ ) says ~60% of buyers would not pay a cent more for self-driving, though ~20% would pay $5K+. Suggests that cultural inertia may further slow adoption of self-driving cars, but I don't take it too seriously.
    *   Second benefit of self-driving cars could be reduced crashes
        *   IF they become perfectly safe (which won't happen soon), the avoided crashes could save ~$2T/yr (savings are roughly ⅓ avoided suffering due to death, ⅓ avoided suffering due to injury, ⅓ avoided economic costs such as property/lost productivity/congestion/medical bills/etc.)
            *   [Federal study](https://www.pbs.org/newshour/nation/motor-vehicle-crashes-u-s-cost-871-billion-year-federal-study-finds) estimates crashes cost US ~$1T each year: $240B economic cost, $600B human cost
            *   [Another source](http://asirt.org/initiatives/informing-road-users/road-safety-facts/road-crash-statistics) estimates global cost of crashes at $500B, which might square with the first if it's economic cost alone
            *   Most of these costs are negative externalities on victims and society; therefore, the safety savings to buyers themselves will only be a fraction of these numbers
            *   Note much of this reduction might already be possible with non-self-driving technology (e.g., automatic emergency braking, breathalyzers, modern safety features); therefore the marginal value of self-driving technology might be lower than the total above
        *   Stats on crashes:
            *   Humans kill 1 person per ~100 million miles driven
                *   Note that this is just the average - for drivers who drive sober in daytime urban environments and wear seatbelts, death rates are likely a few multiples better
                *   The death rate has dropped roughly [3% per year](https://en.wikipedia.org/wiki/List_of_motor_vehicle_deaths_in_U.S._by_year) for the last 100 years
                *   Key causes: ~23% of costs attributed to alcohol, ~15% of costs attributed to distraction
                *   Key locations: ~10% on highways, ~44% in intersections
                *   Key styles: ~36% roadway departure, ~41% single vehicle, ~10% involve ped/cyclist
                *   ~½ of deaths are at night; ½ during the day
                *   ~¼ of involved drivers had positive blood alcohol (so presumably more than ¼ of collisions, given that most collisions have two drivers)
                *   [~⅔](https://crashstats.nhtsa.dot.gov/Api/Public/ViewPublication/812482) of fatalities are people in cars; ~⅓ are outside (motorcyclists, pedestrians, cyclists)
                *   ~½ of vehicle occupant fatalities were not wearing seat belts!
                *   Wearing your seat belt reduces odds of both death and injury by [~50%](https://crashstats.nhtsa.dot.gov/Api/Public/ViewPublication/812413)
            *   Statistically demonstrating that autonomous vehicles are less fatal than human drivers will take billions of miles driven (many multiples of 100M miles per fatality at the very least).
                *   Waymo is leading in miles driven, and has accelerated its pace to about 1 million miles per month (adding to its cumulative total of 8 million miles from 2009 to 2018)
                    *   As always, it's worth caveating that all miles are not created equal. Older miles from vehicles with older sensor suites probably have near zero utility today. And miles that come from the same safe area driven over and over will have less utility than miles from a variety of difficult environments.
                *   At Waymo's rate of 1 million miles per month, it will take about 80 years to reach 1 billion miles, at which point we can finally see whether the self-driving cars killed fewer or more than the human rate of ~10
                    *   Given Waymo's mid-2018 fleet size of ~600 minivans, that suggests each minivan is only driving 50 miles a day
                    *   If you want to drive 1 billion miles in 5 years, and drive each vehicle 250 miles a day, that implies a minimum fleet size of ~2,000 vehicles, which seems quite doable
                    *   Waymo has announced deals to buy up to 62,000 more Chrysler minivans along with up to 20,000 Jaguar SUVs (hard to know from the outside what 'up to' means, but both contracts are getting deliveries)
*   Costs of self-driving
    *   R&D costs
        *   Google v Uber trial revealed that Google spent ~$1B between 2009 and 2015 (seems low, given Lewandowski bonus of $120M and other reported bonuses. Figure possibly doesn't include salaries/bonuses.)
        *   GM plans to spend ~$0.6B/yr on AV R&D ([https://www.freep.com/story/money/cars/general-motors/2017/04/13/gm-to-add-1100-jobs-cruise-automation/100437028/](https://www.freep.com/story/money/cars/general-motors/2017/04/13/gm-to-add-1100-jobs-cruise-automation/100437028/))
        *   Waymo probably in similar ballpark (~500 employees @ estimated $1M per employee = ~$0.5B/yr) [https://www.linkedin.com/search/results/people/?facetCurrentCompany=%5B%2217900793%22%5D](https://www.linkedin.com/search/results/people/?facetCurrentCompany=%5B%2217900793%22%5D)
        *   Add in Velodyne (~300 headcount) and MobileEye (~700) and Tesla (???) and major automakers (???) and major parts suppliers (???) and other startups (???) and lidar makers and chipmakers and we're maybe in the ballpark of $5B a year being spent on AV R&D
        *   If development takes ~20 years (2010-2030), that's ~$100B in total R&D spend that needs to be recouped from sales
        *   If in 2030 Earth produces 100M cars per year, of which 10% are self-driving, and the R&D price premium is $1,000, then it will take 10 years to recoup $100B in R&D - seems very doable
        *   As a point of reference, to develop a new car model it costs automakers ~$1B in R&D spread over a few years
    *   Variable costs
        *   Original Google self-driving car had ~$150K of extra equipment (~$75K lidar and ~$75K other)
        *   Two largest costs are lidar and electronics
        *   Lidar
            *   Lidar is expensive - Velodyne's high-end model costs ~$80,000 (though less for lower end models)
            *   Because of these high prices, the top self-driving players have made the strategic choice to design and build their own lidar
            *   Waymo says their lidar cost is [10%](https://arstechnica.com/cars/2017/01/googles-waymo-invests-in-lidar-technology-cuts-costs-by-90-percent/) of their earlier ~$75K (so $8K?)
            *   Cruise says their lidar costs were [$20K](http://www.autonews.com/article/20171130/MOBILITY/171139975/gm-investor-day-lidar-autonomous) in 2017, but they aim to bring that down to $10K and then hopefully $300 (not clear to me whether these numbers are individual sensors or total cost to outfit the car - presumably the individual sensor price, since that looks better to report)
            *   There are hopes for solid-state lidar that cost as low as ~$100, though so far they all seem to be vaporware
            *   Personally I have no sense of what's going to happen here - huge investment and economies of scale should drive rapid price declines, but so far my sense is that solid-state and cheaper lidars are still pretty crummy
            *   A minority of companies have tried forgoing lidar altogether
                *   E.g., Tesla, Starsky Robotics (trucking startup)
            *   When I chatted with the CEO of Starsky Robotics in 2018, he emphasized to me that lidar doesn't work well at highway speeds and is only useful for non-highway driving
            *   Last point on lidar is that I used to believe the high costs of lidar would be prohibitive. However, from my financial models, a robo-taxi can earn a few hundred thousand dollars over a lifetime of 5 years. Next to that profit pool, a $50K lidar unit is totally affordable. (But for an owned car, a $50K price premium would turn away almost all buyers.)
        *   Electronics
            *   Self-driving electronics cost thousands of dollars
            *   In addition, they require something like ~1 kW of power, which along with cooling can lower EV range by like 5-10%
            *   Most platforms are using a mix of CPUs, GPUs, and SoCs
            *   Here's a great article on the tradeoffs between chip types in optimizing for tail latency (critical for safety) and power consumption: [https://blog.acolyer.org/2018/04/20/the-architectural-implications-of-autonomous-driving-constraints-and-acceleration/](https://blog.acolyer.org/2018/04/20/the-architectural-implications-of-autonomous-driving-constraints-and-acceleration/)
        *   Radar
        *   Cameras
        *   GPS / IMU
        *   Insurance
            *   I expect that high insurance rates will be a substantial cost of robo-taxi operations. Not only is there uncertainty around the crash rate (for which insurers will demand a premium), but the costs of crashing go way up when you're now carrying a few tens of thousands of dollars of safety-critical hardware aboard your car. A risk-averse robo-taxi operator might prefer to total cars that crash rather than risk putting damaged hardware back on the roads.
*   Effects on society
    *   A few changes are easy to predict
        *   People will travel more by car
        *   Less parking will be built on premium land
        *   More kids and seniors and driving-disabled will be able to get around
    *   But many other changes are difficult to predict, even directionally
        *   More cars will be built because driving gets easier
            *   Or: Fewer cars will be built because car sharing gets easier
        *   Cities will get denser, since the cost of congestion falls and the space needed for premium parking falls
            *   Or: Cities will get less dense, since the cost of commuting from far away is lower
        *   People will travel less by buses, subways, trains, bicycles, etc.
            *   Or: People will travel more by buses, subways, trains, bicycles, etc. as robo-taxis are better able to plug the gaps and eliminate the need for car ownership
        *   People will travel more during peak times, as waiting in traffic is no longer as bad
            *   Or: People will travel more during offpeak times (unlike Uber/Lyft drivers, robo-taxi supply will be constant throughout the day, leading to extra low prices during offpeak times)
        *   Car designs will get more boring, as more will be purchased by fleets (this is [the take](https://www.ben-evans.com/benedictevans/2015/7/27/ways-to-think-about-cars) of VC firm a16z)
            *   Or: Car designs will get more varied and specialized, as shared ownership means you can mix and match rented vehicles to your purpose rather than buying a jack-of-all trades (this is [the take](https://a16z.com/2018/02/03/autonomy-ecosystem-frank-chen-summit/) of VC firm a16z)
        *   Home delivery will get cheaper
            *   Or: Home delivery will actually get comparatively more expensive, since robotic unloading of deliveries is unsolved and now going to stores just got cheaper
    *   Predicting the magnitude of changes seems even harder:
        *   Congestion: As the cost of congestion goes down, the amount of congestion will go up, so long-term, traffic may rise until the annoyance of being a passenger for Y minutes equals the original annoyance of being a driver for X minutes. If the rebound effect is large, deadweight loss caused by congestion may not actually fall by much and self-driving could even be a negative sum technology.
        *   Taxi rates: Self-driving tech will reduce taxi rates ~33% according to my math:
            *   A 30-minute Uber drive costs about $30. Assuming a 50% utilization rate, that means they are earning $30 an hour. Uber charges ~33% of that, ~$10, leaving $20 for the driver and the car (this agrees with studies showing ~$20/hr for driver and car https://medium.com/uber-under-the-hood/an-analysis-of-ceeprs-paper-on-the-economics-of-ride-hailing-1c8bfbf1081d). Gas costs ~$3/hr (assuming 1 gal/hr at 30 mpg at 30 mph), car depreciation costs ~$3/hr ($20K car lasting 200,000 miles at 30 mph), and maintenance/repairs/insurance costs ~$3/hr ($0.10/mi at 30 mph). This leaves $11/hr for the driver. So very roughly, ⅓ goes to Uber, ⅓ goes the car, and ⅓ goes to the driver.
            *   Suppose adding self-driving tech to a car costs $13K and eliminates the driver cost. That will add $2/hr in costs and subtract $11 in driver wages. So total cost drops 30% from ~$30/hr to ~$21/hr.
            *   Uber fees:
                *   [https://therideshareguy.com/uber-increases-booking-fee-and-effective-commission/](https://therideshareguy.com/uber-increases-booking-fee-and-effective-commission/)
                *   [https://www.quora.com/What-percentage-cut-does-Uber-take-from-the-total-fare-cost-of-a-ride-Do-they-subtract-a-flat-fee-for-each-dispatch-or-a-percentage-Are-there-initiation-monthly-fees-to-be-a-driver](https://www.quora.com/What-percentage-cut-does-Uber-take-from-the-total-fare-cost-of-a-ride-Do-they-subtract-a-flat-fee-for-each-dispatch-or-a-percentage-Are-there-initiation-monthly-fees-to-be-a-driver)
            *   $0.10/mi:
                *   [https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&ved=0ahUKEwjRwpeS1Z_aAhVi0oMKHaxZDpkQFggpMAA&url=http%3A%2F%2Forfe.princeton.edu%2F~alaink%2FSmartDrivingCars%2FPDFs%2FZoepf_The%2520Economics%2520of%2520RideHialing_OriginalPdfFeb2018.pdf&usg=AOvVaw2qx3_w0fH6CiwRI3k-DiBl](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&ved=0ahUKEwjRwpeS1Z_aAhVi0oMKHaxZDpkQFggpMAA&url=http%3A%2F%2Forfe.princeton.edu%2F~alaink%2FSmartDrivingCars%2FPDFs%2FZoepf_The%2520Economics%2520of%2520RideHialing_OriginalPdfFeb2018.pdf&usg=AOvVaw2qx3_w0fH6CiwRI3k-DiBl)
        *   Neglected factors that will refine the math above: (on balance, they will probably lower the price a bit more than calculated, and more so in the long-run)
            *   **The cut taken by ridesharing apps will fall.** Ridesharing software costs are mostly fixed, so with higher volumes they can better afford to drop their cut. (But right now these companies are bleeding billions, and reversing that bleeding will work in the opposite direction)
            *   **Some of the driver savings will go toward fleet management, not price cuts.** Right now, drivers take care of fueling their car, keeping it clean, and parking it. Presumably some of that $11/hr for drivers would go toward fleet management rather being turned into price cuts for riders.
            *   **Electrification will grow the market.** If electric cars get cheap enough, their lower fuel costs and lower maintenance costs would lower the variable price of driving and thereby increase both the driving pie and ridesharing share of the pie, leading to better economies of scale
            *   **Densifying markets will increase utilization and lower costs.** Greater fleet size could lead to less empty driving and more revenue per mile driven
            *   **Cars with high utilization will last more miles.** Cars depreciate as a function of both age and distance. Higher utilization rates will allow cars to drive further before age-related damage kicks in. Lifetimes could go from 200,000 to 300,000 miles, or even further if cars are redesigned to last longer.
            *   **Discount rates make upfront R&D and equipment less affordable.** Including interest rates tilts the balance toward drivers and gas versus self-driving and electric, both of which have higher up-front costs. (I expect real risk-free rates to stay below 2% due to secular stagnation; therefore, I expect discounting to be dominated by the risk premium.)
            *   **Redesign of cars will lower costs.** As volumes of self-driving cars grow, it becomes worthwhile to redesign lower cost cars suited for self-driving. E.g., no steering wheel, no pedals, optimized for distances/environments, optimized for passenger load, self-driving hardware built-in rather than bolted on.
            *   **Insurance rates will change.** I expect self-driving car insurance to cost more than human car insurance. This is because (1) self-driving cars may be more dangerous than humans when released, (2) insurers will require a premium to take on uncertain risks, and (3) self-driving cars will carry thousands of dollars of hardware that will need to be inspected and replaced after collisions. (Of course, this is all subject to notions of what's a "fair" comparison.) Note too that as self-driving cars get safer and penetrate the market, this will not only lower the price of self-driving car insurance, but also the price of car insurance.
            *   **Transportation rules could be redesigned.** Long term, high penetration of self-driving cars opens up possibilities for new, more efficient road rules, which could increase road speeds and bandwidths, and thereby lower cost of service.
        *   One thing I don't understand is that taxis in Dhaka, Bangladesh cost like $4/hr. Presumably cars and gas cost the same all over Earth but labor is super cheap in some countries. One way to get at the labor share vs capital share of fares is to look at countries with low wages. Dhaka taxis cost like $4/hr ($8/hr at 50% utilization), which is much lower than my estimate above. Maybe the cars are older and crummier, repairs and maintenance are way cheaper? Non-Uber taxis appear similarly priced, so it cannot explained by Uber choosing to take a negative cut to build the market.
            *   [http://uberestimate.com/prices/Dhaka/](http://uberestimate.com/prices/Dhaka/)
            *   Non-Uber fares: [https://www.worldtaximeter.com/dhaka](https://www.worldtaximeter.com/dhaka)
*   Predictions
    *   Other predictions
        *   Be cautious generalizing a mood from these past predictions. Predictions of self-driving will all be wrong, until one day they are right. There is a massive selection bias in the predictions below. They are not a representative sample of predictions. The main point isn't to laugh at the predictions of people in the past; it is to be humble in our own predictions lest the people of the future laugh at us. The other main point is to never trust predictions of people trying to sell you something.
        *   Overly optimistic predictions
            *   1960 according to the book _[Magic Motorways](https://archive.org/stream/magicmotorways00geddrich/magicmotorways00geddrich_djvu.txt)_ in 1940
            *   1975 will see full-use according to [NY Times article](https://www.nytimes.com/1960/06/06/archives/electronic-roads-called-practical-new-system-of-guiding-cars-safely.html) in 1960
            *   1976 according to [GM (or at least their marketing)](https://www.youtube.com/watch?v=Rx6keHpeYak) in 1956
            *   1985 according to Nobel and Turing winner [Herbert Simon](https://www.goodreads.com/author/quotes/928132.Herbert_Simon) in 1965 ("Machines will be capable within 20 years of doing any work a man can do.")
                *   [A whole bunch of other early AI researchers](https://www.openphilanthropy.org/files/Causes/AI/AI_Expert_Predictions_1973.png) in the 60s also predicted that AI would outpace humans within their lifetimes
            *   2017 (available to ordinary people) according to [Sergey Brin of Google](https://www.computerworld.com/article/2491635/vertical-it/self-driving-cars-a-reality-for--ordinary-people--within-5-years--says-google-s-sergey-b.html) in 2012
            *   2017 (full autonomy) according to [Elon Musk of Tesla](http://fortune.com/2015/12/21/elon-musk-interview/) in 2015
            *   2019 according to [Elon Musk](https://electrek.co/2017/04/29/elon-musk-tesla-plan-level-5-full-autonomous-driving/) in 2017 and [again](https://electrek.co/2018/03/11/tesla-ceo-elon-musk-self-driving-next-year/) in 2018
            *   2020 (widespread adoption) according to [Stanford AI100 Standing Committee](https://ai100.stanford.edu/2016-report) in 2016
                *   Aside: [An exchange with the authors left me very disappointed](https://www.facebook.com/tedsanders/posts/10105791783117034)
            *   2019-2025: [A long list of predictions by automakers and other organizations](http://www.driverless-future.com/?page_id=384)
        *   Overly pessimistic predictions
            *   Impossible to know until self-driving cars actually happen
        *   Predictions right on the money
            *   In 2014, much effort will be put into designing vehicles with robot brains according to [Isaac Asimov's forecasts from 1964](https://archive.nytimes.com/www.nytimes.com/books/97/03/23/lifetimes/asi-v-fair.html) (it's astounding how much he got right, [28/44 by Peter McArthur's count](https://www.facebook.com/tedsanders/posts/10103894409543884))
    *   My predictions
        *   Prediction is where analysis becomes most real and most difficult. It's easy to sit on the sidelines, disprove obviously wrong predictions with back-of-the-envelope math, and bask in the feeling of "I know better." But it takes much more humility to put your own skin in the game, and make predictions that will likely be wrong in one way or another.
        *   None of the predictions below are meant to be definitive. Just my best guess at the moment I wrote them down in mid-2018. Certainly there are people in the world smarter and more informed than me who will be able to make narrower, more accurate predictions.
        *   As informative as individual predictions may be, there is also meta-information encoded in the predictions I choose to make and the way I define problems. I have tried to mostly pick predictions that are easy to unambiguously falsify.
            *   Self-driving is solvable (100%)
            *   Level 4 city+highway self-driving cars will be generally available for sale to consumers by...
                *   2020: <1%
                *   2025: 10%
                *   2030: 45%
                *   2035: 60%
                *   2040: 70%
                *   2045: 75%
                *   2050: 80%
            *   Level 4 city+highway self-driving cars that cost <$30,000 will be generally available for sale to consumers
                *   2020: <1%
                *   2025: 2%
                *   2030: 15%
                *   2035: 30%
                *   2040: 55%
                *   2045: 65%
                *   2050: 75%
            *   Level 4 city+highway self-driving cars will debut in robo-taxi fleets years before being sold to individuals (90%)
            *   The biggest barrier to adoption will be the technology (safety, reliability, cost), not regulation (though of course there may be regulations saying they are illegal because they are unsafe)
            *   The transition will be very gradual
                *   Self-driving car production going from 0.1% of new cars to 80% of new cars will take more than 20 years
                *   By 2050, the majority of cars on the road will not be self-driving
                *   In the taxi market, self-driving cars will takes many years to usurp Lyft/Uber/etc. At first they won't have much cost advantage, they will face large barriers to entry (fleet density, consumer inertia), and building a fleet will take tons of capital relative to Lyft/Uber's bring-your-own-car model (literally billions of dollars per large city). As a result, the rollout will be slow and done city-by-city, probably starting in the US.
            *   One thing I'm unsure of but feels predictable is whether a Waymo or Cruise robo-taxi fleet will: (a) build their own robo-only app, (b) build their own app that also takes human drivers (c) get on Lyft/Uber via partnership or takeover, (d) build their own meta-app which displays Lyft/Uber rides alongside their own, or (e) other
                *   Option A seems cleanest, but gives a worse user experience if you have to bounce around apps due to low fleet densities (and even long-term it seems potentially beneficial to keep human drivers for peak times while use robo-taxis for high-utilization baseload)
                *   Also, by the time self-driving robo-taxi fleets are out, I predict that ride-hailing apps will have public transportation and bike/scooter transit integrated as well, which complicates the app question a little (for urban areas)
*   Evolutionary paths
    *   Most technologies start out crummy and expensive, serving just a narrow niche, before improving in quality and expanding to greater markets
    *   For self-driving vehicles, there are few paths to inexpensive full autonomy in all conditions
        *   Owned cars that are highway-only and use human driver as backup
        *   Robo-taxis that only operate in limited geo-fenced areas and have backup tele-operators
        *   Self-driving trucks that are limited to specific easy, high-volume highways and use either human drivers or tele-operators as backup
*   Analysis of various vehicles types (TBD)
    *   Cars ()
    *   Taxis (driver is ~⅓ of cost)
    *   Buses (driver is 40% of cost - really???)
    *   Trucks (drivers needed for inventory management/loading/unloading)
    *   Class 8 semi trucks (driver is 18% of cost)
