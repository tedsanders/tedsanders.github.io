
var svg = d3.select('#mooreslaw');

var barheight = 14;

var data = [[1975,"original"],
            [1995,"2nd law?"],
            [1997,"Wealth/billionaires"],
            [1997,"Software"],
            [1999,"Agriculture"],
            [1999,"Bandwidth"],
            [2000,"Radio astronomy"],
            [2000,"Data traffic"],
            [2002,"Optical storage"],
            [2002,"Radio"],
            [2002,"DNA sequencing"],
            [2002,"Quantum computing"],
            [2003,"Fusion"],
            [2004,"Space"],
            [2004,"Hard drives"],
            [2005,"Optics"],
            [2005,"Wind"],
            [2006,"Razor blades"],
            [2006,"Photonics"],
            [2007,"Finance"],
            [2008,"Solar power"],
            [2008,"Microbiology"],
            [2009,"Big tech projects"],
            [2009,"Cities"],
            [2010,"Electric cars"],
            [2010,"Science"],
            [2010,"Lasers"],
            [2011,"Power efficiency??"],
            /*[2011,"Computer capacity"],*/
            [2011,"Mass spectroscopy"],
            [2011,"Mad science"],
            [2011,"Atoms"],
            [2011,"Healthcare"],
            [2012,"Corn"],
            [2012,"Real estate"],
            [2012,"Sharing"],
            [2012,"Big data"],
            [2012,"8-bit computers"],
            [2012,"Mind"],
            [2012,"Education"],
            [2012,"Everything"],
            [2013,"3D printing"],
            [2013,"Medicine"],
            [2013,"Windshield wipers"],
            [2014,"Aircraft"],
            [2014,"Steam power"],
            [2014.5,"Raspberry Pi clusters"],
            [2014.5,"NFL field goals"],
            [2014.5,"Weird"],
            [2014.5,"Oil"],
            [2014.5,"Moore's Laws"]];


var bars = svg.selectAll('rect.bars')
              .data(data)
              .enter()
              .append('rect')
              .attr({
                width:function(d){return 12*(2028-1975)},
                height:barheight,
                x:function(d){return 12*(1975-1970)},
                y:function(d,i){return 700-barheight*i},
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
                y:function(d,i){return 700-barheight*i},
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
                cy:function(d,i){return 700-barheight*i+barheight/2},
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
                y:function(d,i){return 700-barheight*i+barheight-3},
                fill:'black',
                "font-size":barheight-2,
                "font-family":'sans-serif'
              });

var fit = svg.append("path")
             .attr({
               /*euclidean error squared
               d:"M60,715.982 72,715.319 84,714.567 96,713.716 108,712.753 120,711.662 132,710.427 144,709.028 156,707.445 168,705.652 180,703.622 192,701.323 204,698.721 216,695.774 228,692.437 240,688.659 252,684.382 264,679.538 276,674.054 288,667.844 300,660.814 312,652.853 324,643.839 336,633.633 348,622.077 360,608.992 372,594.177 384,577.402 396,558.409 408,536.903 420,512.553 432,484.981 444,453.763 456,418.416 468,378.393 480,333.077 492,281.767 504,223.669 516,157.888 528,83.4051 540,-0.929212",*/
               /*proportional error squared*/
               d:"M60,718.084 72,717.647 84,717.145 96,716.567 108,715.903 120,715.14 132,714.262 144,713.253 156,712.093 168,710.759 180,709.225 192,707.461 204,705.433 216,703.102 228,700.421 240,697.339 252,693.795 264,689.72 276,685.035 288,679.648 300,673.454 312,666.333 324,658.145 336,648.73 348,637.906 360,625.46 372,611.15 384,594.697 396,575.779 408,554.028 420,529.019 432,500.264 444,467.203 456,429.189 468,385.482 480,335.228 492,277.447 504,211.012 516,134.626 528,46.7991 540,-54.1824",
               stroke:'purple',
               "stroke-width":'14',
               opacity:'0.5',
               fill:'none'
             });
