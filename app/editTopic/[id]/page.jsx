import EditTopicFrom from "@/components/EditTopicFrom";
// import { useParams } from "next/navigation";

// const params = useParams();

const getTopicById = async (id) =>{
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });

    if(!res.ok){
      throw new Error("Failed to fetch topic");
    }

    const data = await res.json();
    console.log("API Response:", data); // Log the response

    return data.topic;

  } catch (error) {
    console.log(error);
  }
}

export default async function page({params}) {
  const {id} = params;
  const topic = await getTopicById(id);
  const { title, description } = topic;

    console.log(title);
  
    
  
  return (
    <>
        <EditTopicFrom id={id} title={title} description={description} />
    </>
  )
}
