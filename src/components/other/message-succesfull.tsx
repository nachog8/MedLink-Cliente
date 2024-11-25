import { CheckCircle2 } from 'lucide-react';

export const MessageSuccesfull = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-white p-6 shadow-md">
      <div className="rounded-full bg-green-100 p-3">
        <CheckCircle2 className="h-12 w-12 text-green-600" />
      </div>
      <p className="text-center text-gray-600">
        La información ha sido actualizada exitosamente.
      </p>
    </div>
  );
};
