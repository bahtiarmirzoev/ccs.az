"use client";

import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { FeedbackWithId } from "@/lib/db/schema";
import { toast } from "sonner";

export default function AdminPage() {
  const [data, setData] = useState<FeedbackWithId[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/feedback");
      if (!response.ok) throw new Error("Failed to fetch data");
      const feedback = await response.json();
      setData(feedback);
    } catch (error) {
      console.error("Error fetching feedback:", error);
      toast.error("Failed to load feedback data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div className="container mx-auto py-10">Loading...</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Feedback Requests</h1>
        <Button onClick={fetchData}>
          <Plus className="mr-2 h-4 w-4" />
          Refresh
        </Button>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
} 