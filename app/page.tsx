import Container from "@/app/_components/container"
import HeroMessage from "@/app/_components/container/hero-message"
import CitiesContainer from "./_components/container/cities-container"

export default function Home() {
  return (
    <main className="p-8 pb-20 sm:p-20">
      <Container type="section" className="w-full h-full">
        <HeroMessage />
        <CitiesContainer />
      </Container>
    </main>
  );
}
