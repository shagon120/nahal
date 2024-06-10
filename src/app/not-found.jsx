import Image from "next/image";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Image
        src="/banner.png"
        width={150}
        height={150}
        priority={true}
        alt="logo brand GrizzlyBeard"
        className="rounded-full"
      />
      <p className="text-5xl font-bold m-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent p-3">
        Page Not Found!
      </p>
    </div>
  );
};

export default NotFound;
