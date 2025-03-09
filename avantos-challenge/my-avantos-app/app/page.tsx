"use client";

import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                    Welcome to the Form DAG Viewer
                </h1>
                <p className="text-gray-600 mb-6">
                    Click the button below to explore the form graph.
                </p>
                <Link
                    href="/tenant/123/blueprint/bp_456/version/bpv_123"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-md transition duration-200"
                >
                    View Form Graph
                </Link>
            </div>
        </div>
    );
}
