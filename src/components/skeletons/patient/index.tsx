import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { ScrollArea } from '@radix-ui/react-scroll-area';
import { Skeleton } from '@/components/ui/skeleton';

export default function PatientProfileCardSkeleton() {
  return (
    <Card className="w-full overflow-hidden lg:max-w-[500px]">
      <CardHeader className="w-full pb-0 pt-6">
        <Skeleton className="mx-auto h-40 w-40 rounded-full" />
      </CardHeader>

      <CardContent className="space-y-5">
        <section className="space-y-5 p-3 text-center">
          <Skeleton className="mx-auto h-8 w-48" />
          <Skeleton className="mx-auto h-10 w-full max-w-md" />
        </section>

        <Card>
          <CardContent className="my-5">
            <Skeleton className="h-80 w-full" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="my-5">
            <Skeleton className="h-80 w-full" />
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}

export function PatientDocumentationMedicalSkeleton() {
  return (
    <Card className="h-auto">
      <CardHeader className="rounded-t-lg border-b pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-2xl font-semibold text-gray-800">
            <Skeleton className="h-5 w-5 rounded-full" />
            <Skeleton className="h-8 w-48" />
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <ScrollArea className="h-[350px] pr-4">
          <div className="space-y-3">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-lg border border-gray-100 bg-white p-3 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <Skeleton className="h-8 w-8 rounded-full" />
                  <div className="flex flex-col gap-1">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-3 w-24" />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Skeleton className="h-8 w-8 rounded-full" />
                  <Skeleton className="h-8 w-8 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}

export function PatientActiveMedicationsSkeleton() {
  return (
    <Card>
      <CardHeader className="rounded-t-lg border-b pb-4">
        <CardTitle className="flex items-center gap-2 text-2xl font-semibold text-gray-800">
          <Skeleton className="h-5 w-5 rounded-full" />
          <Skeleton className="h-8 w-48" />
        </CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <ScrollArea className="h-[350px] pr-4">
          <div className="space-y-3">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="flex items-center gap-3 rounded-lg border border-gray-100 bg-white p-3 shadow-sm"
              >
                <Skeleton className="h-8 w-8 rounded-full" />
                <div className="flex flex-col space-y-1">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-3 w-24" />
                  <Skeleton className="h-2 w-40" />
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}

export function PatientMedicalHistorySkeleton() {
  return (
    <Card className="h-full w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl font-semibold text-gray-800">
          <Skeleton className="h-5 w-5 rounded" />
          <Skeleton className="h-8 w-48" />
        </CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="allergies" className="w-full">
          <TabsList className="mb-4 h-auto w-full flex-wrap">
            {[
              'allergies',
              'pathological',
              'no-pathological',
              'family inheritance',
            ].map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="flex-1 px-4 py-2 text-xs"
              >
                <Skeleton className="h-4 w-24" />
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="allergies">
            <Skeleton className="h-80 w-full" />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
