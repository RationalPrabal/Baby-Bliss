// import React from 'react'
// import logo from "../Image/logo.png"

// import {
//     Box,
//     Flex,
//     Text,
//     IconButton,
//     Button,
//     Stack,
//     Collapse,
//     Icon,
//     Link,
//     Popover,
//     PopoverTrigger,
//     PopoverContent,
//     useColorModeValue,
//     useBreakpointValue,
//     useDisclosure,
//   } from '@chakra-ui/react';
  
//   import {
//     HamburgerIcon,
//     CloseIcon,
//     ChevronDownIcon,
//     ChevronRightIcon,
//   } from '@chakra-ui/icons';
// import Image from 'next/image';
  
//   const NavbaarF = () => {
//     const { isOpen, onToggle } = useDisclosure();
  
//     return (
//       <Box>
//         <Flex
//           bg={useColorModeValue('white', 'gray.800')}
//           color={useColorModeValue('gray.600', 'white')}
//           bgColor={"yellow"}
//           minH={'60px'}
//           py={{ base: 2 }}
//           px={{ base: 4 }}
//           borderBottom={1}
//           borderStyle={'solid'}
//           borderColor={useColorModeValue('gray.200', 'gray.900')}
//           align={'center'}>
//           <Flex
//             flex={{ base: 1, md: 'auto' }}
           
//             ml={{ base: -2 }}
//             display={{ base: 'flex', md: 'none' }}>
//             <IconButton
//               onClick={onToggle}
//               icon={
//                 isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
//               }
//               variant={'ghost'}
//               aria-label={'Toggle Navigation'}
//             />
//           </Flex>
//           <Flex flex={{ base: 1 }} bgColor={"yellow"} justify={{ base: 'center', md: 'start' }}>
//             <Text
//               textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
//               fontFamily={'heading'}
//               color={useColorModeValue('gray.800', 'white')}>
//             <Image src={logo} alt="..." width={50} height={10}/>
//             </Text>
  
//             <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
//               <DesktopNav />
//             </Flex>
//           </Flex>
  
//           <Stack
//             flex={{ base: 1, md: 0 }}
//             justify={'flex-end'}
//             direction={'row'}
//             spacing={6}>
//             <Button
//               as={'a'}
//               fontSize={'sm'}
//               fontWeight={400}
//               variant={'link'}
//               href={'#'}>
//               Sign In
//             </Button>
//             <Button
//               display={{ base: 'none', md: 'inline-flex' }}
//               fontSize={'sm'}
//               fontWeight={600}
//               color={'white'}
//               bg={'pink.400'}
//               href={'#'}
//               _hover={{
//                 bg: 'pink.300',
//               }}>
//               Sign Up
//             </Button>
//           </Stack>
//         </Flex>
  
//         <Collapse in={isOpen} animateOpacity>
//           <MobileNav />
//         </Collapse>
//       </Box>
//     );
//   }
  
//   const DesktopNav = () => {
//     const linkColor = useColorModeValue('gray.600', 'gray.200');
//     const linkHoverColor = useColorModeValue('gray.800', 'white');
//     const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
//     return (
//       <Stack direction={'row'} spacing={4}>
//         {NAV_ITEMS.map((navItem) => (
//           <Box key={navItem.label}>
//             <Popover trigger={'hover'} placement={'bottom-start'}>
//               <PopoverTrigger>
//                 <Link
//                   p={2}
//                   href={navItem.href ?? '#'}
//                   fontSize={'sm'}
//                   fontWeight={500}
//                   color={linkColor}
//                   _hover={{
//                     textDecoration: 'none',
//                     color: linkHoverColor,
//                   }}>
//                   {navItem.label}
//                 </Link>
//               </PopoverTrigger>
  
//               {navItem.children && (
//                 <PopoverContent
//                   border={0}
//                   boxShadow={'xl'}
//                   bg={popoverContentBgColor}
//                   p={4}
//                   rounded={'xl'}
//                   minW={'sm'}>
//                   <Stack>
//                     {navItem.children.map((child) => (
//                       <DesktopSubNav key={child.label} {...child} />
//                     ))}
//                   </Stack>
//                 </PopoverContent>
//               )}
//             </Popover>
//           </Box>
//         ))}
//       </Stack>
//     );
//   };
  
//   const DesktopSubNav = ({ label, href, subLabel }) => {
//     return (
//       <Link
//         href={href}
//         role={'group'}
//         display={'block'}
//         p={2}
//         rounded={'md'}
//         _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
//         <Stack direction={'row'} align={'center'}>
//           <Box>
//             <Text
//               transition={'all .3s ease'}
//               _groupHover={{ color: 'pink.400' }}
//               fontWeight={500}>
//               {label}
//             </Text>
//             <Text fontSize={'sm'}>{subLabel}</Text>
//           </Box>
//           <Flex
//             transition={'all .3s ease'}
//             transform={'translateX(-10px)'}
//             opacity={0}
//             _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
//             justify={'flex-end'}
//             align={'center'}
//             flex={1}>
//             <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
//           </Flex>
//         </Stack>
//       </Link>
//     );
//   };
  
//   const MobileNav = () => {
//     return (
//       <Stack
//         bg={useColorModeValue('white', 'gray.800')}
//         p={4}
//         display={{ md: 'none' }}>
//         {NAV_ITEMS.map((navItem) => (
//           <MobileNavItem key={navItem.label} {...navItem} />
//         ))}
//       </Stack>
//     );
//   };
  
//   const MobileNavItem = ({ label, children, href }) => {
//     const { isOpen, onToggle } = useDisclosure();
  
//     return (
//       <Stack spacing={4} onClick={children && onToggle}>
//         <Flex
//           py={2}
//           as={Link}
//           href={href ?? '#'}
//           justify={'space-between'}
//           align={'center'}
//           _hover={{
//             textDecoration: 'none',
//           }}>
//           <Text
//             fontWeight={600}
//             color={useColorModeValue('gray.600', 'gray.200')}>
//             {label}
//           </Text>
//           {children && (
//             <Icon
//               as={ChevronDownIcon}
//               transition={'all .25s ease-in-out'}
//               transform={isOpen ? 'rotate(180deg)' : ''}
//               w={6}
//               h={6}
//             />
//           )}
//         </Flex>
  
//         <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
//           <Stack
//             mt={2}
//             pl={4}
//             borderLeft={1}
//             borderStyle={'solid'}
//             borderColor={useColorModeValue('gray.200', 'gray.700')}
//             align={'start'}>
//             {children &&
//               children.map((child) => (
//                 <Link key={child.label} py={2} href={child.href}>
//                   {child.label}
//                 </Link>
//               ))}
//           </Stack>
//         </Collapse>
//       </Stack>
//     );
//   };
  
// //   interface NavItem {
// //     label: string;
// //     subLabel?: string;
// //     children?: Array<NavItem>;
// //     href?: string;
// //   }
  
//   const NAV_ITEMS= [
  
    
//     {
//       label: 'Boy Fashion',
//       children: [
//         {
//           label: 'Explore Design Work',
//           subLabel: 'Trending Design to inspire you',
//           href: '#',
//         },
//         {
//           label: 'New & Noteworthy',
//           subLabel: 'Up-and-coming Designers',
//           href: '#',
//         },
//       ],
//     },
//     {
//       label: 'Girl fashion',
//       children: [
//         {
//           label: 'Job Board',
//           subLabel: 'Find your dream design job',
//           href: '#',
//         },
//         {
//           label: 'Freelance Projects',
//           subLabel: 'An exclusive list for contract work',
//           href: '#',
//         },
//       ],
//     },
//     {
//       label: 'Footwear',
//       href: '#',
//     },
//     {
//       label: 'Toys',
//       href: '#',
//     },
//     {
//         label: 'Gear',
//         href: '#',
//       },
//       {
//         label: 'Feeding',
//         href: '#',
//       },
//       {
//         label: 'Bath',
//         href: '#',
//       },
//       {
//         label: 'Mom',
//         href: '#',
//       },
//       {
//         label: 'Health',
//         href: '#',
//       },
//       {
//         label: 'Diapering',
//         href: '#',
//       }
//   ];

  
// export default NavbaarF




import { Fragment } from 'react'
// import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const NavbaarF = () => {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default NavbaarF