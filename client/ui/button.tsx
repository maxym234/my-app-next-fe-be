import React, {ReactNode} from 'react'
import Button from 'antd/lib/button';

interface Props {
    key?: number,
    children: ReactNode,
    htmlType?: any,
}

export const ButtonUI: React.FC<Props> = ({ key, ...props }) => {  
    return (
        <Button {...props} />
    )
}