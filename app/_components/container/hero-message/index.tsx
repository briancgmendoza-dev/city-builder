import Container from "@/app/_components/container"
import Typography from "@/app/_components/ui/typography"

const HeroMessage = () => (
  <>
    <Container className="bg-slate-200 p-4">
      <Typography type="h1" text="City Builder" className="text-red-700 font-bold text-xl md:text-2xl" />
    </Container>
  </>
)

export default HeroMessage
