import Container from "@/app/_components/container";
import HeroMessage from "@/app/_components/container/hero-message";
import HousesList from "@/app/_components/container/houses-list";
import HousesContainer from "@/app/_components/container/houses-container";

export default function Home() {
  return (
    <main className="p-8 pb-20 sm:p-20">
      <Container type="section" className="w-full h-full">
        <HeroMessage />
        <Container className="mt-10 flex flex-col md:flex-row border border-red-600">
          <HousesList />
          <HousesContainer />
        </Container>
      </Container>
    </main>
  );
}
