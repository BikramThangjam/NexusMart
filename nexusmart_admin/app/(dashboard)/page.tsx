import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      Homepage
      <UserButton />
    </div>
  );
}
