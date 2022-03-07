<template>
  <v-container>
    <div id="chart">
      <v-alert
          v-model="alert"
          dismissible
          width="400"
          color="#766bf5"
          id="alert"
          border="left"
          icon="mdi-information"
          v-show="false"
          colored-border
          light
          outlined
      >
        <span></span>
      </v-alert>

    </div>

  </v-container>
</template>

<style>
#chart {
  position: relative !important;
}
#alert {
  position: absolute !important;
  right: 0;
  bottom: 0;
}
</style>

<script>
import * as d3 from "d3";

export default {
  props: ["objects", "correlations"],
  data: () => ({
  }),
  mounted() {
    this.drawChart();
  },
  methods: {
    drawChart() {
      var matrix = new Array(this.objects.length).fill().map(
          () => new Array(this.objects.length).fill().map(() => 0)
      );
      
      //Map list of data to matrix
      this.correlations.forEach(function (flow) {
        matrix[flow.to - 1][flow.from - 1] = flow.quantity;
      });
      
      /*//////////////////////////////////////////////////////////
      /////////////// Initiate Chord Diagram /////////////////////
      //////////////////////////////////////////////////////////*/
      var size = window.innerHeight - 40;
      // var dr = 40; //radial translation for group names
      // var dx = 20; //horizontal translation for group names
      var margin = { top: 20, right: 20, bottom: 20, left: 20 };
      var width = size - margin.left - margin.right;
      var height = size - margin.top - margin.bottom;
      var innerRadius = Math.min(width, height) * .39;
      var outerRadius = innerRadius * 1.08;
      
      d3.select("svg").remove();
      var root = d3.select("#chart");

      //Generate tooltip already, but keep it invisible for now.
      /*
      var toolTip = root.append("div")
          .classed("tooltip", true)
          .style("opacity", 0)
          .style("position", "absolute")
          .style("text-align", "center")
          .style("padding", "6px")
          .style("font", "12px sans-serif")
          .style("color", "black")
          .style("background", "silver")
          .style("border", "1px solid gray")
          .style("border-radius", "8px")
          .style("pointer-events", "none");
      */
      // var focusedChordGroupIndex = null;
      
      /*Initiate the SVG*/
      //D3.js v3!
      var svg = root.append("svg:svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom);
      
      var container = svg.append("g")
          .attr("transform", "translate(" +
              (margin.left + width / 2) + "," +
              (margin.top + height / 2) + ")")
          .on("click", function () {
            showAllChords();
          });
      
      var chord = customChordLayout()
          .padding(0.04)
          .sortSubgroups(d3.descending) /*sort the chords inside an arc from high to low*/
          .sortChords(d3.ascending) /*which chord should be shown on top when chords cross. Now the largest chord is at the top*/
          .matrix(matrix);
      
      /*//////////////////////////////////////////////////////////
      ////////////////// Draw outer Arcs /////////////////////////
      //////////////////////////////////////////////////////////*/
      var arc = d3.svg.arc()
          .innerRadius(innerRadius)
          .outerRadius(outerRadius);
      
      var g = container.selectAll("g.group")
          .data(chord.groups)
          .enter()
          .append("svg:g")
          .attr("class", (d) => "group group-" + this.objects[d.index].ID);
      
      g.append("svg:path")
          .attr("d", arc)
          .attr("id", (d, i) => "arc-" + i)
          .attr("class", function (d) {
            return "arcs " + d.relations.map((r) => "arc-rel-" + r).join(" ");
          })
          .style("fill", (d) => this.objects[d.index].Farbe)
          .style("cursor", "pointer")
          // .style("stroke", (d) => d3.rgb(this.objects[d.index].Farbe).brighter())
          .on("mouseover", function (d) { highlightChords(d.index) })
          // .on("click", function () { })
          /*.on("mouseover", function(d) {
            showArcToolTip(d);
          })
          .on("mouseout", function() { hideToolTip() });
          */

      g.append("text")
          .each(function(d) { d.angle = (d.startAngle + d.endAngle) / 2; })
          .attr("dy", ".35em")
          .attr("class", function (d) {
            return "titles " + d.relations.map((r) => "title-rel-" + r).join(" ");
          })
          .attr("id", (d, i) => "title-" + i)
          .attr("text-anchor", function(d) { return d.angle > Math.PI ? "end" : null; })
          .attr("transform", function(d) {
            return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
                + "translate(" + (outerRadius + 10) + ")"
                + (d.angle > Math.PI ? "rotate(180)" : "");
          })
          .style("font-size", "12px")
          .style("font-family", "'Roboto Condensed'")
          .style("font-weight", "400")
          .style("cursor", "pointer")
          .attr("fill", "#333")
          .text((d, i) => this.objects[i].Name)
          .on("mouseover", function (d) { highlightChords(d.index) });

      /*//////////////////////////////////////////////////////////
      //////////////// Initiate inner chords /////////////////////
      //////////////////////////////////////////////////////////*/
      // var chords = container.selectAll("path.chord")
      container.selectAll("path.chord")
          .data(chord.chords)
          .enter()
          .append("svg:path")
          .attr("class", function (d) {
            return "chord chord-source-" + d.source.index + " chord-target-" + d.target.index;
          })
          .attr("d", customChordPathGenerator().radius(innerRadius))
          //Change the fill to reference the unique gradient ID
          //of the source-target combination
          .style("fill", function (d) {
            return "url(#chordGradient-" + d.source.index + "-" + d.target.index + ")";
          })
          // .style("stroke", function (d) {
          //   return "url(#chordGradient-" + d.source.index + "-" + d.target.index + ")";
          // })
          .style("fill-opacity", "0.7")
          /*.on("mouseover", function(d) {
            if (focusedChordGroupIndex === null ||
                d.source.index === focusedChordGroupIndex ||
                d.target.index === focusedChordGroupIndex) {
              if (focusedChordGroupIndex === null) {
                d3.selectAll(".chord")
                    .style("fill-opacity", 0.2)
                    .style("stroke-opacity", 0.2);
                d3.select(this).style("fill-opacity", 1);
              }
              else {
                d3.selectAll(".chord.chord-source-" + focusedChordGroupIndex + ", " +
                    ".chord.chord-target-" + focusedChordGroupIndex)
                    .style("fill-opacity", 0.2)
                    .style("stroke-opacity", 0.2);
                d3.select(this).style("fill-opacity", 1);
              }

              // showChordToolTip(d);
            }
          })
          .on("mouseout", function() {
            if (focusedChordGroupIndex === null) {
              d3.selectAll(".chord")
                  .style("fill-opacity", 0.7)
                  .style("stroke-opacity", 1);
            }
            else {
              d3.selectAll(".chord.chord-source-" + focusedChordGroupIndex + ", " +
                  ".chord.chord-target-" + focusedChordGroupIndex)
                  .style("fill-opacity", 0.7)
                  .style("stroke-opacity", 1);
            }

            // hideToolTip();
          });
          */

      //Cf https://www.visualcinnamon.com/2016/06/orientation-gradient-d3-chord-diagram
      //Create a gradient definition for each chord
      var grads = svg.append("defs").selectAll("linearGradient")
          .data(chord.chords)
          .enter().append("linearGradient")
          //Create a unique gradient id per chord: e.g. "chordGradient-0-4"
          .attr("id", function (d) {
            return "chordGradient-" + d.source.index + "-" + d.target.index;
          })
          //Instead of the object bounding box, use the entire SVG for setting this.objects
          //in pixel this.objects instead of percentages (which is more typical)
          .attr("gradientUnits", "userSpaceOnUse")
          //The full mathematical formula to find the x and y this.objects
          .attr("x1", function (d) {
            return innerRadius * Math.cos((d.source.endAngle - d.source.startAngle) / 2 +
                d.source.startAngle - Math.PI / 2);
          })
          .attr("y1", function (d) {
            return innerRadius * Math.sin((d.source.endAngle - d.source.startAngle) / 2 +
                d.source.startAngle - Math.PI / 2);
          })
          .attr("x2", function (d) {
            return innerRadius * Math.cos((d.target.endAngle - d.target.startAngle) / 2 +
                d.target.startAngle - Math.PI / 2);
          })
          .attr("y2", function (d) {
            return innerRadius * Math.sin((d.target.endAngle - d.target.startAngle) / 2 +
                d.target.startAngle - Math.PI / 2);
          });

      //Set the starting color (at 0%)
      grads.append("stop")
          .attr("offset", "0%")
          .attr("stop-color", (d) => this.objects[d.source.index].Farbe);

      //Set the ending color (at 100%)
      grads.append("stop")
          .attr("offset", "100%")
          .attr("stop-color", (d) => this.objects[d.target.index].Farbe);
      
      
      /*//////////////////////////////////////////////////////////
          ////////////////// Initiate Ticks //////////////////////////
          //////////////////////////////////////////////////////////*/
      /*
      var ticks = g.append("svg:g")
          .selectAll("g.ticks")
          .data(groupTicks)
          .enter().append("svg:g")
          .attr("transform", function (d) {
            return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
                + "translate(" + outerRadius + 40 + ",0)";
          });
      */
      /*Append the tick around the arcs*/
      /*
      ticks.append("svg:line")
          .attr("x1", 1)
          .attr("y1", 0)
          .attr("x2", 6)
          .attr("y2", 0)
          .attr("class", "ticks")
          .style("stroke", "#333")
          .style("stroke-width", "1.5px");
      */
      
      /*Add the labels for the ticks*/
      /*
      ticks.append("svg:text")
          .attr("class", "tickLabels")
          .attr("x", 12)
          .attr("dy", ".35em")
          .style("font-size", "10px")
          .style("font-family", "sans-serif")
          .attr("fill", "#333")
          .attr("transform", function (d) {
            return d.angle > Math.PI ? "rotate(180)translate(-25)" : null;
          })
          .style("text-anchor", function (d) {
            return d.angle > Math.PI ? "end" : null;
          })
          .text(function (d) { return d.label; });
      */
      /*//////////////////////////////////////////////////////////
          ////////////////// Initiate Names //////////////////////////
          //////////////////////////////////////////////////////////*/
      /*g.append("svg:text")
          //.each(function (d) { d.angle = (d.startAngle + d.endAngle) / 2; })
          .attr("x", function (d) {
            const angle = d.angle + ((3 * Math.PI) / 2);
            return outerRadius * Math.cos(angle);
          })
          .attr("y", function (d) {
            const angle = d.angle + ((3 * Math.PI) / 2);
            return outerRadius * Math.sin(angle);
          })
          .attr("x", 6)
          .attr("dy", 15)
          .append("textPath")
          .attr("xlink:href", (d, i) => "group-" + i)
          // .attr("text-anchor", (d) => (d.angle < Math.PI ? "start" : "end"))
          /*.attr("transform", function(d) {
            const angle = d.angle + ((3 * Math.PI) / 2);
            return Math.sin(angle);
          })

          .attr("class", "titles")
          .style("font-size", "12px")
          .style("font-family", "sans-serif")
          .attr("fill", "#333")
          .text((d, i) => this.objects[i].Name);
          /*
          .attr("text-anchor", function (d) {
            return d.angle > Math.PI ? "end" : null;
          })
          .attr("transform", function (d) {
            var r = outerRadius + dr;
            var angle = d.angle + ((3 *Math.PI) / 2);
            var x = r * Math.cos(angle);
            var y = r * Math.sin(angle);
      
            if (d.angle > Math.PI) {
              x -= dx;
            }
            else {
              x += dx;
            }

            return "translate(" + x + ", " + y + ")";
          })
          */
        /*Lines from labels to arcs*/
      /*part in radial direction*/
      // this.g.append("line")
      /*
      g.append("line")
          .attr("x1", function (d) {
            return outerRadius * Math.cos(d.angle + ((3 * Math.PI) / 2));
          })
          .attr("y1", function (d) {
            return outerRadius * Math.sin(d.angle + ((3 * Math.PI) / 2));
          })
          .attr("x2", function (d) {
            return (outerRadius + dr) * Math.cos(d.angle + ((3 * Math.PI) / 2));
          })
          .attr("y2", function (d) {
            return (outerRadius + dr) * Math.sin(d.angle + ((3 * Math.PI) / 2));
          })
          .style("stroke", "#333")
          .style("stroke-width", "0.5px");
      */
      /*horizontal part*/
      // this.g.append("line")
      /*
      g.append("line")
          .attr("x1", function (d) {
            return (outerRadius + dr) * Math.cos(d.angle + ((3 * Math.PI) / 2));
          })
          .attr("y1", function (d) {
            return (outerRadius + dr) * Math.sin(d.angle + ((3 * Math.PI) / 2));
          })
          .attr("x2", function (d) {
            var x = (outerRadius + dr) * Math.cos(d.angle + ((3 * Math.PI) / 2));
            if (d.angle > Math.PI) {
              x -= dx - 5;
            }
            else {
              x += dx - 5;
            }
            return x;
          })
          .attr("y2", function (d) {
            return (outerRadius + dr) * Math.sin(d.angle + ((3 * Math.PI) / 2));
          })
          .style("stroke", "#333")
          .style("stroke-width", "0.5px");
      */
      /*//////////////////////////////////////////////////////////
          ////////////////// Extra Functions /////////////////////////
          //////////////////////////////////////////////////////////*/
      
      /*Returns an array of tick angles and labels, given a group*/
      /*
      function groupTicks(d) {
        var anglePerPerson = (d.endAngle - d.startAngle) / d.value;
        return d3.range(0, d.value, 100).map(function (v, i) {
          return {
            angle: v * anglePerPerson + d.startAngle,
            label: i % 5 ? null : v //Each 5th tick has a label
          };
        });
      }
      */

      //Update alert with description
      const showAlert = (index) => {
        const alert = document.getElementById("alert");
        const object = this.objects[index];
        const border = alert.getElementsByClassName("v-alert__border")[0];
        const icon = alert.getElementsByClassName("mdi-close-circle")[0];
        border.style.borderColor = object.Farbe;
        icon.style.color = object.Farbe;
        icon.style.caretColor = object.Farbe;
        var content = [
          object.Beschreibung,
          `<i>${object.Familie}</i>`,
        ];
        alert.getElementsByTagName('span')[0].innerHTML = content.join("<br>");
        alert.style.display = "block";
      }

      //Hide alert with description
      const hideAlert = () => {
        const alert = document.getElementById("alert");
        alert.style.display = "none";
      }
      
      //Hides all chords except the chords connecting to the subgroup /
      //location of the given index.
      const highlightChords = (index) => {
        //If this subgroup is already highlighted, toggle all chords back on.
        // if (focusedChordGroupIndex === index) {
        //   showAllChords();
        //   return;
        // }
      
        hideAllChords();
      
        //Show only the ones with source or target == index
        d3.selectAll(`#title-${index}, .title-rel-${index}, #arc-${index}, .arc-rel-${index}, .chord-source-${index}, .chord-target-${index}`)
            .transition().duration(500)
            .style("fill-opacity", "1");
      
        // focusedChordGroupIndex = index;

        showAlert(index);
      }
      
      function showAllChords() {
        svg.selectAll("path.titles, path.arcs, path.chord")
            .transition().duration(500)
            .style("fill-opacity", ".7");

        hideAlert();
        // focusedChordGroupIndex = null;
      }
      
      function hideAllChords() {
        svg.selectAll("text.titles, path.arcs, path.chord")
            .transition().duration(500)
            .style("fill-opacity", ".1");
      }
      /*
      const showChordToolTip = (chord) => {
        var prompt = "";
      
        if (chord.source.index !== chord.target.index) {
          prompt += chord.source.value + " Kunden gingen von " +
              this.objects[chord.target.index].Name + " nach " +
              this.objects[chord.source.index].Name + ".";
          prompt += "<br>";
          prompt += chord.target.value + " Kunden gingen von " +
              this.objects[chord.source.index].Name + " nach " +
              this.objects[chord.target.index].Name + ".";
        }
        else {
          prompt += chord.source.value + " Kunden blieben in " +
              this.objects[chord.source.index].Name + ".";
        }
      
        toolTip
            .style("opacity", 1)
            .html(prompt)
            .style("left", d3.event.pageX - toolTip.node().getBoundingClientRect().width / 2 + "px")
            .style("top", (d3.event.pageY - 50) + "px");
      }
      
      const showArcToolTip = (arc) => {
        var prompt = Math.round(arc.value) + " Kunden befinden sich in " + this.objects[arc.index].Name + ".";
      
        toolTip
            .style("opacity", 1)
            .html(prompt)
            .style("left", d3.event.pageX - toolTip.node().getBoundingClientRect().width / 2 + "px")
            .style("top", (d3.event.pageY - 30) + "px");
      }
      
      function hideToolTip() {
        toolTip.style("opacity", 0);
      }

      */
      
      ////////////////////////////////////////////////////////////
      //////////// Custom Chord Layout Function //////////////////
      /////// Places the Chords in the visually best order ///////
      ///////////////// to reduce overlap ////////////////////////
      ////////////////////////////////////////////////////////////
      //////// Slightly adjusted by Nadieh Bremer ////////////////
      //////////////// VisualCinnamon.com ////////////////////////
      ////////////////////////////////////////////////////////////
      ////// Original from the d3.layout.chord() function ////////
      ///////////////// from the d3.js library ///////////////////
      //////////////// Created by Mike Bostock ///////////////////
      ////////////////////////////////////////////////////////////
      function customChordLayout() {
        // var ε = 1e-6, ε2 = ε * ε, π = Math.PI, τ = 2 * π, τε = τ - ε, halfπ = π / 2, d3_radians = π / 180, d3_degrees = 180 / π;
        var π = Math.PI, τ = 2 * π;
        var chord = {}, chords, groups, matrix, n, padding = 0, sortGroups, sortSubgroups, sortChords;
        function relayout() {
          var subgroups = {}, groupSums = [], groupIndex = d3.range(n), subgroupIndex = [], k, x, x0, i, j;
          var numSeq;
          chords = [];
          groups = [];
          k = 0;
          i = -1;
      
          while (++i < n) {
            x = 0;
            j = -1;
            numSeq = [];
            while (++j < n) {
              x += matrix[i][j] || matrix[j][i];
            }
            groupSums.push(x);
            //////////////////////////////////////
            ////////////// New part //////////////
            //////////////////////////////////////
            for (var m = 0; m < n; m++) {
              numSeq[m] = (n + (i - 1) - m) % n;
            }
            subgroupIndex.push(numSeq);
            //////////////////////////////////////
            //////////  End new part /////////////
            //////////////////////////////////////
            k += x;
          }//while
      
          k = (τ - padding * n) / k;
          x = 0;
          i = -1;
          while (++i < n) {
            x0 = x;
            j = -1;
            var di = 0;
            var relatedIndexes = [];
            while (++j < n) {
              di = groupIndex[i];
              var dj = subgroupIndex[di][j];
              var v = matrix[di][dj] || matrix[dj][di];
              var a0 = x;
              var a1 = x += v * k;
              subgroups[di + "-" + dj] = {
                index: di,
                subindex: dj,
                startAngle: a0,
                endAngle: a1,
                value: v
              };
              (v || matrix[dj][di]) && relatedIndexes.push(dj);
            }//while
      
            groups[di] = {
              index: di,
              startAngle: x0,
              endAngle: x,
              value: (x - x0) / k,
              relations: relatedIndexes,
            };
            x += padding;
          }//while
      
          i = -1;
          while (++i < n) {
            j = i - 1;
            while (++j < n) {
              var source = subgroups[i + "-" + j], target = subgroups[j + "-" + i];
              if (source.value || target.value) {
                chords.push(source.value < target.value ? {
                  source: target,
                  target: source
                } : {
                  source: source,
                  target: target
                });
              }//if
            }//while
          }//while
          if (sortChords) resort();
        }//function relayout
      
        function resort() {
          chords.sort(function (a, b) {
            return sortChords((a.source.value + a.target.value) / 2, (b.source.value + b.target.value) / 2);
          });
        }
        chord.matrix = function (x) {
          if (!arguments.length) return matrix;
          n = (matrix = x) && matrix.length;
          chords = groups = null;
          return chord;
        };
        chord.padding = function (x) {
          if (!arguments.length) return padding;
          padding = x;
          chords = groups = null;
          return chord;
        };
        chord.sortGroups = function (x) {
          if (!arguments.length) return sortGroups;
          sortGroups = x;
          chords = groups = null;
          return chord;
        };
        chord.sortSubgroups = function (x) {
          if (!arguments.length) return sortSubgroups;
          sortSubgroups = x;
          chords = null;
          return chord;
        };
        chord.sortChords = function (x) {
          if (!arguments.length) return sortChords;
          sortChords = x;
          if (chords) resort();
          return chord;
        };
        chord.chords = function () {
          if (!chords) relayout();
          return chords;
        };
        chord.groups = function () {
          if (!groups) relayout();
          return groups;
        };
        return chord;
      }
      
      ////////////////////////////////////////////////////////////
      //////////// Custom Chord Path Generator ///////////////////
      ///////// Uses cubic bezier curves with quadratic //////////
      /////// spread of control points to minimise overlap ///////
      ////////////////// of adjacent chords. /////////////////////
      ////////////////////////////////////////////////////////////
      /////// Original from the d3.svg.chord() function //////////
      ///////////////// from the d3.js library ///////////////////
      //////////////// Created by Mike Bostock ///////////////////
      ////////////////////////////////////////////////////////////
      function customChordPathGenerator() {
        var source = function (d) {
          return d.source;
        };
        var target = function (d) {
          return d.target;
        };
        var radius = function (d) {
          return d.radius;
        };
        var startAngle = function (d) {
          return d.startAngle;
        };
        var endAngle = function (d) {
          return d.endAngle;
        };

        function chord(d, i) {
          var s = subgroup(this, source, d, i),
              t = subgroup(this, target, d, i);

          return "M" + s.p0
              + arc(s.r, s.p1, s.a1 - s.a0) + (equals(s, t)
                  ? curve(s.r, s.p1, s.a1, s.r, s.p0, s.a0)
                  : curve(s.r, s.p1, s.a1, t.r, t.p0, t.a0)
                  + arc(t.r, t.p1, t.a1 - t.a0)
                  + curve(t.r, t.p1, t.a1, s.r, s.p0, s.a0))
              + "Z";
        }

        function subgroup(self, f, d, i) {
          var subgroup = f.call(self, d, i),
              r = radius.call(self, subgroup, i),
              a0 = startAngle.call(self, subgroup, i) - (Math.PI / 2),
              a1 = endAngle.call(self, subgroup, i) - (Math.PI / 2);

          return {
            r: r,
            a0: a0,
            a1: a1,
            p0: [r * Math.cos(a0), r * Math.sin(a0)],
            p1: [r * Math.cos(a1), r * Math.sin(a1)]
          };
        }

        function equals(a, b) {
          return a.a0 === b.a0 && a.a1 === b.a1;
        }

        function arc(r, p, a) {
          return "A" + r + "," + r + " 0 " + +(a > Math.PI) + ",1 " + p;
        }

        function curve(r0, p0, a0, r1, p1, a1) {
          var deltaAngle = Math.abs(mod((a1 - a0 + Math.PI), (2 * Math.PI)) - Math.PI);
          var radialControlPointScale = Math.pow((Math.PI - deltaAngle) / Math.PI, 2) * 0.9;
          var controlPoint1 = [p0[0] * radialControlPointScale, p0[1] * radialControlPointScale];
          var controlPoint2 = [p1[0] * radialControlPointScale, p1[1] * radialControlPointScale];
          return "C " + controlPoint1[0] + " " + controlPoint1[1] + ", " +
              controlPoint2[0] + " " + controlPoint2[1] + ", " +
              p1[0] + " " + p1[1];
        }

        function mod(a, n) {
          return (a % n + n) % n;
        }

        chord.radius = function (v) {
          if (!arguments.length) return radius;
          radius = typeof v === "function" ? v : function () {
            return v;
          };
          return chord;
        };

        chord.source = function (v) {
          if (!arguments.length) return source;
          source = typeof v === "function" ? v : function () {
            return v;
          };
          return chord;
        };

        chord.target = function (v) {
          if (!arguments.length) return target;
          target = typeof v === "function" ? v : function () {
            return v;
          };
          return chord;
        };

        chord.startAngle = function (v) {
          if (!arguments.length) return startAngle;
          startAngle = typeof v === "function" ? v : function () {
            return v;
          };
          return chord;
        };

        chord.endAngle = function (v) {
          if (!arguments.length) return endAngle;
          endAngle = typeof v === "function" ? v : function () {
            return v;
          };
          return chord;
        };

        return chord;
      }
    }
  }
}
</script>
