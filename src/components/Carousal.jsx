

import { Carousel } from "flowbite-react";

function CarousalPage() {
  return (
    <div className="h-56 sm:h-64 xl:h-[650px] 2xl:h-96">
      <Carousel>
      <img src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="..." />
        <img src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="..." />
        <img src="https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="..." />
        <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="..." />
        <img src="https://images.unsplash.com/photo-1626249893783-cc4a9f66880a?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="..." />
      </Carousel>
    </div>
  );
}

export default CarousalPage