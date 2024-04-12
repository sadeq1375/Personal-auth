"use client";
import { settings } from "@/actions/settings";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useTransition } from "react";
import { FcSettings } from "react-icons/fc";

const SettingsPage = () => {
  const [isPending, startTransition] = useTransition();
  const onClick = () => {
    startTransition(() => {
      settings({ name: "New Name!" });
    });
  };
  return (
    <Card className="w-[600px]">
      <CardHeader>
        <p className="text-2xl font-semi-bold flex justify-center items-center">
          <FcSettings />
          Settings
        </p>
      </CardHeader>
      <CardContent>
        <Button onClick={onClick} disabled={isPending}>
          Update name
        </Button>
      </CardContent>
    </Card>
  );
};

export default SettingsPage;
