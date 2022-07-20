import { Box, Flex, Image, Text, AspectRatio } from "@chakra-ui/react";
import React from "react";
import Check from "../mainCrausel/Check";
import "./HomePagecss/homePage.css";
import "../App.css";
import ProductCarousel from "../mainCrausel/ProductCarousel";

const CATEGORIES=[
  {image:"https://files.myglamm.com/site-images/original/SKin-1-2.png",
  name:"Skin"  
},{image:"https://files.myglamm.com/site-images/original/Lips-3.png",
name:"Lips"  
},{image:"https://files.myglamm.com/site-images/original/Superfoods-Model-120-X-120-px_2.jpg",
name:"Hair"  
},{image:"https://files.myglamm.com/site-images/original/Eyes-4.png",
name:"Eyes"  
},{image:"https://files.myglamm.com/site-images/original/Face-5.png",
name:"Face"  
},{image:"https://files.myglamm.com/site-images/original/Nails-1.png",
name:"Nails"  
},{image:"https://files.myglamm.com/site-images/original/App-PersonalCare_2.png",
name:"Sanitizing Care"  
},{image:"https://files.myglamm.com/site-images/original/Bath.png",
name:"Bath & Body"  
},
];

            
            
const kitsAndCombo=[
  {
    image:"https://files.myglamm.com/site-images/original/desktop-mk-combo.jpg",
    name:"Makeup Combos"
  },{
    image:"https://files.myglamm.com/site-images/original/desktop-skin-combo.jpg",
    name:"SkinCare Combos"
  }
  ,{
    image:"https://files.myglamm.com/site-images/original/Desktop-combo.jpg",
    name:"Beaut Kits Under 499"
  }

]




const Home = () => {
  return (
    <Box>
      {/* Top main carousel of the website */}
      <Box w="100%" p={4} color="white">
        <Check />
      </Box>
      <Box padding={"30px"}>
        <Flex
          direction={"column"}
          margin="auto"
          width="70%"
          // border={"1px solid red"}
          gap={"20px"}
        >
          <Box>
            <Image
              src="https://files.myglamm.com/site-images/original/proposition-banner-2240x614_1.jpg"
              width={"1100px"}
              height="250px"
            ></Image>
          </Box>
          <Box>
            <Image
              src="https://files.myglamm.com/site-images/original/1920x527-(6).jpg"
              width={"1100px"}
              height="250px"
            ></Image>
          </Box>
        </Flex>
      </Box>
      <Box>
        <Box padding={"10px"}>
          <Text fontSize={"2xl"} fontWeight="bold">
            IN THE SPOTLIGHT
            <Box
              bgImage="linear-gradient(white, #fbbcbc)"
              height="20px"
              margin="auto"
              marginTop="-20px"
              width={"230px"}
            />
          </Text>
        </Box>
        <Flex className="flexBoxForHome">
          <Box
            width="400px"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            height="250px"
            backgroundImage="url(https://files.myglamm.com/site-images/original/700x-488-monsoon.jpg)"
          ></Box>
          <Box
            width="400px"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            height="250px"
            backgroundImage="url(https://files.myglamm.com/site-images/original/700x488-sheet-mask.gif)"
          ></Box>
          <Box
            width="400px"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            height="250px"
            backgroundImage="url(https://files.myglamm.com/site-images/original/LIT700x488_1.jpg)"
          ></Box>
        </Flex>
      </Box>
      {/*  */}
      <Box>
        <Box padding={"10px"}>
          <Text fontSize={"2xl"} fontWeight="bold">
            BESTSELLERS
            <Box
              bgImage="linear-gradient(white, #fbbcbc)"
              height="20px"
              margin="auto"
              marginTop="-20px"
              width={"190px"}
            />
          </Text>
        </Box>
        <ProductCarousel />
      </Box>
      {/*  */}
      <Box>
        <Box padding={"10px"}>
          <Text fontSize={"2xl"} fontWeight="bold">
            ESSENTIAL BUDGET BUYS
            <Box
              bgImage="linear-gradient(white, #fbbcbc)"
              height="20px"
              margin="auto"
              marginTop="-20px"
              width={"330px"}
            />
          </Text>
        </Box>
        <Flex className="flexBoxForHome">
          <Box
            width="400px"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            height="250px"
            backgroundImage="url(https://files.myglamm.com/site-images/original/combo-Banner--700-x-488_1.jpg)"
          ></Box>
          <Box
            width="400px"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            height="250px"
            backgroundImage="url(https://files.myglamm.com/site-images/original/Glamm-Picks-700x488.jpg)"
          ></Box>
          <Box
            width="400px"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            height="250px"
            backgroundImage="url(https://files.myglamm.com/site-images/original/Glamm-Must-haves-desktop.jpg)"
          ></Box>
        </Flex>
      </Box>
      {/*  */}
      <Box>
      <Box padding={"10px"}>
          <Text fontSize={"2xl"} fontWeight="bold">
          SHOP FROM CATEGORIES
            <Box
              bgImage="linear-gradient(white, #fbbcbc)"
              height="20px"
              margin="auto"
              marginTop="-20px"
              width={"320px"}
            />
          </Text>
        </Box>
        <Box margin={"20px 0px 30px 0px"}>
          <Flex direction={"row"} width={"80%"} margin="auto" justifyContent={"space-between"} >
          {CATEGORIES.map((item)=>{
           return(
            <Box  >
            <Box borderRadius={"50%"} padding="5px" border={"1px solid #d4d4d4"} ><Image borderRadius={"50%"} width={"100px"} height="100px" src={item.image}></Image></Box>
            <Text fontSize={"15px"} fontWeight='bold' >{item.name}</Text>
          </Box>
         
           )
          })}

          </Flex>
        </Box>
      </Box>

      {/*  */}
      <Box>
        <Box padding={"10px"}>
          <Text fontSize={"2xl"} fontWeight="bold">
            WALLET OFFERS
            <Box
              bgImage="linear-gradient(white, #fbbcbc)"
              height="20px"
              margin="auto"
              marginTop="-20px"
              width={"220px"}
            />
          </Text>
        </Box>
        <Flex className="flexBoxForHome">
          <Box
            width="400px"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            height="250px"
            backgroundImage="url(https://files.myglamm.com/site-images/original/CRED-Pay-700x488-_1.jpg)"
          ></Box>
          <Box
            width="400px"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            height="250px"
            backgroundImage="url(https://files.myglamm.com/site-images/original/mobikwik-700x488_1.jpg)"
          ></Box>
          <Box
            width="400px"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            height="250px"
            backgroundImage="url(https://files.myglamm.com/site-images/original/simpl-700x488-_1.jpg)"
          ></Box>
        </Flex>
      </Box>
      {/*  */}
      <Box>
        <Box padding={"10px"}>
          <Text fontSize={"2xl"} fontWeight="bold">
            KITS {"&"} COMBOS
            <Box
              bgImage="linear-gradient(white, #fbbcbc)"
              height="20px"
              margin="auto"
              marginTop="-20px"
              width={"210px"}
            />
          </Text>
        </Box>
        <Flex width={"80%"} margin="auto" height={"350px"} gap={"30px"} justifyContent="space-between" marginBottom={"20px"} >
        {kitsAndCombo.map((item)=>{
          return (
            <Box lineHeight={"40px"} borderRadius="10px"  width="30%" height="350px" bgColor={"white"} className="boxShadow"   >
             
             {/* <Box> */}
                <Image width={"100%"} height="70%" borderTopLeftRadius="10px" borderTopRightRadius="10px" src={item.image} ></Image>
              {/* </Box> */}
             
                <Text fontWeight={"bold"} >{item.name}</Text>
                <Text fontSize={"13px"}>{item.name}</Text>
              </Box>
            // </Box>
          )
        })}
        </Flex>
      </Box>
      {/*  */}
      <Box>
        <Box padding={"10px"}>
          <Text fontSize={"2xl"} fontWeight="bold">
            BANK PARTNER
            <Box
              bgImage="linear-gradient(white, #fbbcbc)"
              height="20px"
              margin="auto"
              marginTop="-20px"
              width={"210px"}
            />
          </Text>
        </Box>
        <Flex className="flexBoxForHome">
          <Box
            width="400px"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            height="250px"
            backgroundImage="url(https://files.myglamm.com/site-images/original/Twid-Pay-700x488-.jpg)"
          ></Box>
          <Box
            width="400px"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            height="250px"
            backgroundImage="url(https://files.myglamm.com/site-images/original/IDFC-offer-700x488-_1.jpg)"
          ></Box>
          <Box
            width="400px"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            height="250px"
            backgroundImage="url(https://files.myglamm.com/site-images/original/IDFC-offer-700x488-.jpg)"
          ></Box>
        </Flex>
      </Box>
      <Box padding={"30px"}>
        <Flex
          direction={"column"}
          margin="auto"
          width="81%"
          // border={"1px solid red"}
          gap={"20px"}
        >
          <Box>
            <Image
              src="https://files.myglamm.com/site-images/original/Community-Banner-2240-x-344_1.jpg"
              width={"100%"}
              height="190px"
            ></Image>
          </Box>
        </Flex>
      </Box>
      <Box padding={"30px"}>
        <Flex
          direction={"column"}
          margin="auto"
          width="71%"
          // border={"1px solid red"}
          gap={"20px"}
        >
          <Box>
            <Image
              src="https://files.myglamm.com/site-images/original/disclaimer-mgp_1.png"
              width={"100%"}
              height="250px"
            ></Image>
          </Box>
        </Flex>
      </Box>
      <Box>
        <AspectRatio maxW="100%" height="600px" ratio={1}>
          <iframe
            src="https://www.youtube.com/embed/GdcxfyKNiDg?vq=hd1080&autoplay=1&loop=1&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3&fs=0&color=white&controls=0&disablekb=1&playlist=GdcxfyKNiDg"
            width="560"
            height="315"
            title="Shraddha Kapoor Wants You To #TellMyGlammWhatYouWant | MyGlamm TV Ad"
            frameborder="0"
          ></iframe>
        </AspectRatio>
      </Box>
    </Box>
  );
};

export default Home;
