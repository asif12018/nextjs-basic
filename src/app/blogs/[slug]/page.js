import React from 'react'

const blogs = [
    {
      "slug": "react-vs-vue",
      "title": "React vs Vue: Which Framework Should You Choose?",
      "description": "A comprehensive comparison between React and Vue.js to help you decide which framework is best suited for your next project."
    },
    {
      "slug": "jwt-authentication",
      "title": "Understanding JWT Authentication in Web Applications",
      "description": "An in-depth guide to implementing JWT authentication, covering the fundamentals, best practices, and use cases."
    },
    {
      "slug": "node-express-crud",
      "title": "Building a CRUD Application with Node.js and Express",
      "description": "Learn how to create a basic CRUD application using Node.js and Express, complete with step-by-step instructions."
    },
    {
      "slug": "mongodb-indexing",
      "title": "Boost Your MongoDB Performance with Indexing",
      "description": "This article explains how to use indexing in MongoDB to improve query performance, with practical examples."
    },
    {
      "slug": "async-await",
      "title": "Mastering Async/Await in JavaScript",
      "description": "A detailed guide on how to effectively use async/await in JavaScript, with real-world examples and best practices."
    }
  ]


function detailsPage({params}) {
    console.log(params.slug)
    const {title, description} = blogs.find((blog)=> blog.slug == params.slug)
    return (
        <div className='h-screen'>
            <div className='border-2 p-12 '>
                <p>{title}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default detailsPage
