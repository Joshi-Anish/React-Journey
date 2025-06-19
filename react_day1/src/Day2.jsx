// tailwind css

function Day2(props) {
  // console.log("props",props);
  const { data } = props;
  return (
    // <span className="text-red-400 text-[50px] font-black tracking-wider">Day two</span>
    <div className="w-lg  border bg-grey-100 rounded-xl p-4" >
      <div className="w-full aspect-video
      bg-red-500">
        <img src="https://content.dhhs.vic.gov.au/sites/default/files/2022-01/protein_0.jpg" alt="" className="w-full h-full object-center object-cover"/>
      </div>
      

    <h4 className="text-lg font-bold text-gray-700 ">{data.title}</h4>
      <p className="text-lg"> {data.description} </p>

    </div>
  );
}

export default Day2;