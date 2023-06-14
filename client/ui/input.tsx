import React, {ReactNode} from 'react'
import { Input } from 'antd';

interface Props {
    size?: any,
    placeholder?: string,
    prefix: ReactNode,
    type?: string,
    defaultValue?: string 
}

export const InputUI: React.FC<Props> = ({ size, placeholder, prefix, ...props }) => {  
    return (
        <Input size={size} placeholder={placeholder} prefix={prefix} {...props} />
    )
}