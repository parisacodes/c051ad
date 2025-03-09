# Avantos Blueprint Graph Viewer

This is a **Next.js** application that visualizes **Blueprint DAGs (Directed Acyclic Graphs)** using **React Flow**.

## 🚀 Features
- Fetches and displays a **Blueprint Graph** with nodes and edges.
- **Color-coded edges** for better visibility.
---

## 🛠 Setup & Installation

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/my-avantos-app.git
cd my-avantos-app
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start the Mock API Server (for local testing)
```sh
cd mock-server
npm install  # Run this only if dependencies aren’t installed
npm start
```

### 4️⃣ Start the Next.js App
```sh
cd my-avantos-app
npm run dev
```
This runs the app on **[http://localhost:3000](http://localhost:3000).**

---

## 📂 Project Structure
```
my-avantos-app/
├── app/  
│   ├── tenant/[tenantId]/blueprint/[blueprintId]/version/[versionId]/page.tsx  # Graph Page  
│   ├── components/  
│   │   ├── Graph.tsx  # Handles DAG visualization  
├── lib/  
│   ├── api.ts  # API fetch logic  
├── mock-server/  # Local mock server for testing  
│   ├── index.js  # API server script  
│   ├── graph.json  # Sample graph data  
├── public/  # Static assets  
├── styles/  # Global styles  
├── package.json  # Dependencies  
├── README.md  # You're here!  
```

---

## 🔗 API Endpoint
The application fetches graph data using:

```http
GET /api/v1/{tenantId}/actions/blueprints/{blueprintId}/{versionId}/graph
```
To test locally, ensure the mock server is running.

---

## 🖥️ Usage
1. Open:  
   **[http://localhost:3000/tenant/123/blueprint/bp_456/version/bpv_123](http://localhost:3000/tenant/123/blueprint/bp_456/version/bpv_123)**
2. Each node represents a form in the workflow.

---

## 🛠 Technologies Used
- **Next.js** (App Router)
- **React Flow** (Graph rendering)
- **TypeScript**
- **Axios** (API calls)
- **Node.js** (Mock server)
