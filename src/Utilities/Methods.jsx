import { useMutation, useQuery } from "@tanstack/react-query"
import instance from "./Axios";


const fetchLesson = async(id)=>{
  const response =await instance(`home/get-lesson/${id}`)
  return response.data
}

const fetchChapter = async(id)=>{
  const response =await instance(`home/get-chapter/${id}`)
  return response.data
}

const fetchMulti = async(id)=>{
  const chapter =await instance(`home/get-chapter/${id}`)
  const lesson =await instance(`home/get-lesson/${id}`)
  let response=[...chapter.data,...lesson.data]
  return response
}

export const getChapters=(userId)=>{
    console.log(userId);
    return useQuery({
        queryKey:['chapters'],
        queryFn:async ()=>{
          const response=await instance(`home/?userId=${userId}`)
          console.log(response.data);
          
          return response.data
        },

       })
}

export const multiFetch = (id, type, shouldFetch) => {
  const fetchFn = type === 'lesson' ? fetchLesson : type === 'chapter' ? fetchMulti :fetchChapter ;

  return useQuery({
    queryKey: [type, id], // Pass the query key as an array
    queryFn: () => fetchFn(id), // The function to fetch data
    enabled: !!id && shouldFetch, // Conditional fetching
  });
};

export const makeCompleteLesson = (lessonId, chapterId) => {
  if (!lessonId || !chapterId) {
    console.error('lessonId and chapterId are required parameters.');
    throw new Error('lessonId and chapterId must be provided.');
  }

  console.log('Lesson ID:', lessonId, 'Chapter ID:', chapterId);

  // Return the mutation function directly
  return useMutation({
    mutationFn:async ()=>{
      const response = await instance.post(`home/complete-lesson?chapterId=${chapterId}&lessonId=${lessonId}`);
      

      return response.data; //
    }
  })
}


export const updateRate = (num, chapterId) => {
  return {
    mutationFn: async () => {
      try {
        const response = await instance.post(`/update-rights/?Rights=${num}&chapterId=${chapterId}`);
        return response.data; // Returning the response data if necessary
      } catch (error) {
        console.error('Error completing lesson:', error);
        throw error; // Ensure error is propagated
      }
    },
  };
};



// complete-lesson-
