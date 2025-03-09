import axios from "axios";

const BASE_URL = "http://localhost:3001/api/v1"; 

export async function fetchGraphData(tenantId: string, blueprintId: string, versionId: string) {
    const API_URL = `${BASE_URL}/${tenantId}/actions/blueprints/${blueprintId}/${versionId}/graph`;

    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching graph data: ", error);
        return null;
    }
}