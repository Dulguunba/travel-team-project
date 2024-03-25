// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import { Header } from "@/components/Header";
// import { Footer } from "@/components/Footer";
// const Detail = ({ article }) => {
//     const { query } = useRouter();
//     const [filteredArticles, setFilteredArticles] = useState([]);


//     console.log("filteredArticles", filteredArticles);
//     // console.log("query", query);
//     console.log("article");

//     return (
//         <>
//             <Header />
//             <div className='flex justify-center items-center pt-24 pb-20'>
//                 <div className='flex justify-center itmes-center w-[800px] flex-col'>
//                     <h1 className="font-semibold text-4xl pb-5">The Impact of Technology on the Workplace: How Technology is Changing</h1>
//                     <div className='flex  items-center'>
//                         <img className='w-9 h-9 rounded-full ' src={article.user.profile_image ? article.user.profile_image : ("https://artscimedia.case.edu/wp-content/uploads/sites/79/2016/12/14205134/no-user-image.gif")} alt="" />
//                         <p className='pl-3 pr-5 font-normal text-base text-[#97989F]'>{article.user.name}</p>
//                         <p className='font-normal text-base text-[#97989F]'>{article.readable_publish_date} 2022</p>
//                     </div>
//                     <img className='rounded-xl h-[462px] w-[800px] mb-4 my-8' src={article.cover_image ? article.cover_image : ("https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg")} alt="" />
//                     <p className="font-normal text-xl text-[#3B3C4A]">Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.
//                         <br></br>
//                         <br></br>
//                         One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.</p>
//                     <h2 className="font-semibold text-2xl pt-8 pb-4">Research Your Destination</h2>
//                     <p className="font-normal text-xl text-[#3B3C4A]">While it's essential to leave room for spontaneity and unexpected adventures, having a rough itinerary can help you make the most of your time and budget. Identify the must-see sights and experiences and prioritize them according to your interests and preferences. This will help you avoid overscheduling and ensure that you have time to relax and enjoy your journey.
//                         <br></br><br></br>
//                         Vitae sapien pellentesque habitant morbi tristique. Luctus venenatis lectus magna fringilla. Nec ullamcorper sit amet risus nullam eget felis. Tincidunt arcu non sodales neque sodales ut etiam sit amet.</p>
//                     <h2 className="font-semibold text-2xl pt-8 pb-4">Plan Your Itinerary</h2>
//                     <p className="font-normal text-xl text-[#3B3C4A]">
//                         While it's essential to leave room for spontaneity and unexpected adventures, having a rough itinerary can help you make the most of your time and budget. Identify the must-see sights and experiences and prioritize them according to your interests and preferences. This will help you avoid overscheduling and ensure that you have time to relax and enjoy your journey.
//                         <br></br><br></br>

//                         Vitae sapien pellentesque habitant morbi tristique. Luctus venenatis lectus magna fringilla. Nec ullamcorper sit amet risus nullam eget felis. Tincidunt arcu non sodales neque sodales ut etiam sit amet.
//                     </p>
//                 </div>
//             </div>
//             <Footer />
//         </>
//     );

// };

// export async function getStaticPaths() {
//     const response = await fetch("https://dev.to/api/articles");
//     const data = await response.json();
//     const paths = data.map((article) => ({
//         params: { id: article.id.toString() },
//     }));

//     // console.log('paths', paths);
//     return {
//         paths,
//         fallback: false
//     }
// }

// export async function getStaticProps({ params }) {
//     const response = await fetch("https://dev.to/api/articles");
//     const data = await response.json();
//     console.log("params", params);
//     const article = data.find((article) => article.id === parseInt(params.id, 10));

//     console.log("article", article);

//     return {
//         props: {
//             article
//         }
//     }
// }

// export default Detail;
