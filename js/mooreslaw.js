
var svg = d3.select('#mooreslaw');

var data = [[1975.5,"Integrated circuits *put forth in 1965 by Moore but not coined until 1975 by Mead","https://en.wikipedia.org/wiki/Moore's_law#History"],
            [1995,"Fabrication plant costs","https://en.wikipedia.org/wiki/Moore's_law#Moore.27s_second_law"],
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

var barheight = 14;
var yearwidth = 12;
var graphheight = 1024;


var xScale = d3.scale.linear()
    .domain([1975,2025])
    .range([yearwidth*5,yearwidth*(55)]);

var xAxis = d3.svg.axis()
  .scale(xScale)
  .tickFormat(d3.format("d"))
  .orient("bottom");

var yScale = d3.scale.linear()
    .domain([0,70])
    .range([graphheight+barheight,graphheight+barheight-70*barheight]);

var yAxis = d3.svg.axis()
    .orient("left")
    .scale(yScale);


var bars = svg.selectAll('rect.bars')
              .data(data)
              .enter()
              .append('rect')
              .attr({
                width:function(d){return xScale(2028)-xScale(1975)},
                height:barheight,
                x:function(d){return xScale(1975)},
                y:function(d,i){return yScale(i+1)},
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
                width:function(d){return xScale(d[0])-xScale(1975)},
                height:barheight+2,
                x:function(d){return xScale(1975)},
                y:function(d,i){return yScale(i+1)-2},
                fill:'#FFF',
                class:'barcovers'
              });

var points = svg.selectAll('circle')
              .data(data)
              .enter()
              .append('circle')
              .attr({
                r:'5',
                cx:function(d){return xScale(d[0])},
                cy:function(d,i){return yScale(i+1)+barheight/2},
                fill:'black',
                stroke:'#89CFF0',
                "stroke-width":'3.5'
              });

var labels = svg.selectAll('text')
              .data(data)
              .enter()
              .append('text')
              .text(function(d){return d[1]})
              .attr({
                x:function(d){return xScale(d[0])+7},
                y:function(d,i){return yScale(i+1)+barheight-3},
                fill:'black',
                "font-size":barheight-2,
                "font-family":'sans-serif'
              });

var fit = svg.append("path")
             .attr({
               d:"M60,1031.12 63,1031.06 66,1031 69,1030.94 72,1030.87 75,1030.8 78,1030.73 81,1030.65 84,1030.57 87,1030.49 90,1030.4 93,1030.32 96,1030.22 99,1030.13 102,1030.03 105,1029.92 108,1029.81 111,1029.7 114,1029.58 117,1029.46 120,1029.33 123,1029.2 126,1029.06 129,1028.92 132,1028.77 135,1028.61 138,1028.45 141,1028.28 144,1028.1 147,1027.92 150,1027.73 153,1027.53 156,1027.32 159,1027.11 162,1026.88 165,1026.65 168,1026.41 171,1026.16 174,1025.89 177,1025.62 180,1025.33 183,1025.04 186,1024.73 189,1024.4 192,1024.07 195,1023.72 198,1023.36 201,1022.98 204,1022.58 207,1022.17 210,1021.75 213,1021.3 216,1020.84 219,1020.36 222,1019.86 225,1019.33 228,1018.79 231,1018.23 234,1017.64 237,1017.02 240,1016.38 243,1015.72 246,1015.03 249,1014.31 252,1013.56 255,1012.78 258,1011.96 261,1011.12 264,1010.24 267,1009.32 270,1008.36 273,1007.37 276,1006.34 279,1005.26 282,1004.14 285,1002.97 288,1001.75 291,1000.49 294,999.171 297,997.799 300,996.371 303,994.885 306,993.337 309,991.726 312,990.048 315,988.302 318,986.484 321,984.591 324,982.621 327,980.569 330,978.434 333,976.21 336,973.896 339,971.486 342,968.977 345,966.366 348,963.647 351,960.816 354,957.869 357,954.801 360,951.607 363,948.282 366,944.82 369,941.217 372,937.465 375,933.559 378,929.492 381,925.259 384,920.852 387,916.263 390,911.487 393,906.514 396,901.337 399,895.947 402,890.336 405,884.494 408,878.413 411,872.081 414,865.49 417,858.628 420,851.484 423,844.047 426,836.304 429,828.243 432,819.852 435,811.115 438,802.02 441,792.551 444,782.693 447,772.431 450,761.747 453,750.624 456,739.044 459,726.989 462,714.438 465,701.372 468,687.77 471,673.609 474,658.866 477,643.518 480,627.539 483,610.904 486,593.586 489,575.557 492,556.787 495,537.246 498,516.902 501,495.724 504,473.675 507,450.721 510,426.824 513,401.945 516,376.045 519,349.081 522,321.009 525,291.785 528,261.36 531,229.686 534,196.711 537,162.381 540,126.642 543,89.4344 546,50.699 549,10.3727 552,-31.6099",
               stroke:'purple',
               "stroke-width":'20',
               opacity:'0.333',
               fill:'none'
             });

svg.append("g")
    .attr("class","axis") //Assign axis class
    .attr("transform","translate(0,1039)")
    .call(xAxis);

svg.append("g")
    .attr("class","axis")
    .attr("transform","translate(60,1)")
    .call(yAxis);

svg.append("text")
    .attr("x",xScale(1998.3))
    .attr("y",1090)
    .attr("class","axis-label")
    .text("Year");

svg.append("text")
    .attr("x",-yScale(25))
    .attr("y",xScale(1970)+16)
    .attr("transform","rotate(-90)")
    .attr("class","axis-label")
    .text("Cumulative number of Moore's Laws");

svg.append("text")
    .attr("x",xScale(1979))
    .attr("y",yScale(64))
    .attr("font-size","32px")
    .text("\"Moore's Law of ______\"")
