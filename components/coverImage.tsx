import Image from "next/image";

export function CoverImage({ photoUrl, width, height, alt }: CoverImageTypes) {
    return (
      <div style={{position:"relative", width, height }}>
        <Image
          src={photoUrl}
          alt={alt}
          sizes="150px"
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
    )
  }