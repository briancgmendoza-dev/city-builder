import Container from "@/app/_components/container"
import Typography from "@/app/_components/ui/typography"

const HousesList = () => (
  <Container type="section" className="md:w-[50%]">
    <Container className="bg-slate-200 p-4">
      <Typography type="h2" text="Houses List" className=""/>
    </Container>
    <Container>
      <div>Houses</div>
    </Container>
    <Container className="bg-slate-200 flex justify-center items-center p-4">
      <button>Build a new house</button>
    </Container>
  </Container>
)

export default HousesList
