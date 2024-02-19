// constants datas

import { AiFillHome, AiOutlineFlag } from 'react-icons/ai';
import { MdLocalFireDepartment, MdLiveTv } from 'react-icons/md';
import { CgMusicNote } from 'react-icons/cg';
import { FiFilm } from 'react-icons/fi';
import { IoGameControllerSharp } from 'react-icons/io5';
import { ImNewspaper } from 'react-icons/im';
import { GiDiamondTrophy, GiEclipse } from 'react-icons/gi';
import { RiLightbulbLine, RiFeedbackLine } from 'react-icons/ri';
import { FiSettings, FiHelpCircle } from 'react-icons/fi';




export const categories = [
    { name: 'New', icon: <AiFillHome />, type: 'home' },
    {
      name: 'Trend',
      icon: <MdLocalFireDepartment />,
      type: 'trending',
    },
    {
      name: 'Music',
      icon: <CgMusicNote />,
      type: 'category',
    },
    { name: 'Movies and TV', icon: <FiFilm />, type: 'category' },

    { name: 'Live', icon: <MdLiveTv />, type: 'category' },
    {
      name: 'Game',
      icon: <IoGameControllerSharp />,
      type: 'category',
    },
    {
      name: 'News',
      icon: <ImNewspaper />,
      type: 'category',
    },
    {
      name: 'Sport',
      icon: <GiDiamondTrophy />,
      type: 'category',
    },
    {
      name: 'Learning Center',
      icon: <RiLightbulbLine />,
      type: 'category',
    },
    {
      name: 'Fashion and Beauty',
      icon: <GiEclipse />,
      type: 'category',
      divider: true,
    },
    { name: 'Settings', icon: <FiSettings />, type: 'menu' },
    {
      name: 'Report History',
      icon: <AiOutlineFlag />,
      type: 'menu',
    },
    { name: 'Help', icon: <FiHelpCircle />, type: 'menu' },
    {
      name: 'Send feedback',
      icon: <RiFeedbackLine />,
      type: 'menu',
    },
  ];