import Image from "next/image";

interface ProfileImageProps {
  src: string;
  alt: string;
  size?: number;
}

export default function ProfileImage({ src, alt, size = 60 }: ProfileImageProps) {
  return (
    <div style={{
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: '50%',
      overflow: 'hidden',
      flexShrink: 0
    }}>
      <Image 
        src={src} 
        alt={alt} 
        width={size} 
        height={size}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
    </div>
  );
}
