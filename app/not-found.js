import Button from "@/components/buttons/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-dvw h-dvh flex justify-center items-center">
      <div className="flex flex-col gap-5 items-center">
        <p className="text-3xl font-bold">404 - Not Found</p>
        <Link href="/">
          <Button>Go Home</Button>
        </Link>
      </div>
    </div>
  );
}
