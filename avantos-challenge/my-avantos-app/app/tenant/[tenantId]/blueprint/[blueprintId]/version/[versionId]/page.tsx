import Graph from "@/app/components/Graph";

interface PageProps {
  params: Promise<{ tenantId: string; blueprintId: string; versionId: string }>;
}

export default async function BlueprintPage({ params }: PageProps) {
  const resolvedParams = await params;

  return (
    <div className="container">
      <h1>Form DAG Viewer</h1>
      <div className="info-box">
        <p><strong>Tenant ID:</strong> {resolvedParams.tenantId}</p>
        <p><strong>Blueprint ID:</strong> {resolvedParams.blueprintId}</p>
        <p><strong>Version ID:</strong> {resolvedParams.versionId}</p>
      </div>
      <Graph />
    </div>
  );
}
