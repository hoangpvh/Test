import Image from 'next/image';

interface PlatformProps {
  iconName: string;
  altText?: string;
}

const Platform: React.FC<PlatformProps> = ({
  iconName,
  altText = 'Platform Icon',
}) => {
  return (
    <div className="w-[120px] h-[120px] p-2 bg-white rounded-3xl border border-[#ebeff6] flex flex-col justify-center items-center gap-2.5">
      <div className="w-[60px] h-[60px] relative">
        <Image
          src={`/${iconName}.png`}
          alt={altText}
          width={60}
          height={60}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Platform;
