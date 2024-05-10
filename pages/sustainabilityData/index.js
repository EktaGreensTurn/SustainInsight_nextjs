import Layout from "@/components/Layout"
import Header from "@/components/Layout/Header"
import SustainabilityDataContainer from "@/page-containers/SustainabilityDataContainer"

const sustainabilityData=()=> {
  return (
    <>
   <Header />
   <Layout> <SustainabilityDataContainer/></Layout>
    </>
  )
}
export async function getServerSideProps(context) {

  return {
    props: {
     
    },
  }
}

export default sustainabilityData
