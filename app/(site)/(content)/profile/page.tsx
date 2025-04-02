import { getProfileById, getUser } from "@/actions/auth/user.action";
import ProfileCard from "@/components/features/profile/profile-card";

export default async function ProfilePage() {
  const user = await getUser({ serverComponent: true });
  if (!user) {
    return <div>로그인이 필요합니다.</div>;
  }

  const profile = await getProfileById({ userId: user.id });

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">내 프로필</h1>
      <ProfileCard profile={profile} />
    </main>
  );
}
