import Layout from "@/components/Layout"
import Header from "@/components/Layout/Header"

const DataEntryPage=({childern})=> {
  return (
    <>
   <Header/>
   <Layout> Data Entry</Layout>
    </>
  )
}
export async function getServerSideProps(context) {

  return {
    props: {
     
    },
  }
}

export default DataEntryPage