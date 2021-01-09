interface ICardImage{
  image:string,
  title: string,
  subtitle: string,
  description: string,
}

const CardImage = ({image,title,subtitle,description}:ICardImage) => {
  return (
<div className="max-w-md mx-auto bg-white rounded-xl shadow-xl overflow-hidden md:max-w-2xl dark:bg-dark">
  <div className="md:flex">
    <div className="md:flex-shrink-0">
      <img className="h-48 w-full object-cover md:w-48" src={image} alt={image} />
    </div>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{title}</div>
      <a href="/" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{subtitle}</a>
      <p className="mt-2 text-gray-500">{description}</p>
    </div>
  </div>
</div>
  )
}

// https://images.unsplash.com/photo-1515711660811-48832a4c6f69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80

export default CardImage
