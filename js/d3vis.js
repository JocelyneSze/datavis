var body = d3.select("body");

var graphics = body.append("svg");

graphics.attr("width", 700);
graphics.attr("height",600);

graphics.append("circle")
    .attr("r",55)
    .attr("cx",400)
    .attr("cy",400)
    .style("fill","#6699CC")
    .style("stroke","#CCCCCC")
    .style("stroke-width","2px")
    .style("opacity","5.5");

graphics.append("rect")
    .attr("x",50)
    .attr("y",20)
    .attr("height",30)
    .attr("width",50)
    .style("fill","#4682B4");

var chartHeight = 300;

// x axis
graphics.append("line")
    .attr("x1",100)
    .attr("y1",302)
    .attr("x2",chartHeight)
    .attr("y2",302)
    .attr("stroke","#000000")
    .attr("stroke-width",2);

// y axis
graphics.append("line")
    .attr("x1",100)
    .attr("y1",100)
    .attr("x2",100)
    .attr("y2",302)
    .attr("stroke","#000000")
    .attr("stroke-width",2);


graphics.append("rect")
    .attr("x",105)
    .attr("y",chartHeight-200)
    .attr("height",200)
    .attr("width",19)
    .style("fill","#4682B4");

graphics.append("rect")
    .attr("x",125)
    .attr("y",chartHeight-102)
    .attr("height",102)
    .attr("width",19)
    .style("fill","#4682B4");

graphics.append("rect")
    .attr("x",145)
    .attr("y",chartHeight-52)
    .attr("height",52)
    .attr("width",19)
    .style("fill","#4682B4");

graphics.append("rect")
    .attr("x",165)
    .attr("y",chartHeight-43)
    .attr("height",43)
    .attr("width",19)
    .style("fill","#4682B4");

graphics.append("rect")
    .attr("x",185)
    .attr("y",chartHeight-94)
    .attr("height",94)
    .attr("width",19)
    .style("fill","#4682B4");

graphics.append("rect")
    .attr("x",205)
    .attr("y",chartHeight-35)
    .attr("height",35)
    .attr("width",19)
    .style("fill","#4682B4");

graphics.append("rect")
    .attr("x",225)
    .attr("y",chartHeight-26)
    .attr("height",26)
    .attr("width",19)
    .style("fill","#4682B4");

graphics.append("rect")
    .attr("x",245)
    .attr("y",chartHeight-15)
    .attr("height",15)
    .attr("width",19)
    .style("fill","#4682B4");

graphics.append("rect")
    .attr("x",265)
    .attr("y",chartHeight-10)
    .attr("height",10)
    .attr("width",19)
    .style("fill","#4682B4")
    .attr("transform","rotate(-45,265,290)");

graphics.append("text")
    .text("X axis")
    .attr("x",305)
    .attr("y",chartHeight+5);

graphics.append("text")
    .text("Y axis")
    .attr("x",95)
    .attr("y",95);

//face
graphics.append("circle")
    .attr("r",100)
    .attr("cx",100)
    .attr("cy",500)
    .style("fill","#ffff00");

//eyebrows
var eyebrow = d3.svg.arc()
    .innerRadius(10)
    .outerRadius(15)
    .startAngle(445*(Math.PI/180))
    .endAngle(275*(Math.PI/180));

graphics.append("path")
    .attr("d",eyebrow)
    .style("fill","#000000")
    .attr("transform","translate(70,460)");

graphics.append("path")
    .attr("d",eyebrow)
    .style("fill","#000000")
    .attr("transform","translate(130,460)");

//eyes
graphics.append("circle")
    .attr("r",5)
    .attr("cx",70)
    .attr("cy",470);

graphics.append("circle")
    .attr("r",5)
    .attr("cx",130)
    .attr("cy",470);

//moustache
var moustache = d3.svg.arc()
    .innerRadius(25)
    .outerRadius(40)
    .startAngle(145*(Math.PI/180))
    .endAngle(220*(Math.PI/180));

graphics.append("path")
    .attr("d",moustache)
    .style("fill","#000000")
    .attr("transform","translate(100,470)");

//mouth
var mouth = d3.svg.arc()
    .innerRadius(85)
    .outerRadius(90)
    .startAngle(145*(Math.PI/180))
    .endAngle(220*(Math.PI/180));

graphics.append("path")
    .attr("d",mouth)
    .style("fill","#000000")
    .attr("transform","translate(100,450)");