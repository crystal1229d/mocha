"use client";

import { ExtendedProfile } from "@/types/entity/profile";
import Image from "next/image";

interface Props {
  profile: ExtendedProfile | null;
}

export default function ProfileCard({ profile }: Props) {
  if (!profile) return <div>프로필 정보를 불러오지 못했습니다.</div>;

  return (
    <section className="p-4 border rounded-lg shadow-md">
      <div className="flex items-center gap-4">
        <Image
          src={profile.profile?.avatar_url || "/default-avatar.png"}
          alt="프로필 이미지"
          width={64}
          height={64}
          className="rounded-full"
        />
        <div>
          <h2 className="text-xl font-semibold">{profile.profile?.nickname}</h2>
          <p className="text-sm text-gray-600">{profile.profile?.fullname}</p>
          <p className="text-sm text-gray-600">{profile.auth?.email}</p>
          <p className="text-sm text-gray-600">{profile.auth?.provider}</p>
        </div>
      </div>
      <p className="mt-4">{profile.profile?.bio || "자기소개가 없습니다."}</p>
    </section>
  );
}
