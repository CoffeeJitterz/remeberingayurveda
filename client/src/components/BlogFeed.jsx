import Blog from "./Blog"

export default function BlogFeed() {

const posts = [
    {title: 'Post 1',
     date: 'Saturday Febuary 19th 2022',
     body: 'This is the sort of content which would be viewed here if you were to take the time to read it.'
    },
    {title: 'Post 2',
     date: 'Saturday Febuary 19th 2022',
     body: 'This is the sort of content which would be viewed here if you were to take the time to read it.'
    },
    {title: 'Post 3',
     date: 'Saturday Febuary 19th 2022',
     body: 'This is the sort of content which would be viewed here if you were to take the time to read it.'
    }

] 

const output = posts.map((item) => {
    return <Blog 
    title={item.title}
    date={item.date}
    body={item.body}
    />
})

  return (
<div>
   {output}
</div>

  )
}
