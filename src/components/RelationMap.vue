<template>
  <svg id="Viz_area" height="100%" width="100%"></svg>
</template>

<script setup lang="ts">
import * as d3 from "d3";
import { onMounted } from "vue";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const drag = (simulation: any) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function dragstarted(event: any, d: any) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function dragged(event: any, d: any) {
    d.fx = event.x;
    d.fy = event.y;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function dragended(event: any, d: any) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }

  return d3
    .drag()
    .on("start", dragstarted)
    .on("drag", dragged)
    .on("end", dragended);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function linkArc(d: any) {
  const r = Math.hypot(d.target.x - d.source.x, d.target.y - d.source.y);
  return `
    M${d.source.x},${d.source.y}
    A${r},${r} 0 0,1 ${d.target.x},${d.target.y}
  `;
}
const links = [
  { source: "Microsoft", target: "Amazon", type: "licensing" },
  { source: "Microsoft", target: "HTC", type: "licensing" },
  { source: "Samsung", target: "Apple", type: "suit" },
  { source: "Motorola", target: "Apple", type: "suit" },
  { source: "Nokia", target: "Apple", type: "resolved" },
  { source: "HTC", target: "Apple", type: "suit" },
  { source: "Kodak", target: "Apple", type: "suit" },
  { source: "Microsoft", target: "Barnes & Noble", type: "suit" },
  { source: "Microsoft", target: "Foxconn", type: "suit" },
  { source: "Oracle", target: "Google", type: "suit" },
  { source: "Apple", target: "HTC", type: "suit" },
  { source: "Microsoft", target: "Inventec", type: "suit" },
  { source: "Samsung", target: "Kodak", type: "resolved" },
  { source: "LG", target: "Kodak", type: "resolved" },
  { source: "RIM", target: "Kodak", type: "suit" },
  { source: "Sony", target: "LG", type: "suit" },
  { source: "Kodak", target: "LG", type: "resolved" },
  { source: "Apple", target: "Nokia", type: "resolved" },
  { source: "Qualcomm", target: "Nokia", type: "resolved" },
  { source: "Apple", target: "Motorola", type: "suit" },
  { source: "Microsoft", target: "Motorola", type: "suit" },
  { source: "Motorola", target: "Microsoft", type: "suit" },
  { source: "Huawei", target: "ZTE", type: "suit" },
  { source: "Ericsson", target: "ZTE", type: "suit" },
  { source: "Kodak", target: "Samsung", type: "resolved" },
  { source: "Apple", target: "Samsung", type: "suit" },
  { source: "Kodak", target: "RIM", type: "suit" },
  { source: "Nokia", target: "Qualcomm", type: "suit" },
];
const types = Array.from(new Set(links.map((d) => d.type)));
const data = {
  nodes: Array.from(
    new Set(links.flatMap((l) => [l.source, l.target])),
    (id) => ({ id })
  ),
  links,
};
const color = d3.scaleOrdinal(types, d3.schemeCategory10);

const chart = () => {
  const links = data.links.map((d) => Object.create(d));
  const nodes = data.nodes.map((d) => Object.create(d));

  const simulation = d3
    .forceSimulation(nodes)
    .force(
      "link",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      d3.forceLink(links).id((d: any) => d.id)
    )
    .force("charge", d3.forceManyBody().strength(-400))
    .force("x", d3.forceX())
    .force("y", d3.forceY());

  const svg = d3
    .select("#Viz_area")
    .attr("viewBox", [-800 / 2, -400 / 2, 800, 400])
    .style("font", "12px sans-serif");

  // Per-type markers, as they don't inherit styles.
  svg
    .append("defs")
    .selectAll("marker")
    .data(types)
    .join("marker")
    .attr("id", (d) => `arrow-${d}`)
    .attr("viewBox", "0 -5 10 10")
    .attr("refX", 15)
    .attr("refY", -0.5)
    .attr("markerWidth", 6)
    .attr("markerHeight", 6)
    .attr("orient", "auto")
    .append("path")
    .attr("fill", color)
    .attr("d", "M0,-5L10,0L0,5");

  const link = svg
    .append("g")
    .attr("fill", "none")
    .attr("stroke-width", 1.5)
    .selectAll("path")
    .data(links)
    .join("path")
    .attr("stroke", (d) => color(d.type))
    .attr(
      "marker-end",
      (d) => `url(${new URL(`#arrow-${d.type}`, "https://127.0.0.1")})`
    );

  const node = svg
    .append("g")
    .attr("fill", "currentColor")
    .attr("stroke-linecap", "round")
    .attr("stroke-linejoin", "round")
    .selectAll("g")
    .data(nodes)
    .join("g")
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .call(drag(simulation) as any);

  node
    .append("circle")
    .attr("class", "stroke-text")
    .attr("stroke-width", 1.5)
    .attr("r", 4);

  node
    .append("text")
    .attr("x", 8)
    .attr("y", "0.31em")
    .text((d) => d.id)
    .clone(true)
    .lower()
    .attr("fill", "none")
    .attr("class", "stroke-text")
    .attr("stroke-width", 3);

  simulation.on("tick", () => {
    link.attr("d", linkArc);
    node.attr("transform", (d) => `translate(${d.x},${d.y})`);
  });

  // invalidation.then(() => simulation.stop());

  return svg.node();
};

onMounted(() => {
  chart();
});
</script>
