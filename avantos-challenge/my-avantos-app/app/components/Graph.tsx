"use client";

import React, { useEffect, useState } from "react";
import ReactFlow, { Node, Edge, Background } from "reactflow";
import "reactflow/dist/style.css";
import { fetchGraphData } from "@/lib/api";
import { useParams } from "next/navigation";

interface NodeData {
  id: string;
  type: string;
  position: { x: number; y: number };
  data: {
    id: string;
    component_key: string;
    component_type: string;
    component_id: string;
    name: string;
    prerequisites: string[];
    permitted_roles: string[];
    sla_duration: { number: number; unit: string };
    approval_required: boolean;
  };
}

export default function Graph() {
  const params = useParams();
  console.log("Extracted Params:", params);

  const tenantId = Array.isArray(params.tenantId) ? params.tenantId[0] : params.tenantId;
  const blueprintId = Array.isArray(params.blueprintId) ? params.blueprintId[0] : params.blueprintId;
  const versionId = Array.isArray(params.versionId) ? params.versionId[0] : params.versionId;

  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);

  useEffect(() => {
    async function getData() {
      if (!tenantId || !blueprintId || !versionId) {
        console.error("Missing required parameters:", { tenantId, blueprintId, versionId });
        return;
      }

      console.log("Fetching data for:", { tenantId, blueprintId, versionId });

      try {
        const data = await fetchGraphData(tenantId, blueprintId, versionId);

        if (data) {
          console.log("Received data:", data);

          // Format nodes
          const formattedNodes = data.nodes.map((node: NodeData, index: number) => ({
            id: node.id,
            type: "default",
            position: { x: index * 300, y: (index % 2) * 200 }, // Space nodes horizontally
            data: { label: node.data.name || "Unnamed Node" },
          }));

          // Format edges with unique colors
          const uniqueColors = ["#ff6b6b", "#4dabf7", "#74c69d", "#f4a261", "#9b5de5"];
          const formattedEdges = data.edges.map((edge: { source: string; target: string }, index: number) => ({
            id: `e-${edge.source}-${edge.target}`,
            source: edge.source,
            target: edge.target,
            animated: true,
            style: { stroke: uniqueColors[index % uniqueColors.length], strokeWidth: 2 },
            markerEnd: { type: "arrow" },
          }));

          setNodes(formattedNodes);
          setEdges(formattedEdges);
        }
      } catch (error) {
        console.error("Error fetching graph data:", error);
      }
    }

    getData();
  }, [tenantId, blueprintId, versionId]);

  return (
    <div style={{ width: "100vw", height: "80vh", padding: "20px", borderRadius: "10px", background: "#f8f9fa" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px", fontSize: "1.5rem" }}>Blueprint Graph</h2>
      <div style={{ width: "100%", height: "100%", border: "1px solid #ddd", borderRadius: "8px" }}>
        <ReactFlow nodes={nodes} edges={edges} fitView>
          <Background />
        </ReactFlow>
      </div>
    </div>
  );
  
  
}
