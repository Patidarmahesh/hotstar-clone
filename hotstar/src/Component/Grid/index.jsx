import React, { Fragment } from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
// import './grid.css';

// const GridCard = ()=>{
//     return(
//         <Fragment>

//             <div style={{border:"1px solid gold"}} className="Grid_Container">
//                 <div className="Grid_data1">NAVBAR</div>
//                 <div className="Grid_data2"><img src="https://images.pexels.com/photos/672142/pexels-photo-672142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/></div>
//                 <div className="Grid_data3"><img src="https://images.pexels.com/photos/4878372/pexels-photo-4878372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/></div>
//                 <div className="Grid_data4"><img src="https://images.pexels.com/photos/66877/butterfly-exotic-south-america-amazon-66877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/></div>
//                 <div className="Grid_data5"></div>
//                 <div className="Grid_data6"></div>
//                 <div className="Grid_data7">FOOTER</div>
//             </div>
//         </Fragment>
//     )
// }
// export default GridCard;

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
      title: 'Bed',
    },
    {
      img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
      title: 'Kitchen',
    },
    {
      img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
      title: 'Sink',
    },
    {
      img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
      title: 'Books',
    },
    {
      img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
      title: 'Chairs',
    },
    {
      img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
      title: 'Candle',
    },
    {
      img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
      title: 'Laptop',
    },
    {
      img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
      title: 'Doors',
    },
    {
      img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
      title: 'Storage',
    },
    {
      img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
      title: 'Coffee table',
    },
    {
      img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
      title: 'Blinds',
    },
  ];

const GridCard = () => {
  return (
    <Fragment>
        <div style={{display:"flex",justifyContent:"center"}}>
      <ImageList
        sx={{ width: 800, height: 660 }}
        variant="woven"
        cols={3}
        gap={8}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=161&fit=crop&auto=format`}
              srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      </div>
    </Fragment>
  );
};
export default GridCard;
