import Banner from "@/components/Banner";
import Clients from "@/components/Cleints";
import Layuout from "@/components/layout/Layuout";

export default function Home() {
  return (
    <>
      <Layuout>
        <Banner />
        <Clients />
      </Layuout>
    </>
  )
}
