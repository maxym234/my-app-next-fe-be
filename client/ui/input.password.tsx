import React, {ReactNode} from 'react'
import Input from 'antd/lib/input';

interface Props {
    size?: any,
    placeholder?: string,
    prefix: ReactNode,
    type?: string,
    defaultValue?: string 
}

export const InputPasswordUI: React.FC<Props> = ({ size, placeholder, prefix, ...props }) => {  
    return (
        <Input.Password size={size} placeholder="large size" prefix={prefix} {...props} />
    )
}