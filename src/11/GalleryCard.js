import GallreryData from './GalleryData.json'

export default function GalleryCard({title,location,url,ktag}) {
    // const title = GallreryData.galTitle
    // const location = GallreryData.galPhotographyLocation
    // const url = GallreryData.galWebImageUrl
    // let ktag = GallreryData.galSearchKeyword
   
    if(ktag.includes(',')){
        ktag = ktag.split(',').map(item=>
           <span key = {item}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #{item}
                        </span>
    )
}
            else {
               ktag = <span 
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        {ktag}</span>

            }
    

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={url} alt={title}/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base">
                        {location}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                        {ktag}
                </div>
        </div>
    )
}
