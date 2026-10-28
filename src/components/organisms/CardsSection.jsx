import Title from "../atoms/Title";
import Image from "../atoms/Image";
import Subtitle from "../atoms/Subtitle";
import Description from "../atoms/Description";

export default function CardAbout({title, subtitle, description, children, images = [{src, alt, className}], className = "",
  id,}) {

  return (

    <>
      <section 
      id={id}
      className={`about mt-16 border-t-2 pb-16 ${className}`}> {/** card About*/}

        <div className="flex max-w-7xl mx-auto px-6 py-12 flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 ">
          <div>
            {title && <Title>{title}</Title>}
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
            </div>
            <div>
            {description && <Description>{description}</Description>}
            {children && <div className="mt-4">{children}</div>}
              </div>
              
          </div>

          <div className=" w-full md:w-1/2 flex flex-col items-center md:items-end gap-4 md:relative">
          {images.map((img,i)=> (
            <Image
            key={i}
              link={img.src}
              alt={img.alt || ""}
              className={`w-full rounded-lg shadow-lg ${img.className || ""}`}
             
      />
      ))}
          </div>
        </div>

      </section>
    </>
  )
}


