"use client";

import IntroGatewayScreen from "@/components/ui/IntroGatewayScreen";
import { useRouter } from "next/navigation";

export default function PortalPage() {
  const router = useRouter();

  const handleEnterHome = () => {
    try {
      sessionStorage.setItem("roysons_intro_entered", "true");
    } catch {
      // ignore
    }
    router.push("/");
  };

  return <IntroGatewayScreen onEnterHome={handleEnterHome} />;
}

