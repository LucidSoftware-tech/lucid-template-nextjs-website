"use client";

import { useState } from "react";
import Link from "next/link";
import { useUsers, useDeleteUser } from "@/features/users/hooks/useUsers";
import { Table } from "@/components/ui/Table";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { Icons } from "@/config/icons";
import { useDebounce } from "@/hooks/useDebounce";

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 500);
  
  const { data, isLoading } = useUsers({ search: debouncedSearch });
  const deleteMutation = useDeleteUser();

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this user?")) {
      await deleteMutation.mutateAsync(id);
    }
  };

  const columns = [
    { key: "name", label: "Name", headerClassName: "w-[250px]" },
    { key: "email", label: "Email" },
    { 
      key: "role", 
      label: "Role",
      render: (val) => <Badge variant={val === "Admin" ? "default" : "secondary"}>{val}</Badge>
    },
    { 
      key: "status", 
      label: "Status",
      render: (val) => <Badge variant={val === "Active" ? "success" : "muted"}>{val}</Badge>
    },
    {
      key: "actions",
      label: "Actions",
      headerClassName: "text-right",
      cellClassName: "text-right",
      render: (_, row) => (
        <div className="flex justify-end gap-2">
          <Link href={`/users/${row.id}/edit`}>
            <Button variant="ghost" size="icon">
              <Icons.edit className="h-4 w-4" />
            </Button>
          </Link>
          <Button variant="ghost" size="icon" onClick={() => handleDelete(row.id)}>
            <Icons.delete className="h-4 w-4 text-destructive" />
          </Button>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Users</h2>
          <p className="text-muted-foreground">Manage your team members and their account permissions here.</p>
        </div>
        <Link href="/users/create">
          <Button>
            <Icons.add className="mr-2 h-4 w-4" />
            Add User
          </Button>
        </Link>
      </div>

      <div className="flex items-center">
        <div className="w-full max-w-sm">
          <Input 
            placeholder="Search users..." 
            icon={Icons.search}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="rounded-md border bg-card">
        {isLoading ? (
          <div className="flex justify-center p-8">
            <Icons.spinner className="h-6 w-6 animate-spin text-muted-foreground" />
          </div>
        ) : (
          <Table columns={columns} data={data?.data || []} />
        )}
      </div>
    </div>
  );
}
