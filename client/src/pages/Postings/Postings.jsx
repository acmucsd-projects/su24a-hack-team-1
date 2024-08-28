import React from 'react';
import './postings.css';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion"
import VerticalNavbar from "../../components/VerticalNavbar";


const Postings = () => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/EditProfile'); // Navigate to the Edit Profile page
    };
    return (
        <div>
            <VerticalNavbar />

            <header className="postings-header">
                <div className="profile-info">
                    <div className="profile-pic-holder"></div>
                    <h2>First Name Last Name - Location</h2>
                </div>
                <div className="bttns">
                    <button id="btn-edit-pf" onClick={handleClick}>Edit Profile</button>
                </div>
            </header>
            <header className="line"></header>

            <div className="profile-container">

                
                <div className="gallery">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Postings;

// const Postings = () => {
//   return <Container maxW="container.lg" py={5}>
//   <Flex
//   py={10}
//   px={4}
//   pl={{base:4, md:10}}
//   w={"full"}
//   mx={"auto"}
//   flexDirection= {"column"}
//   >
//     <ProfileHeader />

//   </Flex>
//   <Flex>
//     px={{base:2, sm:4}};
//     maxW={"full"}
//     mx={"auto"}
//     borderTop={"1px solid"}
//     borderColor={"whiteAlpha.300"}
//     direction={"column"}
//     <ProfileTabs/>
//     <ProfilePosts/>
//   </Flex>
//   </Container>;
// };

// export default Postings;

// function Postings() {
//     return (
//       <>
//         <div id="main">
//           <div id="hero">
//             <div id="nav">
//             </div>
//             <div className="left">
//               <div id="header">

//                 <div className="buttons">
//                   <button id="btn-edit">Edit Profile</button>
//                 </div>
//               </div>
//               <div style={{ borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20 }}></div>
//               <div class="container">
//                 <div class="box" id="box1">Post 1</div>
//                 <div class="box" id="box2">Post 2</div>
//                 <div class="box" id="box3">Post 3</div>
//                 <div class="box" id="box4">Post 4</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }
  
//   export default Postings;