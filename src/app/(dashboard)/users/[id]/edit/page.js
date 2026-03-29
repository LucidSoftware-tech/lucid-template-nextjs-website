"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Icons } from "@/config/icons";
import { useUser, useUpdateUser } from "@/features/users/hooks/useUsers";

const userSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  role: z.string().min(1, "Role is required"),
  status: z.string().min(1, "Status is required"),
});

export default function EditUserPage({ params }) {
  const router = useRouter();
  const id = params.id;
  
  const { data: user, isLoading } = useUser(id);
  const updateMutation = useUpdateUser();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  });

  useEffect(() => {
    if (user) reset(user);
  }, [user, reset]);

  const onSubmit = async (data) => {
    try {
      await updateMutation.mutateAsync({ id, data });
      router.push("/users");
    } catch (err) {
      console.error(err);
    }
  };

  if (isLoading) {
    return (
      <div className="flex h-40 items-center justify-center">
        <Icons.spinner className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/users">
          <Button variant="outline" size="icon">
            <Icons.chevronLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h2 className="text-2xl font-bold tracking-tight">Edit User</h2>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>User Details</CardTitle>
          <CardDescription>Update the information for this user.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input
              label="Full Name"
              error={errors.name?.message}
              {...register("name")}
            />
            <Input
              label="Email Address"
              type="email"
              error={errors.email?.message}
              {...register("email")}
            />
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-medium leading-none">Role</label>
                <select 
                  {...register("role")}
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  <option value="Admin">Admin</option>
                  <option value="User">User</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium leading-none">Status</label>
                <select 
                  {...register("status")}
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>
            
            <div className="pt-4 flex justify-end gap-2">
              <Link href="/users">
                <Button type="button" variant="outline">Cancel</Button>
              </Link>
              <Button type="submit" isLoading={updateMutation.isPending}>
                Save Changes
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
