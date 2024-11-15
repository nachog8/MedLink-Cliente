import Loading from './loading';

export const FullScreenLoader = () => {
  return (
    <div className="absolute left-0 top-0 z-10 flex h-screen w-screen items-center justify-center bg-white">
      <Loading color="secondary" size="lg" />
    </div>
  );
};
