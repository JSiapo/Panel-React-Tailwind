import CardImage from './components/widgets/default/CardImage'
function App() {
  return (
<div className="container mx-auto my-auto py-4">


<CardImage 
image='https://images.unsplash.com/photo-1515711660811-48832a4c6f69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80' 
title='Case study' 
subtitle='Finding customers for your new business!!!'
description='Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.'
/>

<button type='button' className='bg-blue-500 md:bg-green-400 hover:bg-red-700 md:hover:bg-blue-700 text-white rounded-xl font-bold py-2 px-4' >My Button</button>


</div>

  );
}

export default App;
