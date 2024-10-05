import Image from "next/image";


const Gallery = () => {
    return (
        <div className='min-h-screen px-12 py-24'>
            <h6 className='text-3xl mb-12'>Gallery Page</h6>
            <div>
                {
                    [1, 2, 3, 4, 5]?.map((img) => (<Image key={img} src={`/images/${img}.jpg`} height={'1080'} width={'1920'} alt="cat images"/>))
                }
            </div>
            {/* <Image src="/images/1.jpg" height='1080' width='1920' alt="" /> */}
        </div>
    );
};

export default Gallery;