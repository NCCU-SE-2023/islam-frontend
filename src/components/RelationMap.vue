<template>
  <div ref="containerRef" style="height: 400px"></div>
</template>

<script setup lang="ts">
import go from "gojs";
import { ref, onMounted } from "vue";

const containerRef = ref<HTMLDivElement>();

onMounted(() => {
  const myDiagram = new go.Diagram(containerRef.value);

  myDiagram.nodeTemplate = new go.Node("Auto")
    .add(
      new go.Shape("RoundedRectangle", { strokeWidth: 0, fill: "white" }).bind(
        "fill",
        "color"
      )
    )
    .add(new go.TextBlock({ margin: 8, stroke: "#333" }).bind("text", "key"));

  myDiagram.model = new go.GraphLinksModel(
    [
      { key: "Alpha", color: "lightblue" },
      { key: "Beta", color: "orange" },
      { key: "Gamma", color: "lightgreen" },
      { key: "Delta", color: "pink" },
    ],
    [
      { from: "Alpha", to: "Beta" },
      { from: "Alpha", to: "Gamma" },
      { from: "Beta", to: "Beta" },
      { from: "Gamma", to: "Delta" },
      { from: "Delta", to: "Alpha" },
    ]
  );
});
</script>
