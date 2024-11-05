import Image from "next/image"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

function ProductDetails({visible,setVisible}) {

  return (
    <section onClick={(e)=>{if (e.target.tagName=="SECTION") {
     return setVisible(false)}}} className={`bg-[rgb(0,0,0,0.3)] fixed inset-0 z-50 flex justify-center items-center ${visible?"block":"hidden"}`}>
      <main className='bg-white w-[80vw] h-[90vh] md:w-[50vw] md:h-[60vh] flex-col justify-center'>
        <div className="flex flex-col items-center justify-center h-full">
        <Carousel className="h-64 w-64">
  <CarouselContent>
    <CarouselItem>
        <div className="w-64 h-64">
            <Image alt="product" width={200} height={200} src={"https://shia-theme.myshopify.com/cdn/shop/products/Product14_89e9fbed-3685-48ef-af82-fc46d79d4ffd.jpg?v=1600938282&width=533"} className="w-full h-full"></Image>
        </div>
        </CarouselItem>
    <CarouselItem>
        <div className="w-64 h-64">
        <Image alt="product" width={200} height={200} src={"https://shia-theme.myshopify.com/cdn/shop/products/Product14_89e9fbed-3685-48ef-af82-fc46d79d4ffd.jpg?v=1600938282&width=533"} className="w-full h-full"></Image>
        </div>
        </CarouselItem>
  </CarouselContent>
</Carousel>
        ...
            
        </div>
            
      </main>
    </section>
  )
}

export default ProductDetails
