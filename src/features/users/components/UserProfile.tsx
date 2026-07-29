"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "@/types/user";
import { Building2, Mail, MapPin, Phone } from "lucide-react";
import InfoItem from "./InfoItem";

type Props = {
  user: User;
};

export default function UserProfile({ user }: Props) {
  return (
    <Card>
      <CardHeader className="items-center text-center">
        <Avatar className="mb-4 h-28 w-28">
          <AvatarImage src={user.image} />

          <AvatarFallback>
            {user.firstName[0]}
            {user.lastName[0]}
          </AvatarFallback>
        </Avatar>

        <CardTitle className="text-3xl">
          {user.firstName} {user.lastName}
        </CardTitle>

        <Badge variant="secondary">@{user.username}</Badge>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid gap-4 lg:grid-cols-2">
          <InfoItem
            icon={<Mail className="h-5 w-5" />}
            label="Email"
            value={user.email}
          />

          <InfoItem
            icon={<Phone className="h-5 w-5" />}
            label="Phone"
            value={user.phone}
          />

          <InfoItem
            icon={<Building2 className="h-5 w-5" />}
            label="Company"
            value={user.company.name}
          />

          <InfoItem
            icon={<MapPin className="h-5 w-5" />}
            label="Location"
            value={`${user.address.city}, ${user.address.country}`}
          />
        </div>
      </CardContent>
    </Card>
  );
}
