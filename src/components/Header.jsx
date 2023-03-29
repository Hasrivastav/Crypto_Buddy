// import React from 'react'
// import { Button,HStack } from '@chakra-ui/react'
// import { Link } from 'react-router-dom'

// const Header = () => {
//   return (
//     <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"}>
//         <Button  variant={"unstyled"} color={"white"}>
//             <Link to='/'>Home</Link>
//         </Button>
//         <Button variant={"unstyled"} color={"white"}>
//             <Link to='/exchange'>Exchange</Link>
//         </Button>
//         <Button variant={"unstyled"} color={"white"}>
//             <Link to='/coins'>Coins</Link>
//         </Button>
//     </HStack>
    
//   )
// }

// export default Header

import React from 'react'
import {Link} from 'react-router-dom'
import{Drawer,DrawerBody,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,Button, useDisclosure,VStack,HStack} from '@chakra-ui/react';
import {BiMenuAltLeft} from "react-icons/bi";

const Header = () => {
    const {isOpen,onOpen,onClose}= useDisclosure()   
  return (
  <>
  <Button 
   zIndex={"overlay"}
  pos={"fixed"}
  top={"4"}
  left={"4"}
  colorScheme={"gray"}
  p={"0"} 
  w={"10"}
  h={"10"}
  borderRadius={"full"}
  onClick={onOpen}>
    <BiMenuAltLeft size={"20"} />
  </Button>

  {/* Drawer is used in chakra ui for the side drawer  */}
  <Drawer   isOpen={isOpen} placement="left" onClose={onClose} >

    <DrawerOverlay />
    <DrawerContent>
    <DrawerCloseButton  />
    <DrawerHeader>CryptoBuddy</DrawerHeader>
    <DrawerBody>
<VStack>
<Button onClick={onClose} variant={"ghost"} colorScheme={"gray"}>
    <Link to={"/"}>Home</Link>
</Button>
<Button onClick={onClose} variant={"ghost"} colorScheme={"gray"}>
<Link to='/exchange'>Exchange</Link>
</Button>
<Button onClick={onClose} variant={"ghost"}  colorScheme={"gray"}>
<Link to='/coins'>Coins</Link>
</Button>


</VStack>
<HStack pos={"absolute"} bottom={"10"} left={"0"} w={"full"} variant={"outline"} justifyContent={"space-evenly"}>
    <Button onClick={onClose} colorScheme={'gray'}>
        <Link to={"/login"}>Log In</Link>
    </Button>
     <Button onClick={onClose} colorScheme={"gray"} variant={"outline"}>
        <Link to={"/signup"}>Sign Up</Link>
    </Button>
</HStack>
</DrawerBody>
</DrawerContent>
   
</Drawer>
  </>
  )
}

export default Header