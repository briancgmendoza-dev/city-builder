import Container from "@/app/_components/container"

const Loader = () => (
  <Container className="z-10">
    <div className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 bg-gray-50 bg-opacity-75">
      <div className="w-16 h-16 border-4 border-t-4 border-gray-300 border-solid rounded-full animate-spin border-t-blue-500" />
    </div>
  </Container>
);

export default Loader
