import { NotFoundContent } from '@/components/not-found';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#eeeef1] p-4">
      <div className="grid w-full grid-cols-2 justify-items-center space-y-5">
        <Image
          src="/banners/404-notFound.jpg"
          width={1000}
          height={787}
          alt="image-notFound"
          className="object-cover"
        />
        <NotFoundContent />
      </div>
    </div>
  );
}
