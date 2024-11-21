import { X } from 'lucide-react';
import { ReactNode } from 'react';
import { Types } from '../types';
import './index.scss';
interface IProps {
  heading: string;
  name: Types;
  icon: ReactNode;
  discriptons: ReactNode;
  children?: ReactNode;
}

const Alert = ({ heading, icon, discriptons, name, children }: IProps) => {
  console.log(children);
  return (
    <div className={name}>
      <div className='alert-header'>
        <div
          className='alert-title'
          style={{ display: 'flex', alignItems: 'center', gap: 10 }}
        >
          {children}
          {icon}
          <h4>{heading}</h4>
        </div>
        <span>
          <X />
        </span>
      </div>
      <div>{discriptons}</div>
    </div>
  );
};

export default Alert;
