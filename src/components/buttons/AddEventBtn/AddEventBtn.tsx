import React from 'react';
import { Link } from 'react-router-dom';

import { IoCreateOutline } from 'react-icons/io5';

import { PATH_ADD_EVENT } from '@app/constants/paths.constants';

type Props = {
  className?: string;
};

const iconStyle = {
  fontSize: '1.25rem'
};

const AddEventBtn: React.FC<Props> = ({ className }) => {
  return (
    <Link
      className={` flex items-center gap-1 p-2  w-max rounded-md border-black dark:border-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-900 hover:text-white dark:hover:bg-gray-700 active:scale-90 transition-all ${
        className || ''
      }`}
      to={PATH_ADD_EVENT}
    >
      Add new event <IoCreateOutline style={iconStyle} />
    </Link>
  );
};

export default AddEventBtn;
