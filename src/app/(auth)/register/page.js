"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function RegisterPage() {
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl text-center">Create an account</CardTitle>
        <CardDescription className="text-center">
          Registration is disabled in this template preview.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col space-y-4">
        {/* Registration form placeholders would go here */}
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <Button disabled className="w-full">
          Sign up
        </Button>
        <div className="text-sm text-center text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="text-primary hover:underline">
            Sign in
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
