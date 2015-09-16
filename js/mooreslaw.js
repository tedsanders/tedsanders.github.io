
var svg = d3.select('#mooreslaw');

var barheight = 14;
var graphheight = 1024;

var data = [[1975,"Moore's law","https://en.wikipedia.org/wiki/Moore's_law#History"],
            [1995,"Moore's second law","https://en.wikipedia.org/wiki/Moore's_law#Moore.27s_second_law"],
            [1997,"Wealth","http://www.forbes.com/forbes/1997/1013/6008147a.html"],
            [1997,"Software","http://www.scruminc.com/wp-content/uploads/2014/06/The-Emergence-of-a-Business-Object-Component-Architecture.pdf"],
            [1999,"Agriculture","https://www.mail-archive.com/ctrl@listserv.aol.com/msg16785.html"],
            [1999,"Bandwidth","http://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=795601"],
            [2000,"Radio astronomy","http://arxiv.org/abs/astro-ph/0002514"],
            [2000,"Data traffic","http://papers.ssrn.com/sol3/papers.cfm?abstract_id=236108"],
            [2002,"Optical storage","http://mooreslore.corante.com/archives/2005/06/15/moores_law_is_everywhere.php"],
            /*[2002,"Radio","https://books.google.com/books?id=uhb-DBmM-PkC&dq=the+blankenhorn+effect&source=gbs_navlinks_s"],*/
            [2002,"DNA sequencing","http://science.slashdot.org/comments.pl?sid=40531&cid=4318858"],
            [2002,"Quantum computing","http://arxiv.org/ftp/cs/papers/0405/0405004.pdf"],
            [2003,"Fusion","http://iopscience.iop.org/0031-9120/38/2/305"],
            [2004,"Space","http://www.thespacereview.com/article/180/1"],
            [2004,"Hard drives","http://econlog.econlib.org/archives/2004/06/moores_law_for.html"],
            [2005,"Optics","http://mooreslore.corante.com/archives/2005/11/29/moores_chicken_pecks_sony.php#more"],
            [2005,"Wind","http://happyinmotion.com/?m=200511"],
            [2006,"Razor blades","https://docs.google.com/spreadsheets/d/1f-rsjgqAKGufj6VSTALb9FiEiBjQngXYQkqdv1YlYWo/edit#gid=1175118273"],
            [2006,"Photonics","https://books.google.com/books?id=u9vLBQAAQBAJ&pg=PP22&lpg=PP22&dq=%22moore%27s+law+of+photonics%22&source=bl&ots=YB32A7suNN&sig=kkzfLDdjb0unvGTlFTUbN5aHbxQ&hl=en&sa=X&ei=uDODVfLeBIPWoASuiIfICw&ved=0CCUQ6AEwAQ#v=onepage&q=%22moore%27s%20law%20of%20photonics%22&f=false"],
            [2007,"Finance","https://www.aei.org/publication/what-happened-to-liquidity-2/"],
            [2007,"Marketing","http://blog.imaginellc.com/introducing-davidoffs-law-the-moores-law-of-marketing"],
            [2008,"Solar power","http://spectrum.ieee.org/tech-talk/semiconductors/devices/photovoltaic_moores_law_on_tra"],
            [2008,"Microbiology","http://www.sciencedirect.com/science/article/pii/S016777990800111X"],
            [2008,"Data","http://www.powershow.com/view/7f394-ZDc1Z/Semantic_Vectors_A_Scalable_Open_Source_Package_and_Online_Technology_Management_Application_powerpoint_ppt_presentation"],
            [2008,"Data centers","http://www.greenm3.com/gdcblog/2008/2/5/moores-law-of-data-centers.html"],
            [2009,"Big tech projects","http://www.zdnet.com/article/moores-law-of-big-tech-projects/"],
            [2009,"Cities","http://www.dailygalaxy.com/my_weblog/2009/09/is-there-a-moores-law-for-cities-worlds-leading-experts-say-yes.html"],
            [2010,"Electric cars","http://www.nytimes.com/2010/09/26/opinion/26friedman.html?_r=3&src=tptw"],
            [2010,"Science","https://www.newscientist.com/article/dn19474-is-there-a-moores-law-for-science/"],
            [2010,"Lasers","http://www.maximumpc.com/old-school-monday-the-lust-list-96/"],
            [2010,"Energy devices","http://www.cnet.com/news/why-a-moores-law-for-green-tech-doesnt-compute/"],
            [2011,"Power efficiency","http://www.technologyreview.com/news/425398/a-new-and-improved-moores-law/"],
            [2011,"Mass spectroscopy","http://www.nature.com/nature/journal/v480/n7376/abs/nature10575.html#supplementary-information"],
            [2011,"Mad science","http://q4td.blogspot.co.uk/2011/03/moores-law-of-mad-science-every.html"],
            [2011,"Atoms","http://replicatorinc.com/blog/2011/05/vertical-integration-and-moores-law-for-atoms/"],
            [2011,"Healthcare","http://charlesatkinson.typepad.com/charles_atkinson_blog_on_/2012/01/minutes-and-plan-of-the-exploratory-committee-of-december-29-2011-for-orchestrating-a-presidential-v.html"],
            [2011,"Batteries","http://www.vincentcaprio.org/2011/09"],
            [2011,"Renewable energy","http://www.greenbiz.com/blog/2011/09/12/moores-law-renewable-energy"],
            [2012,"Corn","http://thereformedbroker.com/2011/03/23/is-there-a-moores-law-for-corn/"],
            [2012,"Real estate","https://www.youtube.com/watch?v=JQ6irnso40c"],
            [2012,"Big data","http://www.ni.com/newsletter/51649/en/"],
            [2012,"8-bit computers","http://www.mlbelanger.com/arduino/moores-law-of-8-bit-computers/"],
            [2012,"Mind","https://www.andrewmunsell.com/blog/moores-law-of-the-mind/"],
            [2012,"Education","navigatehighed.com/a-moores-law-of-educational-innovation/"],
            [2012,"Everything","https://books.google.com/books?id=nXho71uvKBsC&pg=PT27&lpg=PT27&dq=%22moore%27s+law+of+everything%22&source=bl&ots=NCtX4k-dVq&sig=TQ-rUZ31Bt9WHhNfRaI2R2Cq8O4&hl=en&sa=X&ei=OzSDVaXfKcigoQTssrjYAQ&ved=0CCUQ6AEwAQ#v=onepage&q=%22moore%27s%20law%20of%20everything%22&f=false"],
            [2012,"Drones","http://abundantmichael.com/blog/index.cfm/2013/2/5/How-nanodrones-are-part-of-the-Singularity"],
            [2012,"Fashion","http://buffalojackson.com/blog/fashion-or-style/"],
            [2013,"Sharing","http://www.wired.com/2013/04/facebookqa/"],
            [2013,"3D printing","http://3dprintboard.com/showthread.php?593-Does-Moore-s-Law-Apply-to-3D-Printing"],
            [2013,"Medicine","http://www.technologyreview.com/news/518871/we-need-a-moores-law-for-medicine/"],
            [2013,"Pixels","http://www.crazyontap.com/topic.php?TopicId=304351"],
            [2013,"Data collection","http://www.defenseone.com/technology/2013/08/anti-snowden-ex-SEAL-firm-caught-between-security-privacy/68561/"],
            [2013,"Hacking","http://www.mobilepaymentstoday.com/articles/moores-law-for-hackers-increases-risk-for-mobile-enterprises/"],
            [2014,"Aircraft","https://tengenblog.wordpress.com/2014/08/15/moores-law-of-aircraft-technology/"],
            [2014,"Steam power","https://twitter.com/pmarca/status/546932267663097856"],
            [2014,"Drone-lifting","http://www.businessinsider.com/drone-taxis-of-the-future-2014-9"],
            [2014,"Android update cycles","http://www.androidcentral.com/insane-pace-android"],
            [2014,"LEDs","http://ragingbull.com/forum/topic/1012252"],
            [2014.75,"Raspberry Pi clusters","http://hackaday.com/2015/04/17/moores-law-of-raspberry-pi-clusters/"],
            [2014.75,"NFL field goals","http://www.unz.com/isteve/the-moores-law-of-nfl-field-goal-kicking/"],
            [2014.75,"Weird","http://techcrunch.com/2015/01/24/this-industry-is-still-completely-ridiculous/"],
            [2014.75,"Spring","http://www.remedialeating.com/2015/04/so-many-so-much.html"],
            [2014.75,"Demand","http://cosnconference.org/program/workshops/"],
            [2014.75,"Wine","http://svbwine.blogspot.com/2015/03/w20-group-and-vintank-settle-down.html"],
            [2014.75,"Autos","http://www.cheatsheet.com/automobiles/saleen-answers-the-hellcats-call-with-a-730-horsepower-ford-mustang.html/?a=viewall"],
            [2014.75,"Hipness","http://annapmurray.com/brooklyn-the-moores-law-of-hipness/"],
            [2014.75,"Human spirit","http://www.hihuadu.com/2015/04/19/today-five-years-later-moores-law-has-only-just-begun-to-subvert-everything-19364.html"],
            [2014.75,"Our email wasteland","http://readwrite.com/2015/08/31/spam-fight-tools-education"],
            [2014.75,"Backhoes","https://twitter.com/pmarca/status/641052430256353282"],
            [2014.75,"Oil","http://bishophill.squarespace.com/blog/2015/3/9/moores-law-for-the-oil-industry.html"],
            [2014.75,"Moore's Laws","http://www.tedsanders.com"]
            ];


var bars = svg.selectAll('rect.bars')
              .data(data)
              .enter()
              .append('rect')
              .attr({
                width:function(d){return 12*(2028-1975)},
                height:barheight,
                x:function(d){return 12*(1975-1970)},
                y:function(d,i){return graphheight-barheight*i},
                fill:'url(#bar)',
                class:'bars',
                stroke:'white',
                "stroke-width":'0.5'
              });

var barcovers = svg.selectAll('rect.barcovers')
              .data(data)
              .enter()
              .append('rect')
              .attr({
                width:function(d){return 12*(d[0]-1975)},
                height:barheight,
                x:function(d){return 12*(1975-1970)},
                y:function(d,i){return graphheight-barheight*i},
                fill:'#FFF',
                class:'barcovers'
              });

var points = svg.selectAll('circle')
              .data(data)
              .enter()
              .append('circle')
              .attr({
                r:'5',
                cx:function(d){return 12*(d[0]-1970)},
                cy:function(d,i){return graphheight-barheight*i+barheight/2},
                fill:'black',
                stroke:'#89CFF0',
                "stroke-width":'3'
              });

var labels = svg.selectAll('text')
              .data(data)
              .enter()
              .append('text')
              .text(function(d){return d[1]})
              .attr({
                x:function(d){return 12*(d[0]-1970)+7},
                y:function(d,i){return graphheight-barheight*i+barheight-3},
                fill:'black',
                "font-size":barheight-2,
                "font-family":'sans-serif'
              });

var fit = svg.append("path")
             .attr({
               d:"M0,1030.33 12,1030.21 24,1030.08 36,1029.92 48,1029.73 60,1029.51 72,1029.25 84,1028.95 96,1028.59 108,1028.17 120,1027.68 132,1027.11 144,1026.43 156,1025.64 168,1024.71 180,1023.62 192,1022.34 204,1020.83 216,1019.07 228,1017.0 240,1014.57 252,1011.72 264,1008.37 276,1004.45 288,999.842 300,994.436 312,988.092 324,980.647 336,971.91 348,961.658 360,949.626 372,935.507 384,918.937 396,899.493 408,876.676 420,849.899 432,818.475 444,781.6 456,738.327 468,687.545 480,627.951 492,558.018 504,475.95 516,379.643 528,266.626 540,133.999 552,-21.6408",
               stroke:'purple',
               "stroke-width":'14',
               opacity:'0.5',
               fill:'none'
             });
